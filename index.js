var h=["load","loadend","timeout","error","readystatechange","abort"],E="__origin_xhr";function m(e,t){var n={};for(var c in e)n[c]=e[c];return n.target=n.currentTarget=t,n}function x(e,t){t=t||window;var n=t.XMLHttpRequest;t.XMLHttpRequest=function(){for(var a=new n,i=0;i<h.length;++i){var f="on"+h[i];a[f]===void 0&&(a[f]=null)}for(var l in a){var y="";try{y=typeof a[l]}catch{}y==="function"?this[l]=p(l):l!==E&&Object.defineProperty(this,l,{get:c(l),set:g(l),enumerable:!0})}var r=this;a.getProxy=function(){return r},this[E]=a},Object.assign(t.XMLHttpRequest,{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4});function c(a){return function(){var i=this.hasOwnProperty(a+"_")?this[a+"_"]:this[E][a],f=(e[a]||{}).getter;return f&&f(i,this)||i}}function g(a){return function(i){var f=this[E],l=this,y=e[a];if(a.substring(0,2)==="on")l[a+"_"]=i,f[a]=function(o){o=m(o,l);var s=e[a]&&e[a].call(l,f,o);s||i.call(l,o)};else{var r=(y||{}).setter;i=r&&r(i,l)||i,this[a+"_"]=i;try{f[a]=i}catch{}}}}function p(a){return function(){var i=[].slice.call(arguments);if(e[a]){var f=e[a].call(this,i,this[E]);if(f)return f}return this[E][a].apply(this[E],i)}}function T(){t.XMLHttpRequest=n,n=void 0}return{originXhr:n,unHook:T}}var N=h[0],P=h[1],j=h[2],D=h[3],_=h[4],I=h[5],H="prototype";function L(e,t){return t=t||window,F(e,t)}function M(e){return e.replace(/^\s+|\s+$/g,"")}function X(e){return e.watcher||(e.watcher=document.createElement("a"))}function R(e,t){var n=e.getProxy(),c="on"+t+"_",g=m({type:t},n);n[c]&&n[c](g);var p;typeof Event=="function"?p=new Event(t,{bubbles:!1}):(p=document.createEvent("Event"),p.initEvent(t,!1,!0)),X(e).dispatchEvent(p)}function C(e){this.xhr=e,this.xhrProxy=e.getProxy()}C[H]=Object.create({resolve:function(t){var n=this.xhrProxy,c=this.xhr;n.readyState=4,c.resHeader=t.headers,n.response=n.responseText=t.response,n.statusText=t.statusText,n.status=t.status,R(c,_),R(c,N),R(c,P)},reject:function(t){this.xhrProxy.status=0,R(this.xhr,t.type),R(this.xhr,P)}});function S(e){function t(n){C.call(this,n)}return t[H]=Object.create(C[H]),t[H].next=e,t}var G=S(function(e){var t=this.xhr;e=e||t.config,t.withCredentials=e.withCredentials,t.open(e.method,e.url,e.async!==!1,e.user,e.password);for(var n in e.headers)t.setRequestHeader(n,e.headers[n]);t.send(e.body)}),K=S(function(e){this.resolve(e)}),q=S(function(e){this.reject(e)});function F(e,t){var n=e.onRequest,c=e.onResponse,g=e.onError;function p(r,o){var s=new K(r),d=o.responseType,u=!d||d==="text"||d==="json"?o.responseText:o.response,v={response:u,status:o.status,statusText:o.statusText,config:r.config,headers:r.resHeader||r.getAllResponseHeaders().split(`\r
`).reduce(function(O,w){if(w==="")return O;var k=w.split(":");return O[k.shift()]=M(k.join(":")),O},{})};if(!c)return s.resolve(v);c(v,s)}function T(r,o,s,d){var u=new q(r);s={config:r.config,error:s,type:d},g?g(s,u):u.next(s)}function a(){return!0}function i(r){return function(o,s){return T(o,this,s,r),!0}}function f(r,o){return r.readyState===4&&r.status!==0?p(r,o):r.readyState!==4&&R(r,_),!0}var{originXhr:l,unHook:y}=x({onload:a,onloadend:a,onerror:i(D),ontimeout:i(j),onabort:i(I),onreadystatechange:function(r){return f(r,this)},open:function(o,s){var d=this,u=s.config={headers:{}};u.method=o[0],u.url=o[1],u.async=o[2],u.user=o[3],u.password=o[4],u.xhr=s;var v="on"+_;if(s[v]||(s[v]=function(){return f(s,d)}),n)return!0},send:function(r,o){var s=o.config;if(s.withCredentials=o.withCredentials,s.body=r[0],n){var d=function(){n(s,new G(o))};return s.async===!1?d():setTimeout(d),!0}},setRequestHeader:function(r,o){if(o.config.headers[r[0].toLowerCase()]=r[1],n)return!0},addEventListener:function(r,o){var s=this;if(h.indexOf(r[0])!==-1){var d=r[1];return X(o).addEventListener(r[0],function(u){var v=m(u,s);v.type=r[0],v.isTrusted=!0,d.call(s,v)}),!0}},getAllResponseHeaders:function(r,o){var s=o.resHeader;if(s){var d="";for(var u in s)d+=u+": "+s[u]+`\r
`;return d}},getResponseHeader:function(r,o){var s=o.resHeader;if(s)return s[(r[0]||"").toLowerCase()]}},t);return{originXhr:l,unProxy:y}}var U=[{matcher:"/lol-ranked/v1/notifications",preSend:e=>{},postSend:e=>{e.response='[{"tier":"MASTER","displayType":"VIGNETTE","msgId":"12322224","notifyReason":"LEAGUE_PROMOTED","queueType":"RANKED_SOLO_5x5"}]'}}],b=[...U];var A=()=>{L({onRequest:(e,t)=>{b.filter(n=>typeof n.matcher=="string"&&n.matcher===e.url).forEach(n=>{n.preSend(e)}),t.next(e)},onResponse:(e,t)=>{b.filter(n=>typeof n.matcher=="string"&&n.matcher===e.config.url).forEach(n=>{n.postSend(e)}),t.next(e)}})};function ne(e){e.rcp.postInit("rcp-fe-lol-l10n",t=>{A()})}export{ne as init};
