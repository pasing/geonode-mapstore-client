(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31255],{285148:(r,t,e)=>{"use strict";e.d(t,{Qw:()=>g,jo:()=>O,m$:()=>j,AF:()=>h,WT:()=>w,ns:()=>S,RP:()=>P,aK:()=>q,oP:()=>A});var n=e(675110),u=e(55237),i=e(22222),o=e(227361),c=e.n(o),f=e(313311),a=e.n(f);function l(r){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(r)}function y(r){return function(r){if(Array.isArray(r))return b(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||s(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(r,t){if(r){if("string"==typeof r)return b(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(r,t):void 0}}function b(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function m(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function p(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){d(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function d(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==l(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===l(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var g=function(r,t){return function(e){return c()(e,"dimension.data[".concat(t,"][").concat(r,"]"))}},v=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return a()(r.dimensions||[],{name:t})},O=function(r,t){return function(e){return g(r.id,t)(e)||v(r,t)}},j=function(r){return(0,n.l2)(r).reduce((function(t,e){var n=O(e,"time")(r);return n?p(p({},t),{},d({},e.id,n)):t}),{})},h=function(r){return(0,n.l2)(r).filter((function(r){return v(r,"time")}))},w=function(r){var t=c()(r,"dimension.currentTime");return t&&t.split("/")[0]},S=function(r){return c()(r,"dimension.offsetTime")},P=function(r){return!!S(r)},q=((0,i.P1)(j,(function(r){return Object.keys(r).reduce((function(t,e){return[].concat(y(t),y(r[e]&&r[e].values||[]))}),[]).sort()||[]})),function(r){return function(t){return y(c()(O(r,"time")(t),"values",[])).sort()}}),A=function(r,t){var e=g(t,"time")(r),n=e&&e.domain&&e.domain.split("--");if(n&&2===n.length)return n&&{start:n[0],end:n[1]};var i,o,c=e&&e.domain&&e.domain.split(",");if(c&&c.length>0){var f=(i=(0,u.tz)(c),o=2,function(r){if(Array.isArray(r))return r}(i)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,u,i,o,c=[],f=!0,a=!1;try{if(i=(e=e.call(r)).next,0===t){if(Object(e)!==e)return;f=!1}else for(;!(f=(n=i.call(e)).done)&&(c.push(n.value),c.length!==t);f=!0);}catch(r){a=!0,u=r}finally{try{if(!f&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(a)throw u}}return c}}(i,o)||s(i,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{start:f[0],end:f[1]}}return null}},731255:(r,t,e)=>{"use strict";e.d(t,{u$:()=>S,Xh:()=>P,_w:()=>q,eO:()=>A,kG:()=>D,P3:()=>F,bq:()=>k,LB:()=>I,b4:()=>L,M0:()=>M,Li:()=>_,Rd:()=>C,g5:()=>z,Sj:()=>G,o:()=>x,eK:()=>K,jY:()=>N,ND:()=>R,OK:()=>Q,tU:()=>U,ou:()=>V,DK:()=>W,Gl:()=>$,uz:()=>B,Ci:()=>H,Ae:()=>X,gz:()=>Y,He:()=>J,P4:()=>Z,kd:()=>rr,TC:()=>tr,nq:()=>er,Vf:()=>nr,lg:()=>ur});var n=e(91175),u=e.n(n),i=e(227361),o=e.n(i),c=e(513218),f=e.n(c),a=e(675110),l=e(378889),y=e(308316),s=e(552259),b=e(196958),m=e(285148),p=e(274621),d=e(93152),g=e(824260);function v(r){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},v(r)}function O(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function j(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?O(Object(e),!0).forEach((function(t){h(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function h(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==v(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===v(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var w=a.CA,S=function(r){return o()(r,"featuregrid.selectedLayer")},P=function(r){return o()(r,"featuregrid.attributes")},q=function(r){return r&&r.featuregrid&&r.featuregrid.select},A=function(r){return r&&r.featuregrid&&r.featuregrid.changes},D=function(r){return r&&r.featuregrid&&r.featuregrid.newFeatures},F=function(r){return u()(q(r))},T=function(r){var t=(0,g.Qs)(r);if(t){var e=(0,l.findGeometryProperty)(t);return e&&e.localType}return null},E=["Geometry","GeometryCollection"],k=function(r){return!u()(E.filter((function(t){return T(r)===t})))},I=function(r){return A(r)&&A(r).length>0},L=function(r){return D(r)&&D(r).length>0},M=function(r){return r&&r.featuregrid&&r.featuregrid.filters},_=function(r){return w(r,S(r))},C=function(r){return r&&r.featuregrid&&r.featuregrid.open},z=function(r,t){return o()(M(r),t)},G=function(r){var t=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.title||r.name}(w(r,S(r)));return f()(t)?t[(0,y.Pz)(r)]||t.default||"":t},x=function(r){return((0,g.L)(r)||[]).map((function(t){var e=function(r,t){return o()(r,"featuregrid.attributes[".concat(t.name||t.attribute,"]"))}(r,t);return e?j(j({},t),e):t}))},K=function(r){return r&&r.featuregrid&&r.featuregrid.mode},N=function(r){return(q(r)||[]).length},R=function(r){return(0,b.rK)(A(r))},Q=function(r){return function(r){var t=F(r);if(t){var e=(0,b.rK)(A(r));return!((!e[t.id]||null===e[t.id].geometry)&&(e[t.id]&&null===e[t.id].geometry||t._new&&u()(D(r))&&null===u()(D(r)).geometry||(!t._new||!u()(D(r))||null===u()(D(r)).geometry)&&null===t.geometry))}return!1}(r)},U=function(r){return o()(r,"featuregrid.showAgain",!1)},V=function(r){if(o()(r,"featuregrid.showTimeSync",!1)){var t=S(r);return(0,m.jo)({id:t},"time")(r)}return null},W=function(r){return o()(r,"featuregrid.timeSync",!1)},$=function(r){return o()(r,"featuregrid.showPopoverSync",!0)},B=function(r){return r&&r.featuregrid&&r.featuregrid.saving},H=function(r){return r&&r.featuregrid&&r.featuregrid.saved},X=function(r){return r&&r.featuregrid&&r.featuregrid.drawing},Y=function(r){return o()(r,"featuregrid.multiselect",!1)},J=function(r){return(0,s.isSimpleGeomType)(T(r))},Z=function(r){return r.featuregrid&&r.featuregrid.dockSize},rr=function(r){var t=w(r,S(r));return t&&t.name||""},tr=function(r){var t=function(r){return o()(w(r,S(r)),"params")}(r);return{viewParams:t&&(t.VIEWPARAMS||t.viewParams||t.viewparams),cqlFilter:t&&(t.CQL_FILTER||t.cqlFilter||t.cql_filter)}},er=function(r){var t=(0,p.L3)(r),e=function(r){return o()(r,"featuregrid.editingAllowedRoles",["ADMIN"])}(r)||["ADMIN"],n=function(r){return r&&r.featuregrid&&r.featuregrid.canEdit}(r);return(-1!==e.indexOf(t)||n)&&!(0,d.c0)(r)},nr=function(r){return o()(r,"featuregrid.pagination")},ur=function(r){return o()(r,"featuregrid.useLayerFilter",!0)}},824260:(r,t,e)=>{"use strict";e.d(t,{qj:()=>O,Bu:()=>j,UM:()=>h,X1:()=>w,L:()=>S,HY:()=>P,Mz:()=>q,F0:()=>A,dc:()=>D,b0:()=>F,hk:()=>T,Qs:()=>E,gy:()=>k,M7:()=>I,VD:()=>L});var n=e(414293),u=e.n(n),i=e(227361),o=e.n(i),c=e(91175),f=e.n(c),a=e(701469),l=e.n(a),y=e(630998),s=e.n(y);function b(r){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},b(r)}function m(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function p(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){d(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function d(r,t,e){return(t=function(r){var t=function(r,t){if("object"!==b(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var n=e.call(r,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===b(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var g=function(r){return o()(r,"query.filterObj.featureTypeName")},v=function(r){return function(t){return o()(t,'query.featureTypes["'.concat(r,'"]'))}},O=function(r,t){return o()(v(t)(r),"original")},j=function(r){return r&&r.query&&r.query.searchUrl},h=function(r){return r&&r.query&&r.query.url},w=function(r){return r&&r.query&&r.query.filterObj},S=function(r){return o()(v(g(r))(r),"attributes")},P=function(r){return o()(r,"query.typeName")},q=function(r){return o()(r,"query.result.features")},A=function(r){var t=o()(r,"query.result");return p(p({},t),{},{features:(t&&t.features||[]).filter((function(r){return!u()(r.geometry)}))})},D=function(r,t){var e=r&&r.query&&r.query.result&&r.query.result.features;return f()(e.filter((function(r){return r.id===t})))},F={startIndex:function(r){return o()(r,"query.filterObj.pagination.startIndex")},maxFeatures:function(r){return o()(r,"query.filterObj.pagination.maxFeatures")},resultSize:function(r){return o()(r,"query.result.features.length")},totalFeatures:function(r){return o()(r,"query.result.totalFeatures")}},T=function(r,t){var e=v(t)(r);return!!(e&&e.attributes&&e.geometry&&e.original)},E=function(r){return O(r,g(r))},k=function(r){return o()(r,"query.featureLoading")},I=function(r){return o()(r,"query.syncWmsFilter",!1)},L=function(r){var t=o()(r,"query.filterObj.crossLayerFilter"),e=o()(r,"query.filterObj.spatialField"),n=o()(r,"query.filterObj.filterFields");return!!(n&&f()(n)||e&&(e.method&&e.operation&&e.geometry||l()(e)&&s()(e,(function(r){return r.method&&r.operation&&r.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}},274621:(r,t,e)=>{"use strict";e.d(t,{np:()=>n,L3:()=>u,jl:()=>i,y8:()=>o,qg:()=>c}),e(727418),e(227361);var n=function(r){return r&&r.security&&r.security.user},u=function(r){return n(r)&&n(r).role},i=function(r){return r&&r.security&&r.security.user},o=function(r){return r.security&&r.security.token},c=function(r){return"ADMIN"===u(r)}}}]);