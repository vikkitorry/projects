(()=>{"use strict";var t={514:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(81),i=e.n(a),s=e(645),r=e.n(s)()(i());r.push([t.id,'.race-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n}\n\n.car {\n  position: absolute;\n  left: 0;\n}\n\n.race-container::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  border-top: 2px dashed #000000;\n  border-bottom: 3px dashed #000000;\n  left: 0;\n  right: 3px;\n  height: 40px;\n  background-color: #b9b5b5e3;\n  z-index: -5;\n  transform: skewX(-15deg);\n}\n\n.flag {\n  margin-right: 30px;\n}\n\n.btn {\n  color: #ffffff;\n  font-size: 80%;\n  width: 70px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #0011ff;\n  border: 2px solid #242fff;\n  border-radius: 5px;\n  cursor: pointer;\n  user-select: none;\n}',""]);const o=r},801:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(81),i=e.n(a),s=e(645),r=e.n(s)()(i());r.push([t.id,"@import url(https://fonts.googleapis.com/css?family=Merienda);"]),r.push([t.id,'.winners-active .garage,\n.garage-active .winners {\n  display: none;\n}\n\n.garage-active .garage,\n.winners-active .winners {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-container {\n  margin-bottom: 10px;\n}\n\nnav, .create-container, .update-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.create-container {\n  margin-bottom: 5px;\n}\n\n.garage-container {\n  width: 100%;\n  align-items: center;\n}\n\n.item-container {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  gap: 5px;\n  margin-top: 10px;\n}\n\n.item-buttons-container, .item-move-buttons-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 5px;\n}\n\n.change-page-container {\n  margin: 0 auto;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 2px solid #242fff;\n  border-bottom: none;\n  padding: 0.6rem;\n  border-radius: 5px;\n}\n\nbutton:disabled {\n  background-color: #2e2e30;\n}\n\nbutton:hover, .btn:hover {\n  opacity: 0.8;\n  border: 2px solid #ffffff;\n}\n\n.menu-buttons-container {\n  margin-top: 5px;\n}\n\n.remove {\n  background-color: #ff0004;\n}\n\n.btn-menu, .update, .create{\n  font-weight: 600;\n  border: 2px solid #242fff;\n  margin-left: 10px;\n  border-radius: 5px;\n}\n\n.create, .update {\n  height: 100%;\n  width: 70px;\n  margin-left: 0;\n}\n\n.race {\n  background-color: #fede00;\n}\n\n.create {\n  background-color: #00b2fe;\n}\n\n.generate-cars {\n  background-color: #13a72e;\n}\n\n.update {\n  background-color: #ef3c40;\n}\n\n.reset {\n  background-color: #eb080c;\n}\n\ninput[type="color"] {\n  border: none;\n  height: 20px;\n  border: 2px solid #242fff;\n  border-radius: 5px;\n}\ninput[type="color"]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\ninput[type="color"]::-webkit-color-swatch {\n  border: none;\n}\n\ninput[type="text"] {\n  background-color: #f9f9f9d1;\n  border: 2px solid #242fff;\n  font-family: monospace;\n}\n\ninput[type="text"]:hover {\n  background-color: #97f966b0;\n  border: 2px solid #ffffffee;\n}\n\ninput[type="text"]:focus {\n  outline: none;\n  border: 2px solid rgb(120, 255, 62);\n}\n\n.tittle {\n  position: fixed;\n  top: 70px;\n  right: 70px;\n}\n\n.tittle span {\n  text-align:center;\n  display: flex;\n  font-family:calibri;\n}\n\n.tittle div, .winners-amount {\n  cursor: pointer;\n  opacity:0.4;\n  color:white;\n  font: 30px Merienda;\n  text-shadow:1px 1px 5px #dddddd,2px 2px 5px #ffffff,3px 3px 5px #ffffff,4px 4px 5px #ffffff,5px 5px 1px #ffffff,6px 6px 1px #adadad,3px 3px 1px #adadad,2px 2px 1px #adadad,9px 9px 5px #adadad,2px 2px 5px #adadad,3px 3px 5px ,3px 3px 5px ;\n  transition:opacity 500ms linear,text-shadow 500ms ease-in-out,color 300ms linear;\n}\n\n.tittle div:hover, .winners-amount:hover {\n  opacity:0.8;\n  text-shadow:1px 1px #454545;\n  color:#242fff;\n  text-shadow:0px 0px 4px #000000;\n  animation:myanim 100ms infinite linear;\n}\n\n.tittle div:active {\n  opacity:0.8;\n  text-shadow:1px 1px 5px #000000,2px 2px 5px #000000,3px 3px 5px #000000,4px 4px 5px #000000,5px 5px 5px #000000,6px 6px 50px #000000,7px 7px 5px #000000,8px 8px 5px #000000,9px 9px 5px #000000,10px 10px 5px #000000,11px 11px 5px #000000,12px 12px 5px #000000,13px 13px 5px #000000,14px 14px 5px #000000,15px 15px 5px #000000,16px 16px 5px #000000,16px 16px 5px #000000,17px 17px 5px #000000,18px 18px 5px #000000,19px 19px 5px #000000; \n}\n\n@keyframes myanim \n{\n  10%{transform:scale(1)rotate(0deg);}\n  20%{transform:scale(1)rotate(-3deg);}\n  80%{transform:scale(1)rotate(3deg);}\n  100%{transform:scale(1)rotate(0deg);}\n}\n\n@media (max-width: 640px) {\n  .tittle {\n    right: 45px;\n  }\n}',""]);const o=r},538:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(81),i=e.n(a),s=e(645),r=e.n(s)()(i());r.push([t.id,".modal {\n  position: absolute;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 30px;\n  width: 300px;\n  height: 300px;\n  z-index: 100;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.756);\n}\n\n.modal-active {\n  display: flex;\n}\n\n.modal-tittle {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.mssg {\n  text-align: center;\n  font-weight: 600;\n  font-size: 20px;\n}",""]);const o=r},812:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(81),i=e.n(a),s=e(645),r=e.n(s)()(i());r.push([t.id,".table {\n  margin: 20px 0;\n  margin-top: 50px;\n}\n\n.winners-amount {\n  position: absolute;\n  top: 70px;\n  font-size: 30px;\n  right: 250px;\n}\n\n.sort {\n  cursor: pointer;\n  user-select: none;\n}\n\n.car-tr {\n  position: relative;\n  height: 40px;\n}\n\ntd .car {\n  position: static;\n  width: 50px !important;\n  height: 50px !important;\n}\n\nth {\n  border-bottom: 1px solid #242fff;\n  padding: 10px;\n  text-align: center;\n}\n\ntd {\n  text-align: center;\n  vertical-align: middle;\n}\n\ntr:nth-child(even) {\n  background: rgba(84, 84, 84, 0.179);\n}\n\ntr:first-child {\n  background: none;\n}\n\n.table_number {\n  width: 20px;\n}\n\n.table_car {\n  width: 60px;\n}\n\n.table_name {\n  min-width: 60px;\n  max-width: 150px;\n}\n\n.table_time-order::after,\n.table_wins-order::after {\n  content: '↓';\n}\n\n.ASC .table_time-order::after,\n.ASC .table_wins-order::after {\n  content: '↑';\n}\n\n.active-sort {\n  background-color: #242fff57;\n}\n",""]);const o=r},767:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(81),i=e.n(a),s=e(645),r=e.n(s)()(i());r.push([t.id,"body {\n  box-sizing: border-box;\n  font-size: 14px;\n  color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  padding: 0 30px;\n  background-color: rgba(34, 34, 34, 0.921);\n}\n\nnav {\n  position: relative;\n  z-index: 5;\n  margin-top: 20px;\n  gap: 1px;\n}\n\n.btn-page {\n  padding: 0.6rem;\n  width: 100px;\n  font-size: 18px;\n  text-align: center;\n  border: 2px solid rgb(34, 34, 34);\n  border-radius: 5px;\n  background-color: rgba(34,34,34,.85);\n  border-bottom: none;\n  opacity: 0.7;\n  cursor: pointer;\n  user-select: none;\n}\n\n.garage-active .to-garage,\n.winners-active .to-winners{\n  border: 2px solid #242fff;\n  border-bottom: none;\n  opacity: 1;\n}\n\nmain {\n  border: 2px solid #242fff;\n  background-color: rgba(34,34,34,.85);\n  border-radius: 5px;\n  padding: 10px 10px 0 10px;\n  overflow-x: hidden\n}\n\n\n",""]);const o=r},24:(t,n,e)=>{e.d(n,{Z:()=>o});var a=e(81),i=e.n(a),s=e(645),r=e.n(s)()(i());r.push([t.id,'html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n:focus {\n    outline: 0;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n}\ninput[type=search] {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n[hidden] {\n    display: none;\n}\nhtml {\n    font-size: 100%;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n}\na:focus {\n    outline: thin dotted;\n}\na:active,\na:hover {\n    outline: 0;\n}\nimg {\n    border: 0;\n    -ms-interpolation-mode: bicubic;\n}\nfigure {\n    margin: 0;\n}\nform {\n    margin: 0;\n}\nfieldset {\n    padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n    border: 0;\n    padding: 0;\n    white-space: normal;\n}\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%;\n    margin: 0;\n    vertical-align: baseline;\n    *vertical-align: middle;\n}\nbutton,\ninput {\n    line-height: normal;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n    cursor: pointer;\n    *overflow: visible;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n}\ninput[type="search"] {\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n}\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\nimg {\n    vertical-align: middle;\n}\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\ntextarea {\n    resize: vertical;\n}\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\n',""]);const o=r},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",a=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),a&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),a&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,a,i,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);a&&r[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,a=0;a<n.length;a++)if(n[a].identifier===t){e=a;break}return e}function a(t,a){for(var s={},r=[],o=0;o<t.length;o++){var c=t[o],l=a.base?c[0]+a.base:c[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var u=e(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var g=i(h,a);a.byIndex=o,n.splice(o,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var s=a(t=t||[],i=i||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var o=e(s[r]);n[o].references--}for(var c=a(t,i),l=0;l<s.length;l++){var d=e(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},569:t=>{var n={};t.exports=function(t,e){var a=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,i&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var s=e.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(a,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(a){var i=n[a];if(void 0!==i)return i.exports;var s=n[a]={id:a,exports:{}};return t[a](s,s.exports,e),s.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),a=e(795),i=e.n(a),s=e(569),r=e.n(s),o=e(565),c=e.n(o),l=e(216),d=e.n(l),p=e(589),u=e.n(p),h=e(24),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var m,f,b,x,v,w,C,y=e(767),B={};function A(t){const n=document.createElement(t.tag);return t.classNames.forEach((t=>n.classList.add(t))),t.textContent&&(n.textContent=t.textContent),t.id&&(n.id=t.id.toString()),n}function E(t,n){return`\n  <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 1024 1024" class="car" version="1.1" data-car = "${n}">\n  <path d="M766.976 508.736c80.576 0 152.448 32.128 199.232 82.176" fill="#AEBCC9" />\n  <path\n    d="M64.704 684.992c10.816 19.2 32.064 32.192 56.576 32.192h784.64c35.84 0 64.832-27.648 64.832-61.76v-17.408h-36.608a15.744 15.744 0 0 1-16.064-15.296V550.912a277.568 277.568 0 0 0-150.144-44.16h1.6l-55.04-0.256c-53.632-115.2-157.504-210.752-294.208-210.752-136.512 0-251.008 89.728-282.176 210.688h-16.832c-35.456 0-56.128 27.392-56.128 61.184"\n    fill="${t}"\n    class="car-courpuse"/>\n  <path\n    d="M64.704 654.464h13.76a39.168 39.168 0 0 0 40.064-38.272v-17.6c0-21.12-17.92-38.208-40.064-38.208h-13.376"\n    fill="#F5BB1D"/>\n  <path\n    d="M160 684.992a101.632 96.832 0 1 0 203.264 0 101.632 96.832 0 1 0-203.264 0Z"\n    fill="#455963"\n    class="wheel"/>\n  <path d="M218.88 684.992a42.752 40.768 0 1 0 85.504 0 42.752 40.768 0 1 0-85.504 0Z" fill="#AEBCC3" />\n  <path\n    d="M652.032 684.992a101.568 96.832 0 1 0 203.136 0 101.568 96.832 0 1 0-203.136 0Z"\n    fill="#455963"\n    class="wheel"/>\n  <path d="M710.912 684.992a42.752 40.768 0 1 0 85.504 0 42.752 40.768 0 1 0-85.504 0Z" fill="#AEBCC3" />\n  <path\n    d="M966.272 591.104v-0.192a257.92 257.92 0 0 0-48.192-40V622.72c0 8.448 7.232 15.296 16.064 15.296h36.608v-42.304l-4.48-4.608z"\n    fill="#F5BB1D"/>\n  <path\n    d="M405.568 335.616c-104.896 6.336-191.296 76.8-216.64 170.816h216.64V335.616zM445.696 506.432h216.64c-41.216-86.848-117.12-159.616-216.64-170.048v170.048z"\n    fill="#631536"/>\n</svg>`}B.styleTagTransform=u(),B.setAttributes=c(),B.insert=r().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=d(),n()(y.Z,B),y.Z&&y.Z.locals&&y.Z.locals,function(t){t.garage="http://localhost:3000/garage",t.engine="http://localhost:3000/engine",t.winners="http://localhost:3000/winners"}(m||(m={})),function(t){t.post="POST",t.put="PUT",t.get="GET",t.delete="DELETE",t.patch="PATCH"}(f||(f={})),function(t){t[t.OK=200]="OK",t[t.CREATED=201]="CREATED",t[t.BAD_REQUEST=400]="BAD_REQUEST",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",t[t.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR"}(b||(b={})),function(t){t.start="started",t.stop="stopped",t.drive="drive"}(x||(x={})),function(t){t[t.page=1]="page",t[t.limit=10]="limit"}(v||(v={})),function(t){t.wins="wins",t.time="time"}(w||(w={})),function(t){t.up="ASC",t.down="DESC"}(C||(C={}));class N{constructor(){this.getSortOrder=(t,n)=>`&_sort=${t}&_order=${n}`}async getWinner(t){return(await fetch(`${m.winners}/${t}`)).json()}async deleteWinner(t){404!==(await fetch(`${m.winners}/${t}`)).status&&await fetch(`${m.winners}/${t}`,{method:f.delete})}async setWinner(t){await fetch(m.winners,{method:f.post,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async updateWinner(t){await fetch(`${m.winners}/${t.id}`,{method:f.put,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async getWinners({page:t,limit:n=v.limit,sort:e,order:a}){return(await fetch(`${m.winners}?_page=${t}&_limit=${n}${this.getSortOrder(e,a)}`)).json()}async getAllWinners(){return(await fetch(`${m.winners}?}`)).json()}}class P{async createCar(t){const n=await fetch(m.garage,{method:f.post,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return await n.json()}async getCar(t){return(await fetch(`${m.garage}/${t}`)).json()}async getCars(){return(await fetch(`${m.garage}`)).json()}async deleteCar(t){await fetch(`${m.garage}/${t}`,{method:f.delete})}async updateCar(t){await fetch(`${m.garage}/${t.id}`,{method:f.put,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}}var S=e(812),k={};k.styleTagTransform=u(),k.setAttributes=c(),k.insert=r().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=d(),n()(S.Z,k),S.Z&&S.Z.locals&&S.Z.locals;class T{constructor(){this.winnersAmount=0,this.main=A({classNames:["winners"],tag:"main"}),this.previousButton=A({classNames:["btn"],tag:"div",textContent:"Previous"}),this.nextButton=A({classNames:["btn"],tag:"div",textContent:"Next"}),this.actualPageElement=A({classNames:["page"],tag:"span",textContent:"1"}),this.actualPage=1,this.createWinnersPage(),this.sortByTimeBtn=this.main.querySelector(".table_time"),this.sortByWinsBtn=this.main.querySelector(".table_wins"),this.handleSortButtons(),this.handlePageButtons(),this.winnersApi=new N,this.garageApi=new P,this.sort=w.time,this.order=C.up}createWinnersPage(){const t=A({classNames:["change-page-container"],tag:"div"});t.append(this.previousButton,this.actualPageElement,this.nextButton),this.main.insertAdjacentHTML("beforeend",'\n  <div class ="tittle">\n  <span>\n    <div>W</div>\n    <div>I</div>\n    <div>N</div>\n    <div>N</div>\n    <div>E</div>\n    <div>R</div>\n    <div>S</div>\n  </span>\n    </div>\n  <span class="winners-amount"></span>\n  <table class="table">\n  <thead>\n    <tr class="table_nav">\n      <th class="table_number">№</th>\n      <th class="table_car">CAR</th>\n      <th class="table_name">NAME</th>\n      <th class="table_wins sort">\n        <div>\n          <span>WINS</span>\n          <span class="table_wins-order"></span>\n        </div>\n      </th>\n      <th class="table_time sort active-sort">\n        <div>\n          <span>BEST TIME (sec)</span>\n          <span class="table_time-order"></span>\n        </div>\n      </th>\n    </tr>\n  </thead>\n<thead class="winners_container"></thead>\n  <tbody class="table_body"></tbody>\n</table>'),this.main.append(t)}removeWinner(t){const n=this.main.querySelector(`[data-winner="${t}"]`);n?.remove()}async addWinners(){const t=await this.winnersApi.getWinners({page:this.actualPage,limit:10,sort:this.sort,order:this.order}),n=this.main.querySelector(".winners_container"),e=this.main.querySelector(".winners-amount");let a=1;n&&e&&(n.innerHTML="",this.winnersAmount=(await this.winnersApi.getAllWinners()).length,e.textContent=`(${this.winnersAmount})`,t.forEach((async t=>{const e=await this.garageApi.getCar(t.id),i=(s=a++,r=t.wins,o=t.time,`\n  <tr classs="car-tr" data-winner="${(c=e).id}">\n    <td>${s}</td>\n    <td>${E(c.color)}</td>\n    <td>${c.name}</td>\n    <td class="winner-wins">${r}</td>\n    <td>${o}</td>\n  </tr>`);var s,r,o,c;n.insertAdjacentHTML("beforeend",i)})))}handleSortButtons(){this.sortByTimeBtn.addEventListener("click",(async()=>{this.sortByWinsBtn.classList.remove("active-sort"),this.sortByTimeBtn.classList.add("active-sort"),this.sortByTimeBtn.classList.toggle("ASC"),this.sort=w.time,this.sortByTimeBtn.className.includes("ASC")?this.order=C.up:this.order=C.down,await this.addWinners()})),this.sortByWinsBtn.addEventListener("click",(async()=>{this.sortByTimeBtn.classList.remove("active-sort"),this.sortByWinsBtn.classList.add("active-sort"),this.sortByWinsBtn.classList.toggle("ASC"),this.sort=w.wins,this.sortByWinsBtn.className.includes("ASC")?this.order=C.up:this.order=C.down,await this.addWinners()}))}handlePageButtons(){this.previousButton.addEventListener("click",(async()=>{this.actualPage>1&&(this.actualPage--,this.actualPageElement.textContent=`${this.actualPage}`,await this.addWinners())})),this.nextButton.addEventListener("click",(async()=>{this.actualPage<this.winnersAmount/10&&(this.actualPage++,this.actualPageElement.textContent=`${this.actualPage}`,await this.addWinners())}))}}class L{constructor(t,n){this.button=A({tag:t.tag,classNames:t.classNames,textContent:t.textContent,id:t.id}),n&&this.button.addEventListener("click",n)}setButtonCondition(t){this.button.disabled=t}getButton(){return this.button}}class M{constructor(t,n){this.parent=t,this.carImg=this.getCarImage(t,n),this.animation=this.carImg.animate([{transform:"translateX(0)"},{transform:"translateX(0px)"}],{fill:"forwards"})}getCarImage(t,n){return t.querySelector(`[data-car="${n}"]`)}stopAnimation(){this.animation.pause()}setAnimation(t,n,e){const a=t/n;this.animation=this.carImg.animate([{transform:"translateX(0)"},{transform:`translateX(${e-90}px)`}],{duration:a,fill:"forwards"})}removeAnimation(){this.carImg.animate([{transform:"translateX(0)"},{transform:"translateX(0px)"}],{fill:"forwards"})}}var R=e(514),I={};I.styleTagTransform=u(),I.setAttributes=c(),I.insert=r().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=d(),n()(R.Z,I),R.Z&&R.Z.locals&&R.Z.locals;class ${constructor(t,n){this.id=t.id||0,this.params=t,this.raceParams={velocity:0,distance:0},this.raceContainer=A({tag:"div",classNames:["race-container"]}),this.carNode=A({tag:"div",classNames:["item-container"],id:t.id}),this.carName=A({tag:"div",classNames:["item-name"],textContent:t.name}),this.selectButton=new L({tag:"button",classNames:["select","btn"],textContent:"Select",id:t.id}).getButton(),this.removeButton=new L({tag:"button",classNames:["remove","btn"],textContent:"Remove",id:t.id}).getButton(),this.startButton=new L({tag:"button",classNames:["item-start"],textContent:"A",id:t.id}).getButton(),this.stopButton=new L({tag:"button",classNames:["item-stop"],textContent:"B",id:t.id}).getButton(),this.createCarContainer(t),this.carNode.addEventListener("click",n),this.animation=new M(this.raceContainer,this.id)}createCarContainer(t){this.stopButton.disabled=!0;const n=A({tag:"div",classNames:["item-buttons-container"]}),e=A({tag:"div",classNames:["item-move-buttons-container"]});n.append(this.selectButton,this.removeButton),e.append(this.startButton,this.stopButton,this.carName),this.raceContainer.insertAdjacentHTML("afterbegin",'\n  <svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="60px"\n  height="50px"\n  viewBox="0 0 24 24"\n  fill="none"\n  class="flag">\n  <path\n    opacity="0.5"\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z"\n    fill="#080240"/>\n  <path\n    d="M13.5582 3.87333L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.5721 14.0445C19.1582 13.898 19.4361 13.2269 19.1253 12.7089L17.5647 10.1078C17.2232 9.53867 17.0524 9.25409 17.0119 8.94455C16.9951 8.81543 16.9951 8.68466 17.0119 8.55553C17.0524 8.24599 17.2232 7.96141 17.5647 7.39225L18.8432 5.26136C19.1778 4.70364 18.6711 4.01976 18.0401 4.17751C16.5513 4.54971 14.9831 4.44328 13.5582 3.87333Z"\n    fill="#FF2F0A"/>\n</svg>'),this.createCarImg(t),this.carNode.append(n,e,this.raceContainer)}createCarImg(t){const n=E(t.color,t.id);this.raceContainer.insertAdjacentHTML("afterbegin",n)}setNewCarColor(t){const n=this.raceContainer.querySelector(".car-courpuse");n&&n.setAttribute("fill",`${t}`)}setNewParams(t,n){this.params.name=t,this.params.color=n}getParams(){return this.params}setRaceParams(t){this.raceParams=t}getRaceParams(){return this.raceParams}}var V=e(801),W={};W.styleTagTransform=u(),W.setAttributes=c(),W.insert=r().bind(null,"head"),W.domAPI=i(),W.insertStyleElement=d(),n()(V.Z,W),V.Z&&V.Z.locals&&V.Z.locals;class _{constructor(){this.main=A({tag:"main",classNames:["garage"]}),this.carsAmount=A({tag:"span",classNames:["car-amount"]}),this.container=A({tag:"div",classNames:["garage-container"]}),this.currentPage=A({tag:"span",classNames:["current-page"],textContent:"1"}),this.previousPageButton=A({tag:"div",classNames:["btn"],textContent:"Previous"}),this.nextPageButton=A({tag:"div",classNames:["btn"],textContent:"Next"}),this.allCars=[],this.carsInPage=[],this.renderGarageMenu()}renderGarageMenu(){const t=A({tag:"div",classNames:["change-page-container"]});t.append(this.previousPageButton,this.currentPage,this.nextPageButton),this.main.innerHTML='\n  <div class="menu-container">\n    <div class="create-container"></div>\n    <div class="update-container"></div>\n    <div class="menu-buttons-container"></div>\n    <div class ="tittle">\n    <span>\n      <div>R</div>\n      <div>A</div>\n      <div>C</div>\n      <div>E</div>\n    </span>\n      </div>\n    </div>\n  <span class="page-name">Garage</span>\n',this.main.append(this.carsAmount,this.container,t)}createFirstPage(){const t=this.allCars.slice(0,7);this.carsInPage=t,t.forEach((t=>this.container.append(t.carNode)))}addNewCar(t,n){const e=new $(t,n);this.allCars.push(e),this.carsInPage.length<7&&(this.carsInPage.push(e),this.container.append(e.carNode))}removeCar(t){this.allCars=this.allCars.filter((n=>n.id!==t)),this.carsInPage.forEach((n=>n.id===t?n.carNode.remove():0)),this.carsInPage=this.carsInPage.filter((n=>n.id!==t))}getCar(t){return this.allCars.find((n=>n.id===t))}setCurrentPage(t,n){const e=t+n;this.currentPage.textContent=`${e}`,this.carsInPage=1===n?this.allCars.slice(7*t,7*e):this.allCars.slice(7*(e-1),7*e),this.container.innerHTML="",this.carsInPage.forEach((t=>this.container.append(t.carNode)))}}var Z=e(538),z={};z.styleTagTransform=u(),z.setAttributes=c(),z.insert=r().bind(null,"head"),z.domAPI=i(),z.insertStyleElement=d(),n()(Z.Z,z),Z.Z&&Z.Z.locals&&Z.Z.locals;class j{constructor(t){this.container=A({classNames:["modal"],tag:"div"}),this.message=A({classNames:["mssg"],tag:"p"}),this.renderPromt(t)}renderPromt(t){const n=A({classNames:["modal-tittle"],tag:"div",textContent:"Winner"});this.container.append(n,this.message),t.prepend(this.container)}showModal(t,n){this.message.textContent=`${t} ${n}(sec)`,this.container.classList.add("modal-active"),setTimeout((()=>this.container.classList.remove("modal-active")),3e3)}}class O{constructor(){this.totalCars=0,this.body=document.querySelector("body"),this.modalWindow=new j(this.body),this.garageView=new _,this.winnersView=new T,this.render(),this.toggleView(),this.handleChangePageButtons()}render(){this.body.classList.add("garage-active"),this.body.insertAdjacentHTML("beforeend",' <nav>\n    <div class="to-garage btn-page">Garage</div>\n    <div class="to-winners btn-page">Winners</div>\n  </nav>'),this.body.append(this.garageView.main),this.body.append(this.winnersView.main)}renderButtons(t,n){document.querySelector(".menu-buttons-container")?.append(t.raceButton,t.resetButton,t.generateButton),document.querySelector(".create-container")?.append(n.inputTextCreate,n.inputColorCreate,t.createButton),document.querySelector(".update-container")?.append(n.inputTextUpdate,n.inputColorUpdate,t.updateButton),this.garageView.createFirstPage()}toggleView(){this.body.addEventListener("click",(t=>{t.target instanceof HTMLElement&&(t.target?.className.includes("to-garage")&&(this.body.classList.remove("winners-active"),this.body.classList.add("garage-active")),t.target?.className.includes("to-winners")&&(this.body.classList.remove("garage-active"),this.body.classList.add("winners-active")))}))}handleChangePageButtons(){this.garageView.nextPageButton.addEventListener("click",(()=>{const t=this.garageView.currentPage.textContent;t&&Math.ceil(this.garageView.allCars.length/7)>+t&&this.garageView.setCurrentPage(+t,1)})),this.garageView.previousPageButton.addEventListener("click",(()=>{const t=this.garageView.currentPage.textContent;t&&+t>1&&this.garageView.setCurrentPage(+t,-1)}))}addCar(t,n){this.totalCars=++this.totalCars,this.setCarAmount(),this.garageView.addNewCar(t,n)}setCarAmount(t){t?this.totalCars=t:t=this.totalCars,this.garageView.carsAmount.textContent=`(${t})`}addDriveEffect(t,n){const e=this.garageView.main.clientWidth||this.winnersView.main.clientWidth;t.animation.setAnimation(n.distance,n.velocity,e)}removeDriveEffect(t){t.animation.removeAnimation()}removeCar(t){this.totalCars=--this.totalCars,this.setCarAmount(),this.garageView.removeCar(t),this.winnersView.removeWinner(t)}changeCarView(t){t.setNewCarColor(t.getParams().color),t.carName.textContent=t.getParams().name}}class D{constructor(t,n){this.input=this.createInput(t,n)}createInput(t,n){const e=document.createElement("input");return e.type=n,t.forEach((t=>{e.classList.add(t)})),e}getInputElement(){return this.input}}class U{async startStopEngine(t,n){return(await fetch(`${m.engine}?id=${t}&status=${n}`,{method:f.patch})).json()}async drive(t){const n=await fetch(`${m.engine}?id=${t}&status=${x.drive}`,{method:"PATCH"}).catch();return n.status!==b.OK?{success:!1}:{...await n.json()}}}const X=["Acura","Alfa Romeo","Alpine","Apollo","Apple","Aston Martin","Audi","Automobili Pininfarina","Bentley","BMW","Bollinger","Brilliance","Bugatti","Buick","BYD","Cadillac","Chana","Chery","Chevrolet","Chrysler","Citroen","Continental","CUPRA","Dacia","Daewoo","Daihatsu","Datsun","Detroit Electric","Dodge","DS Automobiles","FAW","Ferrari","Fiat","Fisker","Ford","Foxtron","Geely","Genesis","GMC","Great Wall","Haval","Honda","Hummer","Hyundai","Ineos","Infiniti","Iran Khodro","JAC","Jaguar","Jeep","JETOUR","KIA","Koenigsegg","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lifan","Lincoln","Lordstown","Lotus","Lucid","LvChi","Lynk & Co","Maserati","Maybach","Mazda","MCLaren","Mercedes-Benz","MG","MINI","Mitsubishi","Nikola","NIO","Nissan","Opel","Pagani","Peugeot","Polestar","Porsche","Qoros","Range Rover","Ravon","Renault","Rimac","Rivian","Rolls-Royce","Saab","Saipa","SEAT","Skoda","smart","SsangYong","SSC North America","Stellantis","Subaru","Suzuki","Tata","Tesla","Torsus","Toyota","VinFast","Volkswagen","Volvo","Xpeng","Zotye"],q=["Durango","Ram","Challenger","Charger","Grand Caravan","X7","X5","X3","X6 M","X6","X1","X4","C3 Aircross","C5 Aircross","Duster","CR-V","Corolla","DS3 Crossback","C1","C3","Berlingo Multispace","DS4 Crossback","UX 250h","NX 300h","LC 500","RX 350/200t","Rapid","Largus","IS 200t","LS 500h","RX","ES 200/250/350","Hatchback","CX-5","Sedan","CX-30","CX-9","CX-3","MX-5 Roadster","Phantom","Camry","Polo","Cullinan","Ghost","Dawn","Duster","Arkana","Sandero","Logan","Trafic Fourgon","Logan MCV","Captur","Kadjar","RAV4","Rio","Creta","Solaris"];function F(t){return t[Math.floor(Math.random()*t.length)]}new class{constructor(){this.view=new O,this.garage=new P,this.engine=new U,this.winners=new N,this.buttons=this.createMainButtons(),this.inputs=this.createInputElements(),this.createGarage(),this.selectedCar=null,this.isRace=!1}createMainButtons(){return{raceButton:new L({tag:"button",classNames:["race","btn-menu"],textContent:"Race"},(()=>this.handleRaceButtonClick())).getButton(),resetButton:new L({tag:"button",classNames:["reset","btn-menu"],textContent:"Reset"},(()=>this.handleResetButtonClick())).getButton(),generateButton:new L({tag:"button",classNames:["generate-cars","btn-menu"],textContent:"Generate"},(()=>this.handleGenerateButtonClick())).getButton(),createButton:new L({tag:"button",classNames:["create"],textContent:"Create"},(()=>this.handleCreateButtonClick())).getButton(),updateButton:new L({tag:"button",classNames:["update"],textContent:"Update"},(()=>this.handleUpdateButtonClick())).getButton()}}createInputElements(){return{inputColorCreate:new D(["rgb","create-color"],"color").getInputElement(),inputColorUpdate:new D(["rgb","update-color"],"color").getInputElement(),inputTextUpdate:new D(["input"],"text").getInputElement(),inputTextCreate:new D(["input"],"text").getInputElement()}}async createGarage(){try{const t=await this.garage.getCars(),n=Object.values(t);n.forEach((t=>{this.view.addCar(t,(t=>this.handleCarButtons(t)))})),this.view.renderButtons(this.buttons,this.inputs),this.view.winnersView.addWinners(),this.view.setCarAmount(n.length),this.buttons.resetButton.disabled=!0}catch{throw new Error}}async createCar(t,n){const e=await this.garage.createCar({name:t,color:n});this.view.addCar(e,(t=>this.handleCarButtons(t)))}async setNewWinner(t,n){let e=(await this.winners.getWinner(t)).wins;e?(e+=1,await this.winners.updateWinner({id:t,wins:e,time:n})):(e=1,await this.winners.setWinner({id:t,wins:e,time:n})),this.view.winnersView.addWinners()}async handleRaceButtonClick(){try{const t=this.view.garageView.carsInPage,n=Object.values(t);Object.values(this.buttons).concat(Object.values(this.inputs)).forEach((t=>{t.className.includes("reset")?t.disabled=!1:t.disabled=!0}));let e=null;const a=await Promise.all(n.map((async t=>{this.isRace=!0,t.removeButton.disabled=!0,t.startButton.disabled=!0,t.stopButton.disabled=!0;const n=await this.engine.startStopEngine(t.id,x.start);return t.setRaceParams(n),Math.round(n.distance/n.velocity)/1e3})));n.forEach((t=>{this.view.addDriveEffect(t,t.getRaceParams())})),await Promise.all(n.map((async(t,n)=>{if((await this.engine.drive(t.id)).success){if("finished"===(await t.animation.animation.finished).playState){const i=t.getParams();!e&&i.id&&(e={id:i.id,name:i.name,time:a[n]},this.view.modalWindow.showModal(e.name,e.time),this.handleResetButtonClick(),this.setNewWinner(i.id,e.time))}}else t.animation.stopAnimation();return 1})))}catch{throw new Error}}handleResetButtonClick(){const t=this.view.garageView.carsInPage,n=Object.values(t);Promise.all(n.map((async t=>{t.animation.stopAnimation(),await this.engine.startStopEngine(t.id,x.stop),t.removeButton.disabled=!1,t.startButton.disabled=!1,this.view.removeDriveEffect(t)}))),Object.values(this.buttons).concat(Object.values(this.inputs)).forEach((t=>t.disabled=!1)),this.isRace=!1,this.buttons.resetButton.disabled=!0}handleGenerateButtonClick(){new Array(100).fill(1).map((()=>this.createCar(`${F(X)} ${F(q)}`,"#"+Math.random().toString(16).slice(3,9))))}handleCreateButtonClick(){const t=this.inputs.inputTextCreate.value;if(t){const n=this.inputs.inputColorCreate.value;this.createCar(t,n)}}async handleUpdateButtonClick(){this.selectedCar&&(this.selectedCar.setNewParams(this.inputs.inputTextUpdate.value,this.inputs.inputColorUpdate.value),await this.garage.updateCar(this.selectedCar.getParams()),this.view.changeCarView(this.selectedCar),this.inputs.inputTextUpdate.value="",this.selectedCar=null)}async handleCarButtons(t){if(t?.target instanceof HTMLButtonElement){const n=t.target.className,e=this.view.garageView.getCar(+t.target.id),a=+t.target.id;if(e)if(n.includes("remove"))this.view.removeCar(a),await this.garage.deleteCar(a),await this.winners.deleteWinner(a);else if(n.includes("select"))this.selectedCar=e,this.inputs.inputTextUpdate.value=e.carName.textContent||"",this.inputs.inputColorUpdate.value=e.getParams().color;else if(n.includes("start")){e.startButton.disabled=!0,e.stopButton.disabled=!1;const t=await this.engine.startStopEngine(a,x.start);e.animation.setAnimation(t.distance,t.velocity,e.carNode.clientWidth),(await this.engine.drive(a)).success?"finished"===(await e.animation.animation.finished).playState&&(e.animation.removeAnimation(),e.startButton.disabled=!1,e.stopButton.disabled=!0):(e.animation.stopAnimation(),setTimeout((()=>{e.animation.removeAnimation(),e.startButton.disabled=!1,e.stopButton.disabled=!0}),1e3))}else n.includes("stop")&&(e.animation.stopAnimation(),e.startButton.disabled=!1,this.isRace||(await this.engine.startStopEngine(a,x.stop),e.animation.removeAnimation(),e.stopButton.disabled=!0))}}}})()})();