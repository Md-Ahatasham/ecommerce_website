(function(){var tagAssistantBaseUrl = "https:\/\/tagassistant.google.com\/"; var queueName = "google.tagmanager.debugui2.queue"; var flags = {"features":{"tagAssistantBugFixEnabled":true}};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l=this||self;function aa(a){if(a&&a!=l)return ba(a.document);null===n&&(n=ba(l.document));return n}var ca=/^[\w+/_-]+[=]{0,2}$/,n=null;function ba(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ca.test(a)?a:""}function p(a){"object"!=typeof a||a&&Array.isArray(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function da(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.S=function(f,d,e){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[d].apply(f,g)}}function r(a){return a};var t;function ea(){if(void 0===t){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch(c){l.console&&l.console.error(c.message)}t=a}else t=a}return t};function u(a,b){this.u=a===fa&&b||"";this.v=ha}u.prototype.h=!0;u.prototype.g=function(){return this.u};var ha={},fa={};var v=class{constructor(a,b){this.i=b===ia?a:""}};v.prototype.h=!0;v.prototype.g=function(){return this.i.toString()};v.prototype.l=!0;v.prototype.j=function(){return 1};v.prototype.toString=function(){return this.i+""};function ja(a){if(a instanceof v&&a.constructor===v)return a.i;p(a);return"type_error:TrustedResourceUrl"}var ia={};var ka=/&/g,la=/</g,ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,qa=/[\x00&<>"']/;var x=class{constructor(a,b){this.i=b===w?a:""}};x.prototype.h=!0;x.prototype.g=function(){return this.i.toString()};x.prototype.l=!0;x.prototype.j=function(){return 1};x.prototype.toString=function(){return this.i.toString()};function y(a){if(a instanceof x&&a.constructor===x)return a.i;p(a);return"type_error:SafeUrl"}
var ra=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,sa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,ta=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function z(a){if(a instanceof x)return a;a="object"==typeof a&&a.h?a.g():String(a);ta.test(a)||(a="about:invalid#zClosurez");return new x(a,w)}
var w={},ua=new x("about:invalid#zClosurez",w);var A=class{constructor(a,b){this.m=b===va?a:""}};A.prototype.h=!0;A.prototype.g=function(){return this.m};A.prototype.toString=function(){return this.m.toString()};var va={};const wa={};class B{constructor(a,b){this.i=b===wa?a:"";this.h=!0}g(){return this.i}}B.prototype.toString=function(){return this.i.toString()};var C;a:{var xa=l.navigator;if(xa){var ya=xa.userAgent;if(ya){C=ya;break a}}C=""}function D(a){return-1!=C.indexOf(a)};var F=class{constructor(a,b,c){this.i=c===E?a:"";this.m=b}};F.prototype.l=!0;F.prototype.j=function(){return this.m};F.prototype.h=!0;F.prototype.g=function(){return this.i.toString()};F.prototype.toString=function(){return this.i.toString()};function G(a){if(a instanceof F&&a.constructor===F)return a.i;p(a);return"type_error:SafeHtml"}
function za(a){if(a instanceof F)return a;var b="object"==typeof a,c=null;b&&a.l&&(c=a.j());a=b&&a.h?a.g():String(a);qa.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;")));return Aa(a,c)}var E={};
function Aa(a,b){const c=ea();a=c?c.createHTML(a):a;return new F(a,b,E)}var Ba=new F(l.trustedTypes&&l.trustedTypes.emptyHTML||"",0,E);var Ca=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=G(Ba);return!b.parentElement});function Da(a,b){b=b instanceof x?b:z(b);a.href=y(b)};var H={},Ea={};function I(){throw Error("Do not instantiate directly");}I.prototype.A=null;I.prototype.toString=function(){return this.content};function J(){I.call(this)}da(J,I);J.prototype.o=H;function K(){I.call(this)}da(K,I);K.prototype.o=Ea;K.prototype.A=1;function Fa(){return D("iPhone")&&!D("iPod")&&!D("iPad")};D("Opera");D("Trident")||D("MSIE");D("Edge");!D("Gecko")||-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge")||D("Trident")||D("MSIE")||D("Edge");-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge")&&D("Mobile");D("Macintosh");D("Windows");D("Linux")||D("CrOS");var Ga=l.navigator||null;Ga&&(Ga.appVersion||"").indexOf("X11");D("Android");Fa();D("iPad");D("iPod");Fa()||D("iPad")||D("iPod");C.toLowerCase().indexOf("kaios");function Ha(a){if(null!=a)switch(a.A){case 1:return 1;case -1:return-1;case 0:return 0}return null}var L=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,f){c=new b(String(c));void 0!==f&&(c.A=f);return c}}(J),Ia=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c){return new b(String(c))}}(K);function M(a){return a.replace(/<\//g,"<\\/").replace(/\]\]>/g,"]]\\>")}
const Ja={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function N(a){return Ja[a]}
const Ka=/[\x00\x22\x26\x27\x3c\x3e]/g,O=/[\x00\x22\x27\x3c\x3e]/g,La=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,Na=/^[a-zA-Z0-9+\/_-]+={0,2}$/,Oa=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Pa=/</g;function Qa(a,b,c){b=b(c||Ra,void 0);if(q(b))if(b instanceof I){if(b.o!==H)throw Error("Sanitized content was not of kind HTML.");b=Aa(b.toString(),b.A||null)}else b=za("zSoyz");else b=za(String(b));if(Ca())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=G(b)}var Ra={};function Sa(a,b){var c=a.state,f=a.s;var d=a.emoji;a=a.R;(b=b&&b.T)?(b=String(b),b=Na.test(b)?b:"zSoyz",b=' nonce="'+(null!=b&&b.o===H?String(String(b.content).replace(Oa,"").replace(Pa,"&lt;")).replace(O,N):String(b).replace(Ka,N))+'"'):b="";b="<style"+b+">";null!=a&&a.o===Ea?a=M(a.content):null==a?a="":a instanceof A?(a instanceof A&&a.constructor===A?a=a.m:(p(a),a="type_error:SafeStyle"),a=M(a)):a instanceof B?(a instanceof B&&a.constructor===B?a=a.i:(p(a),a="type_error:SafeStyleSheet"),a=M(a)):
(a=String(a),a=La.test(a)?a:"zSoyz");f=b+a+'</style><div class="badge '+(f?"badge--hidden":"")+'"><div class="badge__top"><span class="badge__logo '+((c&&c.g&&"NOT_CONNECTED".g?c.o!=="NOT_CONNECTED".o?0:c.toString()==="NOT_CONNECTED".toString():"NOT_CONNECTED"==c)?"badge__logo--red":"badge__logo--blue")+'"></span><span class="badge__title">';switch(q(c)?c.toString():c){case "CONNECTED":f+="Debugger connected";break;case "NOT_CONNECTED":f+="No debugger found";break;default:f+="Debugger connecting..."}f=
f+'</span><button class="btn-hide" title="'+"Hide".replace(O,N);f=f+'"><span class="btn-hide__icon"></span></button><button class="btn-exit" title="'+"Stop debugging".replace(O,N);f+='"><span class="btn-exit__icon"></span></button></div><div class="badge__bottom">';switch(q(c)?c.toString():c){case "CONNECTED":c=f;d=null!=d&&d.o===H?d:d instanceof F?L(G(d).toString(),d.j()):L(String(String(d)).replace(Ka,N),Ha(d));f=c+('<div class="badge__emoji">'+d+'</div><div>Debug information for this page is viewable in the<br>Tag Assistant window <a href="https://support.google.com/tagassistant/answer/10039345" target="_blank">Learn more</a></div>');
break;case "NOT_CONNECTED":f=f+'<div>Could not connect to the Tag Assistant window <a href="https://support.google.com/tagassistant/answer/10039345" target="_blank">Learn more</a></div><button class="btn-start btn" title="'+"Resume debugging this domain".replace(O,N);f+='">Open debugger</button>';break;default:f+="Establishing a connection to the debugger<br>in the Tag Assistant window"}return d=L(f+"</div></div>")};var Ta=!/^\s*class\s*\{\s*\}\s*$/.test(class{}.toString());/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){if(Ta&&!HTMLElement.es5Shimmed&&void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.polyfillWrapFlushCallback){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;HTMLElement.es5Shimmed=!0;Object.setPrototypeOf(HTMLElement,a)}})();function P(a){var b,c,f;const d=a.shadowRoot;Qa(d,Sa,{state:a.state,s:a.s,emoji:a.emoji,R:Ia('body,html{font-size:100%;height:100%}*,:after,:before{-moz-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{background:#fff;color:#666;cursor:default;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1;margin:0;padding:0;position:relative}embed,img,object{height:auto;max-width:100%}embed,object{height:100%}img{border:0;display:inline-block;-ms-interpolation-mode:bicubic;vertical-align:middle}script{display:none!important}a{background:transparent}a:hover{cursor:pointer}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}b,strong{font-weight:700}button{-webkit-appearance:button;cursor:pointer;font-family:inherit;font-size:100%;line-height:normal;margin:0;text-transform:none}button[disabled]{cursor:default}button::-moz-focus-inner{border:0;padding:0}code{font-family:monospace,serif;font-size:1em}input{font-family:inherit;font-size:100%;line-height:normal;margin:0}input::-moz-focus-inner{border:0;padding:0}input[type=checkbox],input[type=radio]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}html input[disabled]{cursor:default}select{font-family:inherit;font-size:100%;margin:0;text-transform:none;width:100%}table{border-collapse:collapse;border-spacing:0}textarea{font-family:inherit;font-size:100%;height:auto;margin:0;min-height:50px;overflow:auto;vertical-align:top}ol,ul{margin:0}.left{float:left!important}.right{float:right!important}.clearfix{*zoom:1}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.hide{display:none}.row{width:100%;margin:0 auto;max-width:72.5em;*zoom:1}.row:after,.row:before{content:" ";display:table}.row:after{clear:both}.row.collapse>.column,.row.collapse>.columns{padding-left:0;padding-right:0;float:left}.row.collapse .row{margin-left:0;margin-right:0}.row .row{width:auto;margin:0 -.9375em;max-width:none;*zoom:1}.row .row:after,.row .row:before{content:" ";display:table}.row .row:after{clear:both}.row .row.collapse{width:auto;margin:0;max-width:none;*zoom:1}.row .row.collapse:after,.row .row.collapse:before{content:" ";display:table}.row .row.collapse:after{clear:both}.column,.columns{float:left;padding-left:.9375em;padding-right:.9375em;position:relative;width:100%}.column.medium-centered,.columns.medium-centered{float:none;margin-left:auto;margin-right:auto}.medium-1{width:8.33333%}.medium-2{width:16.66667%}.medium-3{width:25%}.medium-4{width:33.33333%}.medium-5{width:41.66667%}.medium-6{width:50%}.medium-7{width:58.33333%}.medium-8{width:66.66667%}.medium-9{width:75%}.medium-10{width:83.33333%}.medium-11{width:91.66667%}.medium-12{width:100%}.medium-offset-3{margin-left:25%!important}[class*=column]+[class*=column]:last-child{float:right}[class*=column]+[class*=column].end{float:left}*{text-align:start}.btn{-webkit-transition:background .3s,border .3s,box-shadow .3s,color .3s;transition:background .3s,border .3s,box-shadow .3s,color .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;height:36px;line-height:34px;min-width:72px;outline:none;padding:0 12px;text-align:center;vertical-align:middle;white-space:nowrap;background-color:transparent;border:1px solid rgba(0,0,0,.12);color:#1a73e8;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.btn,.btn:focus,.btn:hover{text-decoration:none}.btn:active{-webkit-transition:all .1s;transition:all .1s}.btn.disabled,.btn:disabled{box-shadow:none!important;color:rgba(0,0,0,.38)!important;cursor:auto}.btn:hover{background-color:rgba(26,115,232,.06);border-color:#d2e3fc}.btn:focus{border-color:#d2e3fc}.btn:active,.btn:focus{background-color:rgba(26,115,232,.12)}.btn:active{box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);border-color:transparent}.btn.disabled,.btn:disabled{background-color:transparent!important;border-color:rgba(0,0,0,.03)!important}.btn.btn--filled{-webkit-transition:background .3s,border .3s,box-shadow .3s,color .3s;transition:background .3s,border .3s,box-shadow .3s,color .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;height:36px;line-height:34px;min-width:72px;outline:none;padding:0 12px;text-align:center;vertical-align:middle;white-space:nowrap;background-color:#1a73e8;border:1px solid transparent;color:#fff}.btn.btn--filled,.btn.btn--filled:focus,.btn.btn--filled:hover{text-decoration:none}.btn.btn--filled:active{-webkit-transition:all .1s;transition:all .1s}.btn.btn--filled.disabled,.btn.btn--filled:disabled{box-shadow:none!important;color:rgba(0,0,0,.38)!important;cursor:auto}.btn.btn--filled:hover{background-color:#3684eb}.btn.btn--filled:focus,.btn.btn--filled:hover{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);border-color:transparent}.btn.btn--filled:focus{background-color:#5295ee}.btn.btn--filled:active{box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background-color:#1a73e8;border-color:transparent}.btn.btn--filled.disabled,.btn.btn--filled:disabled{background-color:rgba(0,0,0,.03)!important;border-color:transparent!important}.btn.btn--flat{-webkit-transition:background .3s,border .3s,box-shadow .3s,color .3s;transition:background .3s,border .3s,box-shadow .3s,color .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;height:36px;line-height:34px;min-width:72px;outline:none;text-align:center;vertical-align:middle;white-space:nowrap;background-color:transparent;border:1px solid transparent;color:#1a73e8;margin-left:8px;margin-right:8px;padding:0 8px}.btn.btn--flat,.btn.btn--flat:focus,.btn.btn--flat:hover{text-decoration:none}.btn.btn--flat:active{-webkit-transition:all .1s;transition:all .1s}.btn.btn--flat.disabled,.btn.btn--flat:disabled{box-shadow:none!important;color:rgba(0,0,0,.38)!important;cursor:auto}.btn.btn--flat:hover{background-color:rgba(26,115,232,.06);border-color:transparent}.btn.btn--flat:active,.btn.btn--flat:focus{background-color:rgba(26,115,232,.12);border-color:transparent;box-shadow:none}.btn.btn--flat.disabled,.btn.btn--flat:disabled{background-color:transparent!important;border-color:transparent!important}.btn+.btn,.btn-start{margin-left:8px}.badge{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);border-radius:8px;bottom:24px;color:#80868b;font-family:Roboto,Helvetica Neue,Arial,sans-serif;font-size:13px;position:fixed;right:24px;width:360px;z-index:2147483647}.badge a{color:#1a73e8}.badge a:hover{text-decoration:none}.badge__top{background-color:#f1f3f4;border-radius:8px 8px 0 0;border-bottom:1px solid #dadce0;padding:0 4px 0 0}.badge__bottom,.badge__top{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.badge__bottom{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:0 0 8px 8px;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-moz-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;line-height:18px;min-height:52px;padding:8px;text-align:center}.badge__title{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-size:16px;font-weight:500;margin:auto 16px auto 0}.badge--hidden{display:none}.badge__logo{background-repeat:no-repeat;background-size:contain;display:inline-block;height:24px;margin:12px;width:24px}.badge__logo.badge__logo--blue{background-image:url(\'data:image/svg+xml,%3C%3Fxml version="1.0" encoding="utf-8"%3F%3E%3Csvg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E .st0%7Bfill:none;%7D %3C/style%3E%3Cpath class="st0" d="M0,0h24v24H0V0z"/%3E%3Cg%3E%3Ccircle style="fill: %231a73e8" cx="12" cy="12" r="3"/%3E%3Cpath style="fill: %231a73e8" d="M21.4,11.6l-9-9C12,2.2,11.5,2,11,2H4C2.9,2,2,2.9,2,4v7c0,0.5,0.2,1,0.6,1.4l3.8,3.8l0.9-0.9H8l0.4-0.4 c-0.6-0.8-1-1.8-1-2.9c0-2.5,2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-1.1,0-2.1-0.4-2.9-1L8.7,16v0.7l-0.9,0.9l3.8,3.8 C12,21.8,12.5,22,13,22s1-0.2,1.4-0.6l7-7C21.8,14,22,13.5,22,13S21.8,11.9,21.4,11.6z M5.5,7C4.7,7,4,6.3,4,5.5S4.7,4,5.5,4 S7,4.7,7,5.5S6.3,7,5.5,7z"/%3E%3C/g%3E%3C/svg%3E%0A\')}.badge__logo.badge__logo--red{background-image:url(\'data:image/svg+xml,%3C%3Fxml version="1.0" encoding="utf-8"%3F%3E%3Csvg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E .st0%7Bfill:none;%7D %3C/style%3E%3Cpath class="st0" d="M0,0h24v24H0V0z"/%3E%3Cg%3E%3Ccircle style="fill: %23D93025" cx="12" cy="12" r="3"/%3E%3Cpath style="fill: %23D93025" d="M21.4,11.6l-9-9C12,2.2,11.5,2,11,2H4C2.9,2,2,2.9,2,4v7c0,0.5,0.2,1,0.6,1.4l3.8,3.8l0.9-0.9H8l0.4-0.4 c-0.6-0.8-1-1.8-1-2.9c0-2.5,2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6s-2.1,4.6-4.6,4.6c-1.1,0-2.1-0.4-2.9-1L8.7,16v0.7l-0.9,0.9l3.8,3.8 C12,21.8,12.5,22,13,22s1-0.2,1.4-0.6l7-7C21.8,14,22,13.5,22,13S21.8,11.9,21.4,11.6z M5.5,7C4.7,7,4,6.3,4,5.5S4.7,4,5.5,4 S7,4.7,7,5.5S6.3,7,5.5,7z"/%3E%3C/g%3E%3C/svg%3E%0A\')}.badge .btn-hide__icon{border-bottom:2px solid #80868b;display:inline-block;height:16px;width:16px}.badge .btn-exit__icon{background:#80868b;display:inline-block;height:16px;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:2px}.badge .btn-exit__icon:after{background:#80868b;content:"";height:2px;left:-7px;position:absolute;top:7px;width:16px}.badge .btn-exit,.badge .btn-hide{-webkit-transform:background-color .5s;transform:background-color .5s;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:none;color:#000;cursor:pointer;opacity:.54;height:40px;margin:4px 0;outline:none;width:40px}.badge .btn-exit:active,.badge .btn-hide:active{background-color:rgba(64,64,64,.12);-webkit-transform:background-color .1s;transform:background-color .1s}.badge .btn-exit.disabled:active,.badge .btn-hide.disabled:active{background:transparent}.badge .btn-exit:hover,.badge .btn-hide:hover{opacity:.87}.badge .btn-exit.disabled,.badge .btn-exit.disabled:hover,.badge .btn-exit[disabled],.badge .btn-exit[disabled]:hover,.badge .btn-hide.disabled,.badge .btn-hide.disabled:hover,.badge .btn-hide[disabled],.badge .btn-hide[disabled]:hover{color:#000;cursor:default;opacity:.38}')});
null===(b=d.querySelector("button.btn-hide"))||void 0===b?void 0:b.addEventListener("click",()=>{!0!==a.s&&(a.s=!0,P(a))});null===(c=d.querySelector("button.btn-exit"))||void 0===c?void 0:c.addEventListener("click",()=>{a.dispatchEvent(new CustomEvent("gtm-debug-badge-end-session",{}))});null===(f=d.querySelector("button.btn-start"))||void 0===f?void 0:f.addEventListener("click",()=>{a.dispatchEvent(new CustomEvent("gtm-debug-badge-restart-session",{}))})}
function Q(a,b){a.state!==b&&(a.state=b,P(a))}var Ua=class extends HTMLElement{constructor(){super();this.state="CONNECTING";this.s=!1;this.emoji="";this.attachShadow({mode:"open"});P(this)}};try{customElements.define("gtm-debug-badge",Ua)}catch(a){console.log("Tag Assistant badge could not be registered: ",a)};const R={};function S(a){R.TAGGING=R.TAGGING||[];R.TAGGING[a]=!0};var T=window,U=document;Object.freeze({async:1,nonce:1,onerror:1,onload:1,src:1,type:1});function Va(a,b){const c=U.createElement("script");c.type="text/javascript";c.async=!0;{const f=ea();a=f?f.createScriptURL(a):a;a=new v(a,ia)}c.src=ja(a);(a=aa(c.ownerDocument&&c.ownerDocument.defaultView))&&c.setAttribute("nonce",a);b&&(c.onerror=b);(b=aa())&&c.setAttribute("nonce",b);b=U.getElementsByTagName("script")[0]||U.body||U.head;b.parentNode.insertBefore(c,b)};var V=class{constructor(){const a={};this.g=()=>null!=a[1933]?a[1933]:!1}};V.g=void 0;V.h=function(){return V.g?V.g:V.g=new V};let W=[];function X(){{var a={};const b=T.google_tag_data;T.google_tag_data=void 0===b?a:b;a=T.google_tag_data}a.ics||(a.ics={entries:{},set:Wa,update:Xa,addListener:Ya,notifyListeners:Za,active:!1,usedDefault:!1});return a.ics}
function Wa(a,b,c,f,d,e){var g=X();g.active=!0;g.usedDefault=!0;if(void 0!=b){var k=g.entries;g=k[a]||{};var h=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;f=f.toUpperCase();d=d.toUpperCase();if(""===f||c===d||(c===f?h!==d:!c&&!h)){d=!!(e&&0<e&&void 0===g.update);const m={region:c,initial:"granted"===b,update:g.update,quiet:d};if(""!==f||!1!==g.initial)k[a]=m;d&&T.setTimeout(()=>{k[a]===m&&m.quiet&&(m.quiet=!1,Y(a),Za(),S(2))},e)}}}
function Xa(a,b){var c=X();c.active=!0;if(void 0!=b){var f=$a(a);c=c.entries;c=c[a]=c[a]||{};c.update="granted"===b;b=$a(a);c.quiet?(c.quiet=!1,Y(a)):b!==f&&Y(a)}}function Ya(a,b){W.push({M:a,P:b})}function Y(a){for(let c=0;c<W.length;++c){const f=W[c];{var b=f.M;const d="[object Array]"==Object.prototype.toString.call(Object(b));Array.isArray?Array.isArray(b)!==d&&S(4):S(5);b=d}b&&-1!==f.M.indexOf(a)&&(f.N=!0)}}
function Za(a){for(let b=0;b<W.length;++b){const c=W[b];if(c.N){c.N=!1;try{c.P({consentEventId:a})}catch(f){}}}}function $a(a){a=X().entries[a]||{};return void 0!==a.update?a.update:void 0!==a.initial?a.initial:void 0};function ab(a,b,c){var f=document.cookie;document.cookie=a;a=document.cookie;if(!(f=f!=a)&&(f=void 0!=b)){if(bb(c))for(c=[],a=String(a||document.cookie).split(";"),f=0;f<a.length;f++){var d=a[f].split("=");const e=d[0].replace(/^\s*|\s*$/g,"");e&&"__TAG_ASSISTANT"==e&&(d=d.slice(1).join("=").replace(/^\s*|\s*$/g,""),c.push(d))}else c=[];f=0<=c.indexOf(b)}return f}
function cb(a,b){function c(k,h,m){if(null==m)return delete e[h],k;e[h]=m;return`${k}; ${h}=${m}`}function f(k,h){if(null==h)return delete e[h],k;e[h]=!0;return`${k}; ${h}`}if(bb(b.O)){if(void 0==a)var d=`${"__TAG_ASSISTANT"}=deleted; expires=${(new Date(0)).toUTCString()}`;else b.encode&&(a=encodeURIComponent(a)),a=db(a),d=`${"__TAG_ASSISTANT"}=${a}`;var e={};d=c(d,"path",b.path);var g;b.expires instanceof Date?g=b.expires.toUTCString():null!=b.expires&&(g=`${b.expires}`);d=c(d,"expires",g);d=c(d,
"max-age",b.U);d=c(d,"samesite",b.V);b.secure&&(d=f(d,"secure"));g=b.domain;if("auto"===g){g=eb();for(let k=0;k<g.length;++k){const h="none"!==g[k]?g[k]:void 0;let m=c(d,"domain",h);m=f(m,b.flags);if(!fb(h,b.path)&&ab(m,a,b.O))break}}else g&&"none"!==g&&(d=c(d,"domain",g)),d=f(d,b.flags),fb(g,b.path)||ab(d,a,b.O)}}function gb(a){var b={};null==b.path&&(b.path="/");b.domain||(b.domain="auto");cb(a,b)}function db(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}
const hb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ib=/(^|\.)doubleclick\.net$/i;function fb(a,b){return ib.test(document.location.hostname)||"/"===b&&hb.test(a)}function eb(){const a=[];var b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=document.location.hostname;(b=ib.test(b)||hb.test(b))||a.push("none");return a}
function bb(a){if(!(V.h().g()&&a&&V.h().g()&&X().active))return!0;if((X().entries[a]||{}).quiet)return!1;a=$a(a);return null==a?!0:!!a};function jb(a){var b,c;return"CONTAINER_STARTING"!==a.messageType?!1:"string"===typeof(null===(b=null===a||void 0===a?void 0:a.data)||void 0===b?void 0:b.scriptSource)&&"function"===typeof(null===(c=null===a||void 0===a?void 0:a.data)||void 0===c?void 0:c.resume)};var kb=/^tag-assistant-debug-window-(.*)$/;function lb(a){if("string"!==typeof a)return!1;switch(a){case "CLEAR_COOKIE":case "CONTAINER_DETAILS":case "CONTAINER_STARTING":case "LEGACY_CONTAINER_STARTING":case "MEMO":case "END_SESSION":case "PING":case "DEBUG_CONTAINER_FAILED_TO_LOAD":case "NAVIGATE":case "RESEND_MEMOS":case "PAGE_SUMMARY":return!0;default:return!1}};function mb(a){const b=new Uint8Array(16);a.crypto.getRandomValues(b);return a.btoa(String.fromCharCode(...b)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};const nb=/:[0-9]+$/,ob=a=>a?a.replace(":","").toLowerCase():"";function pb(a){const b=U.createElement("a");a&&(b.href=a);let c=b.pathname;"/"!==c[0]&&(a||S(1),c="/"+c);a=b.hostname.replace(nb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port}}
function qb(a){var b=["gtm_debug"];function c(g){if(0>b.indexOf(g.split("=")[0]))return g}function f(g){return g.split("&").map(c).filter(k=>void 0!=k).join("&")}var d=pb(a);a=a.split(/[?#]/)[0];let e=d.search;d=d.hash;"?"===e[0]&&(e=e.substring(1));"#"===d[0]&&(d=d.substring(1));e=f(e);d=f(d);""!==e&&(e="?"+e);""!==d&&(d="#"+d);d=`${a}${e}${d}`;"/"===d[d.length-1]&&(d=d.substring(0,d.length-1));return d};function rb(a,b){"loading"!==a.readyState?b():a.addEventListener("DOMContentLoaded",()=>b())}
function sb(a,b=[],c=[]){var f,d;if(null==a)return a;const e=typeof a;if("boolean"===e||"string"===e||"number"===e)return a;if("function"===e)return"Function";if("object"===e){const k=b.indexOf(a);if(-1!==k)return c[k];try{if(a&&"function"===typeof a[Symbol.iterator]){var g=[];b.push(a);c.push(g);for(const h of a)g.push(sb(h,b,c));return g}if(a instanceof Node){b=[];c=a;do{if(c instanceof Element){const m=c.classList?[...c.classList].join("."):"",Ma=(c.tagName?c.tagName.toLowerCase():"")+(m?"."+m:
"")+(c.id?"#"+c.id:"");Ma&&b.unshift(Ma)}c=c.parentNode}while(null!=c);g=null!==(d=null===(f=a.toString().match(/\[object (\w+)\]/))||void 0===f?void 0:f[1])&&void 0!==d?d:a.toString();const h=b.join(" > ");return h?`${g}: ${h}`:g}g={};b.push(a);c.push(g);for(const [h,m]of Object.entries(a))g[h]=sb(m,b,c);return g}catch(h){console.log("Object inspection failed: %o",h)}}try{return String(a)}catch(k){console.log("Failed to convert to string: %o",k);try{return String(Object.prototype.toString.call(a))}catch(h){return`[${e}]`}}}
;function tb(a,b,c,f){if(lb(b.type))if(c===a.g.origin&&"CLEAR_COOKIE"===b.type)ub(a);else if(c===a.F){if(b.emoji&&!a.emoji){a.emoji=b.emoji;c=a.badge;var d=b.emoji;c.emoji!==d&&(c.emoji=d,P(c))}switch(b.type){case "PING":b=null==a.B;a.B=a.i();Q(a.badge,"CONNECTED");vb(a);b&&(a.L=f,gb("x"),wb(a));break;case "CONTAINER_DETAILS":xb(a,b.data);break;case "CLEAR_COOKIE":ub(a);break;case "NAVIGATE":Da(a.g.location,b.data.url);break;case "RESEND_MEMOS":a.H=!1,a.C=0,yb(a,!0,...a.h)}}}
function zb(a){if(null==a.g.__TAG_ASSISTANT_API)return!1;if(a.G)return!0;a.G=!0;a.g.__TAG_ASSISTANT_API.setReceiver(a.I);a.j.push(()=>{var b;null===(b=a.g.__TAG_ASSISTANT_API)||void 0===b?void 0:b.disconnect()});return!0}
function Ab(a){if(null==a.J)a.J=a.i();else{var b=a.i().getTime();if(null==a.B){if(5E3<b-a.J.getTime()&&(a.K=!0,Q(a.badge,"NOT_CONNECTED"),Bb(a),!a.v))for(const c of a.h)jb(c)&&c.data.resume()}else if(3E4<b-a.B.getTime())"NOT_CONNECTED"!==a.badge.state&&(Q(a.badge,"NOT_CONNECTED"),b=a.badge,!1!==b.s&&(b.s=!1,P(b)));else{b=a.i().getTime();for(const [c,f]of Object.entries(a.l)){for(const [d,{resume:e,timestamp:g}]of Object.entries(f))3E4<b-g.getTime()&&(e(),delete f[d]);0===Object.keys(f).length&&delete a.l[c]}}}Z(a,
{type:"PING"})}
function vb(a){const b=a.g.document;if("CONNECTED"===a.badge.state){if(a.m)return;a.m=!0;var c="https://fonts.gstatic.com/s/i/googlematerialicons/more/v6/gm_blue-48dp/1x/gm_more_gm_blue_48dp.png"}else if(a.m)a.m=!1,c="https://fonts.gstatic.com/s/i/googlematerialicons/label_off/v6/gm_grey-48dp/1x/gm_label_off_gm_grey_48dp.png";else return;a=b.querySelector("link[rel*='icon']")||b.createElement("link");a.type="image/x-icon";a.rel="shortcut icon";a.href=c instanceof v?ja(c).toString():c instanceof x?
y(c):y(z(c));b.getElementsByTagName("head")[0].appendChild(a)}
function Cb(a){const b=a.g.document,c=()=>{Z(a,{type:"END_SESSION"});ub(a)};a.badge.addEventListener("gtm-debug-badge-end-session",c);const f=()=>{Q(a.badge,"CONNECTING");var d=a.F+"?restart_tag_assistant",e;if(a.g.name)var g=null===(e=a.g.name.match(kb))||void 0===e?void 0:e[1];else g=mb(a.g),a.g.name=`${"tag-assistant-debug-window"}-${g}`;e=g?`${"tag-assistant-home"}-${g}`:"_blank";d instanceof x||(d="object"==typeof d&&d.h?d.g():String(d),ta.test(d)?d=new x(d,w):(d=String(d),d=d.replace(/(%0A|%0D)/g,
""),d=(g=d.match(sa))&&ra.test(g[1])?new x(d,w):null));g=d||ua;d=a.g;g=g instanceof x?g:z(g);e=e instanceof u?e instanceof u&&e.constructor===u&&e.v===ha?e.u:"type_error:Const":e||"";e=(d||l).open(y(g),e);a.L=e||void 0;Db(a)};a.badge.addEventListener("gtm-debug-badge-restart-session",f);b.body.appendChild(a.badge);a.D.push(()=>{a.badge.removeEventListener("gtm-debug-badge-end-session",c);a.badge.removeEventListener("gtm-debug-badge-restart-session",f);a.badge.remove()})}
function Z(a,b){var c;zb(a)?a.g.__TAG_ASSISTANT_API.sendMessage(b):null===(c=a.L)||void 0===c?void 0:c.postMessage(b,a.F)}function ub(a){Bb(a);for(var b of a.D)b();a.D=[];gb(void 0);b=qb(a.g.location.href);Da(a.g.location,b)}
function Db(a){if(a.K){var b=d=>{lb(d.type)&&a.g.location.reload()},c=({data:d})=>void b(d);a.g.addEventListener("message",c);a.G=!1;a.I=b;zb(a);Z(a,{type:"PING"});var f=a.g.setInterval(()=>{Z(a,{type:"PING"})},1E3);a.j.push(()=>{a.g.clearInterval(f);a.g.removeEventListener("message",c)});a.g.setTimeout(()=>{Q(a.badge,"NOT_CONNECTED");Bb(a)},3E4)}}function Bb(a){for(const b of a.j)b();a.j=[]}
function xb(a,b){if(a.u[b.nonce]){delete a.u[b.nonce];var c=a.l[b.id];if("DETAILS_NOT_FOUND"===b.status){if(c){for(const f of Object.values(c))f.resume();delete a.l[b.id]}}else Va(b.scriptSource,()=>{Z(a,{type:"DEBUG_CONTAINER_FAILED_TO_LOAD",data:b})}),c&&delete c[b.nonce]}}
function yb(a,b,...c){for(const h of c)if(jb(h))if(b)Z(a,{type:"CONTAINER_STARTING",data:{initialPublish:h.data.initialPublish,scriptSource:h.data.scriptSource,nonce:mb(a.g)}});else{c=a;var f=h;var d=pb(f.data.scriptSource);var e="query";e=String(e).toLowerCase();if("protocol"===e||"port"===e)d.protocol=ob(d.protocol)||ob(T.location.protocol);"port"===e?d.port=String(Number(d.hostname?d.port:T.location.port)||("http"==d.protocol?80:"https"==d.protocol?443:"")):"host"===e&&(d.hostname=(d.hostname||
T.location.hostname).replace(nb,"").toLowerCase());var g=ob(d.protocol);e&&(e=String(e).toLowerCase());switch(e){case "url_no_fragment":e="";d&&d.href&&(e=d.href.indexOf("#"),e=0>e?d.href:d.href.substr(0,e));d=e;break;case "protocol":d=g;break;case "host":d=d.hostname.replace(nb,"").toLowerCase();break;case "port":d=String(Number(d.port)||("http"==g?80:"https"==g?443:""));break;case "path":d.pathname||d.hostname||S(1);d="/"==d.pathname.charAt(0)?d.pathname:"/"+d.pathname;d=d.split("/");a:if(e=[],
g=d[d.length-1],Array.prototype.indexOf)e=e.indexOf(g),e="number"==typeof e?e:-1;else{for(var k=0;k<e.length;k++)if(e[k]===g){e=k;break a}e=-1}0<=e&&(d[d.length-1]="");d=d.join("/");break;case "query":d=d.search.replace("?","");a:{d=d.split("&");for(e=0;e<d.length;e++)if(g=d[e].split("="),"id"===decodeURIComponent(g[0]).replace(/\+/g," ")){d=g.slice(1).join("=");d=decodeURIComponent(d).replace(/\+/g," ");break a}d=void 0}break;case "extension":d=d.pathname.split(".");d=1<d.length?d[d.length-1]:"";
d=d.split("/")[0];break;case "fragment":d=d.hash.replace("#","");break;default:d=d&&d.href}e=d||"";d=c.l[e];d||(d={},c.l[e]=d);e=c.g;e.postscribe&&(e.google_tag_manager||(e.google_tag_manager={}),g=e.google_tag_manager,k=String(g.postscribe||"").replace(/\s+/g,""),!k||0<k.indexOf("{")&&k.indexOf("{")===k.indexOf("{}"))&&(g.postscribe=e.postscribe);e=mb(c.g);c.u[e]=!0;d[e]={resume:f.data.resume,timestamp:c.i()};Z(c,{type:"CONTAINER_STARTING",data:{initialPublish:f.data.initialPublish,scriptSource:f.data.scriptSource,
nonce:e}})}else if(f=c=void 0,"LEGACY_CONTAINER_STARTING"!==h.messageType?0:"string"===typeof(null===(f=null===h||void 0===h?void 0:h.data)||void 0===f?void 0:f.scriptSource)&&"string"===typeof(null===(c=null===h||void 0===h?void 0:h.data)||void 0===c?void 0:c.id))Z(a,{type:"LEGACY_CONTAINER_STARTING",data:{id:h.data.id,scriptSource:h.data.scriptSource}});else{c=a;f=h;if(!c.H){c.H=!0;d=c;e=c.g.location.href;if(!(g=c.g.document.title)&&(g=c.g.document.location.href,"/"!==g)){try{const m=new URL(g);
m.search="";m.hash="";g=m.toString()}catch(m){}g=g.split("/");g=g[g.length-1]||g[g.length-2]}Z(d,{type:"PAGE_SUMMARY",data:{href:e,title:g,emoji:c.emoji,pageId:"groupId"in f.key?f.key.groupId:""}})}Z(a,{type:"MEMO",data:{memo:sb(h),sequence:a.C}});a.C++}}function wb(a){if(!a.v){a.v=!0;yb(a,!1,...a.h);var b=a.h.push;a.h.push=(...c)=>{yb(a,!1,...c);return b.apply(a.h,c)}}}
(new class{constructor(a,b,c,f,d){this.g=a;this.badge=b;this.i=c;this.F=f;this.l={};this.D=[];this.j=[];this.K=this.H=this.v=!1;this.u={};this.C=0;this.G=this.m=!1;this.h=a[d];this.h||(this.h=[],a[d]=this.h);this.I=(e,g)=>{tb(this,e,g)}}start(){rb(this.g.document,()=>{zb(this);const a=({data:c,origin:f,source:d})=>{tb(this,c,f,d)};this.g.addEventListener("message",a);this.j.push(()=>{this.g.removeEventListener("message",a)});Ab(this);const b=this.g.setInterval(()=>{Ab(this);vb(this)},1E3);this.j.push(()=>
{this.g.clearInterval(b)});Cb(this)})}}(window,new Ua,()=>new Date,tagAssistantBaseUrl.replace(/\/+$/,""),queueName,flags)).start();/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/

})();