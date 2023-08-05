
function registerWasmHTTPListener(js, { base, args = [] } = {}) {
    let path = new URL(registration.scope).pathname
    if (base && base !== '') path = `${trimEnd(path, '/')}/${trimStart(base, '/')}`
  
    const handlerPromise = new Promise(setHandler => {
      self.wasmhttp = {
        path,
        setHandler,
      }
    })
  
    const go = new Go()
    go.argv = [js, ...args]
    fetch(js,{
      method: "GET",
      headers: {
          "Content-Type": atob("YXBwbGljYXRpb24vd2FzbQ=="),
          "Accept-Encoding":atob("Z3ppcCwgZGVmbGF0ZSwgYnI="),
         
      }
  })
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, go.importObject);
    go.run(instance);
  });
    /*WebAssembly.instantiateStreaming( fetch("apii",{
        method: "GET",
        headers: {
            "Accept":atob("YXBwbGljYXRpb24vd2FzbSwgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLCBhcHBsaWNhdGlvbi9qc29uLCBhcHBsaWNhdGlvbi94bWwsIHRleHQvcGxhaW4sIHRleHQvaHRtbCwgKi4q"),
            "Content-Type": atob("YXBwbGljYXRpb24vd2FzbQ=="),
            "Accept-Encoding":atob("Z3ppcCwgZGVmbGF0ZSwgYnI="),
            "User-Agent":navigator.userAgent,
        }
    }), go.importObject).then(({ instance }) => go.run(instance))*/
  
    addEventListener(atob("ZmV0Y2g="), e => {
      const { pathname } = new URL(e.request.url)
      if (!pathname.startsWith(path)) return
  
      e.respondWith(handlerPromise.then(handler => handler(e.request)))
    })
  }
  
  function trimStart(s, c) {
    let r = s
    while (r.startsWith(c)) r = r.slice(c.length)
    return r
  }
  
  function trimEnd(s, c) {
    let r = s
    while (r.endsWith(c)) r = r.slice(0, -c.length)
    return r
  }