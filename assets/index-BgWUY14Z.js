(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function f(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerPolicy&&(n.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?n.credentials="include":u.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(u){if(u.ep)return;u.ep=!0;const n=f(u);fetch(u.href,n)}})();var q={exports:{}},X=q.exports,F;function U(){return F||(F=1,function(_,h){(function(f,c){_.exports=c()})(typeof window<"u"?window:X,function(){if(typeof window>"u")return null;var f=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")(),c=f.requestAnimationFrame||f.mozRequestAnimationFrame||f.webkitRequestAnimationFrame||function(d){return f.setTimeout(d,20)},u=f.cancelAnimationFrame||f.mozCancelAnimationFrame||f.webkitCancelAnimationFrame||function(d){f.clearTimeout(d)};function n(d,m){var o=Object.prototype.toString.call(d),A=o==="[object Array]"||o==="[object NodeList]"||o==="[object HTMLCollection]"||o==="[object Object]"||typeof jQuery<"u"&&d instanceof jQuery||typeof Elements<"u"&&d instanceof Elements,W=0,i=d.length;if(A)for(;W<i;W++)m(d[W]);else m(d)}function p(d){if(!d.getBoundingClientRect)return{width:d.offsetWidth,height:d.offsetHeight};var m=d.getBoundingClientRect();return{width:Math.round(m.width),height:Math.round(m.height)}}function b(d,m){Object.keys(m).forEach(function(o){d.style[o]=m[o]})}var O=function(d,m){var o=0;function A(){var i=[];this.add=function(L){i.push(L)};var x,I;this.call=function(L){for(x=0,I=i.length;x<I;x++)i[x].call(this,L)},this.remove=function(L){var C=[];for(x=0,I=i.length;x<I;x++)i[x]!==L&&C.push(i[x]);i=C},this.length=function(){return i.length}}function W(i,x){if(i){if(i.resizedAttached){i.resizedAttached.add(x);return}i.resizedAttached=new A,i.resizedAttached.add(x),i.resizeSensor=document.createElement("div"),i.resizeSensor.dir="ltr",i.resizeSensor.className="resize-sensor";var I={pointerEvents:"none",position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",overflow:"hidden",zIndex:"-1",visibility:"hidden",maxWidth:"100%"},L={position:"absolute",left:"0px",top:"0px",transition:"0s"};b(i.resizeSensor,I);var C=document.createElement("div");C.className="resize-sensor-expand",b(C,I);var H=document.createElement("div");b(H,L),C.appendChild(H);var z=document.createElement("div");z.className="resize-sensor-shrink",b(z,I);var M=document.createElement("div");b(M,L),b(M,{width:"200%",height:"200%"}),z.appendChild(M),i.resizeSensor.appendChild(C),i.resizeSensor.appendChild(z),i.appendChild(i.resizeSensor);var e=window.getComputedStyle(i),t=e?e.getPropertyValue("position"):null;t!=="absolute"&&t!=="relative"&&t!=="fixed"&&t!=="sticky"&&(i.style.position="relative");var r=!1,s=0,a=p(i),g=0,E=0,l=!0;o=0;var S=function(){var w=i.offsetWidth,R=i.offsetHeight;H.style.width=w+10+"px",H.style.height=R+10+"px",C.scrollLeft=w+10,C.scrollTop=R+10,z.scrollLeft=w+10,z.scrollTop=R+10},y=function(){if(l){var w=i.offsetWidth===0&&i.offsetHeight===0;if(w){o||(o=c(function(){o=0,y()}));return}else l=!1}S()};i.resizeSensor.resetSensor=y;var Q=function(){s=0,r&&(g=a.width,E=a.height,i.resizedAttached&&i.resizedAttached.call(a))},T=function(){a=p(i),r=a.width!==g||a.height!==E,r&&!s&&(s=c(Q)),y()},v=function(w,R,k){w.attachEvent?w.attachEvent("on"+R,k):w.addEventListener(R,k)};v(C,"scroll",T),v(z,"scroll",T),o=c(function(){o=0,y()})}}n(d,function(i){W(i,m)}),this.detach=function(i){o||(u(o),o=0),O.detach(d,i)},this.reset=function(){d.resizeSensor.resetSensor()}};if(O.reset=function(d){n(d,function(m){m.resizeSensor.resetSensor()})},O.detach=function(d,m){n(d,function(o){o&&(o.resizedAttached&&typeof m=="function"&&(o.resizedAttached.remove(m),o.resizedAttached.length())||o.resizeSensor&&(o.contains(o.resizeSensor)&&o.removeChild(o.resizeSensor),delete o.resizeSensor,delete o.resizedAttached))})},typeof MutationObserver<"u"){var G=new MutationObserver(function(d){for(var m in d)if(d.hasOwnProperty(m))for(var o=d[m].addedNodes,A=0;A<o.length;A++)o[A].resizeSensor&&O.reset(o[A])});document.addEventListener("DOMContentLoaded",function(d){G.observe(document.body,{childList:!0,subtree:!0})})}return O})}(q)),q.exports}var B={exports:{}},J=B.exports,P;function Y(){return P||(P=1,function(_,h){(function(f,c){_.exports=c(U())})(typeof window<"u"?window:J,function(f){var c=function(){var n,p={},b=[];function O(e){e||(e=document.documentElement);var t=window.getComputedStyle(e,null).fontSize;return parseFloat(t)||16}function G(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}function d(e,t){var r=t.split(/\d/),s=r[r.length-1];switch(t=parseFloat(t),s){case"px":return t;case"em":return t*O(e);case"rem":return t*O();case"vw":return t*document.documentElement.clientWidth/100;case"vh":return t*document.documentElement.clientHeight/100;case"vmin":case"vmax":var a=document.documentElement.clientWidth/100,g=document.documentElement.clientHeight/100,E=Math[s==="vmin"?"min":"max"];return t*E(a,g);default:return t}}function m(e,t){this.element=e;var r,s,a,g,E,l,S,y,Q=["min-width","min-height","max-width","max-height"];this.call=function(){a=G(this.element),l={};for(r in p[t])p[t].hasOwnProperty(r)&&(s=p[t][r],g=d(this.element,s.value),E=s.property==="width"?a.width:a.height,y=s.mode+"-"+s.property,S="",s.mode==="min"&&E>=g&&(S+=s.value),s.mode==="max"&&E<=g&&(S+=s.value),l[y]||(l[y]=""),S&&(" "+l[y]+" ").indexOf(" "+S+" ")===-1&&(l[y]+=" "+S));for(var T in Q)Q.hasOwnProperty(T)&&(l[Q[T]]?this.element.setAttribute(Q[T],l[Q[T]].substr(1)):this.element.removeAttribute(Q[T]))}}function o(e,t){e.elementQueriesSetupInformation||(e.elementQueriesSetupInformation=new m(e,t)),e.elementQueriesSensor||(e.elementQueriesSensor=new f(e,function(){e.elementQueriesSetupInformation.call()}))}function A(e,t,r,s){if(typeof p[e]>"u"){p[e]=[];var a=b.length;n.innerHTML+=`
`+e+" {animation: 0.1s element-queries;}",n.innerHTML+=`
`+e+" > .resize-sensor {min-width: "+a+"px;}",b.push(e)}p[e].push({mode:t,property:r,value:s})}function W(e){var t;if(document.querySelectorAll&&(t=e?e.querySelectorAll.bind(e):document.querySelectorAll.bind(document)),!t&&typeof $$<"u"&&(t=$$),!t&&typeof jQuery<"u"&&(t=jQuery),!t)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";return t}function i(e){var t=W(e);for(var r in p)if(p.hasOwnProperty(r))for(var s=t(r,e),a=0,g=s.length;a<g;a++)o(s[a],r)}function x(e){var t=[],r=[],s=[],a=0,g=-1,E=[];for(var l in e.children)if(e.children.hasOwnProperty(l)&&e.children[l].tagName&&e.children[l].tagName.toLowerCase()==="img"){t.push(e.children[l]);var S=e.children[l].getAttribute("min-width")||e.children[l].getAttribute("data-min-width"),y=e.children[l].getAttribute("data-src")||e.children[l].getAttribute("url");s.push(y);var Q={minWidth:S};r.push(Q),S?e.children[l].style.display="none":(a=t.length-1,e.children[l].style.display="block")}g=a;function T(){var v=!1,w;for(w in t)t.hasOwnProperty(w)&&r[w].minWidth&&e.offsetWidth>r[w].minWidth&&(v=w);if(v||(v=a),g!==v)if(E[v])t[g].style.display="none",t[v].style.display="block",g=v;else{var R=new Image;R.onload=function(){t[v].src=s[v],t[g].style.display="none",t[v].style.display="block",E[v]=!0,g=v},R.src=s[v]}else t[v].src=s[v]}e.resizeSensorInstance=new f(e,T),T()}function I(){for(var e=W(),t=e("[data-responsive-image],[responsive-image]"),r=0,s=t.length;r<s;r++)x(t[r])}var L=/,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi,C=/\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;function H(e){var t,r,s,a;for(e=e.replace(/'/g,'"');(t=L.exec(e))!==null;)for(r=t[1]+t[3],s=t[2];(a=C.exec(s))!==null;)A(r,a[1],a[2],a[3])}function z(e){var t="";if(e)if(typeof e=="string")e=e.toLowerCase(),(e.indexOf("min-width")!==-1||e.indexOf("max-width")!==-1)&&H(e);else for(var r=0,s=e.length;r<s;r++)e[r].type===1?(t=e[r].selectorText||e[r].cssText,(t.indexOf("min-height")!==-1||t.indexOf("max-height")!==-1||t.indexOf("min-width")!==-1||t.indexOf("max-width")!==-1)&&H(t)):e[r].type===4?z(e[r].cssRules||e[r].rules):e[r].type===3&&e[r].styleSheet.hasOwnProperty("cssRules")&&z(e[r].styleSheet.cssRules)}var M=!1;this.init=function(){var e="animationstart";typeof document.documentElement.style.webkitAnimationName<"u"?e="webkitAnimationStart":typeof document.documentElement.style.MozAnimationName<"u"?e="mozanimationstart":typeof document.documentElement.style.OAnimationName<"u"&&(e="oanimationstart"),document.body.addEventListener(e,function(s){var a=s.target,g=a&&window.getComputedStyle(a,null),E=g&&g.getPropertyValue("animation-name"),l=E&&E.indexOf("element-queries")!==-1;if(l){a.elementQueriesSensor=new f(a,function(){a.elementQueriesSetupInformation&&a.elementQueriesSetupInformation.call()});var S=window.getComputedStyle(a.resizeSensor,null),y=S.getPropertyValue("min-width");y=parseInt(y.replace("px","")),o(s.target,b[y])}}),M||(n=document.createElement("style"),n.type="text/css",n.innerHTML="[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}",n.innerHTML+=`
@keyframes element-queries { 0% { visibility: inherit; } }`,document.getElementsByTagName("head")[0].appendChild(n),M=!0);for(var t=0,r=document.styleSheets.length;t<r;t++)try{document.styleSheets[t].href&&document.styleSheets[t].href.indexOf("file://")===0&&console.warn("CssElementQueries: unable to parse local css files, "+document.styleSheets[t].href),z(document.styleSheets[t].cssRules||document.styleSheets[t].rules||document.styleSheets[t].cssText)}catch{}I()},this.findElementQueriesElements=function(e){i(e)},this.update=function(){this.init()}};c.update=function(){c.instance.update()},c.detach=function(n){n.elementQueriesSetupInformation?(n.elementQueriesSensor.detach(),delete n.elementQueriesSetupInformation,delete n.elementQueriesSensor):n.resizeSensorInstance&&(n.resizeSensorInstance.detach(),delete n.resizeSensorInstance)},c.init=function(){c.instance||(c.instance=new c),c.instance.init()};var u=function(n){if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var p=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(n(),clearInterval(p))},10);else window.onload=n};return c.findElementQueriesElements=function(n){c.instance.findElementQueriesElements(n)},c.listen=function(){u(c.init)},c})}(B)),B.exports}var N,$;function Z(){return $||($=1,N={ResizeSensor:U(),ElementQueries:Y()}),N}var ee=Z();const{Application:te,Assets:j,GL_INTERNAL_FORMAT:ne,loadKTX:ie,Sprite:D,Text:re,Texture:se,WebGLRenderer:V}=PIXI;class oe{BG_COLOR=1973790;WIDTH=800;HEIGHT=600;app;background;sprite;text;loadingOverlay;async init(){this.app=new te,await this.app.init({background:this.BG_COLOR,width:this.WIDTH,height:this.HEIGHT,hello:!0}),document.getElementById("game-container").appendChild(this.app.canvas),this.setupResizing(),this.loadingOverlay=document.getElementById("loading-overlay"),this.app.renderer instanceof V&&this.logSupportedWebglExtensions(this.app.renderer.gl)}setupResizing(){const h=c=>{const u=Math.min(c.width,this.WIDTH),n=Math.min(c.height,this.HEIGHT),p=Math.min(u/this.WIDTH,n/this.HEIGHT),b=Math.round(this.WIDTH*p),O=Math.round(this.HEIGHT*p);this.app.canvas.style.width=`${b}px`,this.app.canvas.style.height=`${O}px`},f=document.getElementById("game-container");new ee.ResizeSensor(f,c=>h(c)),h(f.getBoundingClientRect())}logSupportedWebglExtensions(h){const f=["WEBGL_compressed_texture_astc","WEBGL_compressed_texture_etc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_pvrtc","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb"];console.group("Supported Compressed Texture Extensions:"),f.forEach(u=>{const n=h.getExtension(u);console.log(`${u.replace("WEBGL_compressed_texture_","")}: ${n?"Supported ✅":"Not supported ❌"}`)}),console.groupEnd(),console.groupCollapsed("Supported Compressed Texture Formats:"),h.getParameter(h.COMPRESSED_TEXTURE_FORMATS).forEach(u=>{const n=(ne[u]||"Unknown").replace("COMPRESSED_","");console.log(`${u} (0x${u.toString(16).toUpperCase()}) ${n}`)}),console.groupEnd()}async start(){j.loader.parsers.push(ie);try{const h=await j.load("textures/robot.astc_4x4.ktx");this.loadingOverlay?.remove(),this.addBackground(),this.addAstcTexture(h),this.addHintText(),window.addEventListener("keydown",f=>{f.key==="w"&&this.loseWebglContext()}),this.app.stage.interactive=!0,this.app.stage.on("pointerdown",()=>this.loseWebglContext())}catch(h){console.error("Failed to load texture:",h),this.loadingOverlay&&(this.loadingOverlay.innerHTML='<div style="color: white; font-family: monospace;">Error loading texture</div>')}}addBackground(){this.background=new D(se.WHITE),this.background.width=this.app.screen.width,this.background.height=this.app.screen.height,this.background.tint=this.BG_COLOR,this.app.stage.addChild(this.background)}async addAstcTexture(h){this.sprite=new D(h),this.sprite.anchor.set(.5),this.sprite.x=this.app.screen.width/2,this.sprite.y=this.app.screen.height/2-20,this.sprite.scale.set(.5),this.app.stage.addChild(this.sprite)}addHintText(){this.text=new re({text:"Click on stage or press W to lose WebGL context",style:{fontFamily:"monospace",fontSize:24,fill:16777215}}),this.text.anchor.set(.5),this.text.x=this.app.screen.width/2,this.text.y=this.app.screen.height-50,this.app.stage.addChild(this.text)}loseWebglContext(){const h=this.app.renderer;if(h&&h instanceof V){h.context.forceContextLoss(),console.log("forceContextLoss"),this.text&&(this.text.text="WebGL context lost");return}}}const K=new oe;async function ae(){await K.init(),await K.start()}ae().catch(console.error);
