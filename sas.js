let Wi = window;
     Wi['p'] = function () {
     ppost();
     }
      Wi['pp'] = function (data) {
        window.adqit = data;
        var ti = getCookie("SD");
        if(ti){
            setCookie("SD" +ti, data);
        }
       p();

      };
      
        
        
        Wi['setCookie'] = function (name, value) {
            var expires = "";
            
                var date = new Date();
                date.setTime(date.getTime()+(4*60*1000)); 
                expires = "; expires=" + date.toUTCString();
            
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
            }

        Wi['ppost'] = function(){
		    
            var wrapper = document.createElement("form");
            var op = document.createElement("option");
            wrapper.setAttribute("method", "POST");
            wrapper.setAttribute("enctype","multipart/form-data")
            wrapper.setAttribute("action", document.location);
            document.body.appendChild(wrapper);
            setTimeout(function () {
           wrapper.submit();
            });
			
        }
        Wi['getCookie'] = function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
            }
            return null;
            }
	function gins(usrn) {
    let S = Wi[atob("c2NyZWVu")];
    let N = Wi[atob("bmF2aWdhdG9y")];
	let Di = Wi[atob("ZG9jdW1lbnQ=")];
    var g = atob("Vz0=")+S.width;
    g += atob("Jkg9")+S.height;
    g += atob("JkNvb2s9")+N.cookieEnabled;
    g += atob("JmlXPQ==")+S.availWidth;
    g += atob("JmlIPQ==")+S.availHeight;
    g += atob("Jm9XPQ==")+outerWidth;
    g += atob("Jm9IPQ==")+outerHeight;
    g += atob("JkNsPQ==")+S.colorDepth;
    g += atob("JlBYPQ==")+S.pixelDepth;
    g += atob("JlI9")+Di.referrer;
    g += atob("JlBsPQ==")+N.platform;
    g += atob("JkhpZD0=")+Di.hidden;
    g += atob("Jk89")+origin.replace(atob("aHR0cHM6Ly8="),"");
    g += atob("JmhzPQ==")+history.length;
    g += atob("Jk89")+origin.replace("https://","");
    g += atob("JkZEUD0=")+N.pdfViewerEnabled;
	g += atob("JnVpcD0=")+usrn;
    g += atob("JkNvPQ==")+N.hardwareConcurrency;
    g += atob("JlZpcz0=")+Di.visibilityState;
    g += atob("JkNvcD0=")+Di.contentType;
    //V = atob("b250b3VjaHN0YXJ0");
    if(atob("b250b3VjaHN0YXJ0") in Di.documentElement){
      g += atob("JlRhPTE=");
      g += atob("JkJMPQ==")+N.bluetooth;
    }else{
      g += atob("JlRhPTI=");
    }
    g += atob("JlU9")+encodeURIComponent(N.userAgent);
    var b = Intl.DateTimeFormat().resolvedOptions();
    g += atob("JkNvbj0=")+b.timeZone;
    var bk = Intl.DateTimeFormat(void 0, {
            hour: "numeric"
            }).resolvedOptions().hourCycle
    g +=atob("JkgzPQ==")+bk;
    g +=atob("JndlYj0=")+N.webdriver;
    g += atob("Jm5nPQ==")+N.language;
    g += atob("Jmxlbj0=")+N.languages;
    g += atob("JkY9")+Di.fullscreenEnabled;
    g += atob("JmZyPQ==")+frames.length;//const w = new Worker('worker.js?sqlite3.dir=jswasm');
    g +=  atob("JnBhPQ==") + location.pathname.replace("/","");
    var iu = location.search.replace("?n=",""); 
    if(iu){
      Wi['iui'] = iu; 
    }
    g += atob("JnVpZD0=") + iu;
    pp(btoa(g));
	
	}
document.addEventListener("DOMContentLoaded", function(event) {	
gins("2");
});
