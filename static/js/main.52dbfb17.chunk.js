(this["webpackJsonpregistry-app"]=this["webpackJsonpregistry-app"]||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=n(7),u=n(1);var i=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Home "),r.a.createElement(o.b,{to:"/registry"}," Click here to go to Registry "))},m=n(12),s=n(11);var p=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),i=u[0],p=u[1],E=Object(a.useState)(!1),f=Object(s.a)(E,2),b=f[0],v=f[1];return Object(a.useEffect)((function(){i.length>10?v(!0):v(!1)}),[i]),console.log(n),r.a.createElement("div",null,r.a.createElement("h1",null," Registry Page "),r.a.createElement(o.b,{to:"/"}," Go back to Home page "),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!b){var t=Object(m.a)(n);t.push(i),c(t),p("")}}},r.a.createElement("label",null," Text input:",r.a.createElement("input",{type:"text",value:i,onChange:function(e){return p(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Submit"})),b?r.a.createElement("span",{style:{color:"red"}}," Error Occured "):null,n.map((function(e,t){return r.a.createElement("li",{key:t}," ",e," ",r.a.createElement("button",{onClick:function(){return function(e){var t=Object(m.a)(n);t.splice(e,1),c(t)}(t)}}," Remove ")," ",r.a.createElement("button",{onClick:function(){return function(e){if(!b){var t=Object(m.a)(n);t[e]=i,c(t)}}(t)}}," Update ")," ")})))};n(30);var E=function(){return r.a.createElement("div",{className:"App"},"Registry App",r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(i,null)),r.a.createElement(u.a,{path:"/registry"},r.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.52dbfb17.chunk.js.map