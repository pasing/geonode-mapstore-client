(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3476],{9192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(45697),o=n.n(r),i=n(67294),c=n.n(i),s=n(38560),a=n(80681),u=n(50966);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function l(){var e;p(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(y(e=i.call.apply(i,[this].concat(n))),"addTooltip",(function(t){if(!e.props.tooltip)return t;var n=c().createElement(a.Tooltip,{id:"locate-tooltip"},e.props.tooltip);return c().createElement(u.Z,{placement:e.props.tooltipPlace,key:"overlay-trigger."+e.props.id,overlay:n},t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this;return this.addTooltip(c().createElement(s.Z,{id:this.props.id,style:this.props.style,onClick:function(){return e.props.onZoom(e.props.currentZoom+e.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(a.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(c().Component);b(v,"propTypes",{id:o().string,style:o().object,glyphicon:o().string,text:o().string,btnSize:o().oneOf(["large","small","xsmall"]),className:o().string,help:o().oneOfType([o().string,o().element]),step:o().number,currentZoom:o().number,minZoom:o().number,maxZoom:o().number,onZoom:o().func,tooltip:o().element,tooltipPlace:o().string,bsStyle:o().string}),b(v,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const g=v},50966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(80681);const i=(0,r.Z)(o.OverlayTrigger)},61365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n.n(r),i=n(37275);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const s=function(e){return function(t){return o().createElement(e,c({},t,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},13573:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v}),n(75898);var r=n(37295),o=n.n(r),i=n(67294),c=n.n(i),s=n(33664),a=n(22222),u=n(1550),l=n(9192),p=n(5346),f=n(827);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=(0,a.P1)([f.Od,f._e],(function(e,t){return{currentZoom:e&&e.zoom,id:"zoomout-btn",step:-1,glyphicon:"minus",minZoom:t}})),b=(0,s.connect)(h,{onZoom:u.sO},(function(e,t,n){return d(d(d({},e),t),n)}))(l.Z);const v={ZoomOutPlugin:o()(b,{disablePluginIf:"{state('mapType') === 'cesium'}",Toolbar:{name:"ZoomOut",position:4,tooltip:"zoombuttons.zoomOutTooltip",help:c().createElement(p.Z,{msgId:"helptexts.zoomOut"}),tool:!0,priority:1}}),reducers:{}}},70757:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=o},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},75898:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),i=n(70757);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},93379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],a=t.base?s[0]+t.base:s[0],u=n[a]||0,l="".concat(a," ").concat(u);n[a]=u+1;var p=c(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:y(f,t),references:1}),r.push(l)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,d=0;function y(e,t){var n,r,o;if(t.singleton){var i=d++;n=m||(m=a(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=a(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}}}]);