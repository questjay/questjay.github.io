importScripts('wasm_exec.js')
//importScripts('https://cdn.jsdelivr.net/gh/golang/go@go1.18.4/misc/wasm/wasm_exec.js')
importScripts('zz.js')

addEventListener('install', (event) => {
  event.waitUntil(skipWaiting())
})

addEventListener('activate', event => {
  event.waitUntil(clients.claim())
})

registerWasmHTTPListener('apii', { base: 'api' })