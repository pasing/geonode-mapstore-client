(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[76160],{881808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>a,nT:()=>c,TL:()=>u,KS:()=>s,EB:()=>l,DZ:()=>p,Aw:()=>f,V_:()=>y,H0:()=>d,jW:()=>m,JZ:()=>v,fQ:()=>w,HK:()=>b,YO:()=>g,I6:()=>h});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",a="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",u="MAP_INFO_LOAD_START",s="MAP_INFO_LOADED",l="MAP_INFO_LOAD_ERROR",p="MAP:MAP_SAVE_ERROR",f="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(t,e,r){return{type:i,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function m(t,e){return{type:a,error:t,mapId:e}}function v(t,e,r,n,i){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:i}}function w(t,e){return{type:s,mapId:e,info:t}}function b(t,e){return{type:l,mapId:t,error:e}}function g(t){return{type:u,mapId:t}}function h(t){return{type:c,mapId:t}}},886850:(t,e,r)=>{"use strict";r.d(e,{V6:()=>B,Mc:()=>W,v$:()=>U,ED:()=>V});var n=r(472500),o=r.n(n),i=r(984596),a=r.n(i),c=r(414293),u=r.n(c),s=r(513218),l=r.n(s),p=r(49977),f=r.n(p),y=r(505055),d=r(507526),m=r(375875),v=r.n(m),w=r(47805),b=r(624262),g=r(510284),h=r(439156),O=["totalFeatures","features"],P=["sortOptions","propertyName"];function S(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function A(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===j(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R=r.n(h)()({wfsVersion:"1.1.0"}),I=R.getFeature,T=R.query,_=R.sortBy,N=R.propertyName,M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.totalFeatures,r=t.features,n=A(t,O),o=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).startIndex,i=arguments.length>2?arguments[2]:void 0;return i>e&&i===o+r.length&&e===r.length?F(F({},n),{},{features:r,totalFeatures:i}):F(F({},n),{},{features:r,totalFeatures:e})},C=function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).pagination||!u()(t.startIndex)&&!u()(t.maxFeatures)&&{startIndex:t.startIndex,maxFeatures:t.maxFeatures}},L=function(t){return{crs:{type:"name",properties:{name:"urn:ogc:def:crs:EPSG::4326"}},numberMatched:t.length,numberReturned:t.length,timeStamp:"2020-07-20T11:36:20.118Z",totalFeatures:t.length,type:"FeatureCollection",features:t}},q=function(t,e){if(e.filterFields&&0!==e.filterFields.length){var r=t.features.filter((0,w.createFeatureFilter)(e));t.features=r,t.numberMatched=r.length,t.numberReturned=r.length,t.totalFeatures=r.length}return e.sortOptions&&e.sortOptions.sortBy&&e.sortOptions.sortOrder&&"NONE"!==e.sortOptions.sortOrder&&t.features.sort((function(t,r){var n=t.properties[e.sortOptions.sortBy],o=r.properties[e.sortOptions.sortBy],i=n.toLowerCase().localeCompare(o.toLowerCase());return"ASC"===e.sortOptions.sortOrder?i:-1*i})),t},k=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"json",i=(0,w.getWFSFilterData)(e,r),a=o().parse(t,!0),c=l()(a.query)?a.query:{};c.service="WFS",c.outputFormat=n;var u=o().format({protocol:a.protocol,host:a.host,pathname:a.pathname,query:c});return r.layer&&"vector"===r.layer.type?f().Observable.defer((function(){return new Promise((function(t){var n=L(r.layer.features);t(q(n,e))}))})):{data:i,queryString:u}},B=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(r.layer&&"vector"===r.layer.type)return k(t,e,r,n);var o=k(t,e,r,n),i=o.data,a=o.queryString;return f().Observable.defer((function(){return v().post(a,i,{timeout:6e4,responseType:"arraybuffer",headers:{Accept:"application/xml","Content-Type":"application/xml"}})}))},G=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r.layer&&"vector"===r.layer.type)return k(t,e,r);var n=k(t,e,r),o=n.data,i=n.queryString;return f().Observable.defer((function(){return v().post(i,o,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"}})})).let(g.oB).map((function(t){return M(t.data,C(e,r),r.totalFeatures)}))},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.search,r=void 0===e?{}:e,n=t.url,o=t.name,i=arguments.length>1?arguments[1]:void 0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=c.sortOptions,s=c.propertyName,l=A(c,P);return G(r.url||n,i&&"object"===j(i)?F(F({},i),{},{typeName:o||i.typeName}):I(T(o,[].concat(S(u?[_(u.sortBy,u.sortOrder)]:[]),S(s?[N(s)]:[]),S(i?a()(i):[]))),l),l).catch((function(t){if("OGCError"===t.name&&"NoApplicableCode"===t.code&&!u&&s&&s[0])return G(r.url||n,i&&"object"===j(i)?F(F({},i),{},{typeName:o||i.typeName}):I(T(o,[_(s[0])].concat(S(s?[N(s)]:[]),S(i?a()(i):[]))),l),l);throw t}))},U=function(t){var e=t.layer;return f().Observable.defer((function(){return v().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,i=t.url,a=t.describeFeatureTypeURL,c=o().parse(a||n.url||i,!0);return o().format(F(F({},c),{},{search:void 0,query:F(F({},c.query),{},{service:"WFS",version:"1.1.0",typeName:e,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(e))})).let(g.oB)},V=function(t){var e=t.layer;return f().Observable.defer((function(){return v().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,i=t.url,a=(0,b.Fh)({name:e,url:n&&n.url||i}),c=o().parse(a,!0);return o().format(F(F({},c),{},{search:void 0,query:F(F({},c.query),{},{service:"WFS",version:"1.1.1",request:"GetCapabilities"})}))}(e))})).let(g.oB).switchMap((function(t){return f().Observable.bindNodeCallback((function(t,e){return(0,y.parseString)(t,{tagNameProcessors:[d.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data)}))}},199767:(t,e,r)=>{"use strict";r.d(e,{qP:()=>w,XA:()=>b,fA:()=>g,gN:()=>h,p5:()=>O,Rr:()=>P,DK:()=>S,En:()=>x,Tr:()=>j,t$:()=>A,XJ:()=>E,Dx:()=>F,Jy:()=>R});var n=r(472500),o=r.n(n),i=r(666654),a=r.n(i),c=r(747037),u=r.n(c),s=r(701469),l=r.n(s),p=r(683608),f=r.n(p);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w=function(t,e){return"<wps:Input>"+"<ows:Identifier>".concat(t,"</ows:Identifier>")+e+"</wps:Input>"},b=function(t){return"<wps:Data>".concat(t,"</wps:Data>")},g=function(t,e,r,n){return'<wps:Reference mimeType="'.concat(t,'" xlink:href="').concat(e,'" method="').concat(r,'"').concat("POST"===r?"":"/",">")+("POST"===r?"<wps:Body>".concat(n,"</wps:Body></wps:Reference>"):"")},h=function(t){return"<wps:LiteralData>".concat(t,"</wps:LiteralData>")},O=function(t,e,r){return"<wps:ComplexData".concat(e?' mimeType="'.concat(e,'"'):"").concat(r?' encoding="'.concat(r,'"'):"",">").concat(t,"</wps:ComplexData>")},P=function(t){return/\bCDATA\b/.test(t)?t:"<![CDATA[".concat(t,"]]>")},S=function(t){return"<wps:ResponseForm>".concat(t,"</wps:ResponseForm>")},x=function(t,e){return"<wps:RawDataOutput".concat(e?' mimeType="'.concat(e,'"'):"",">")+"<ows:Identifier>".concat(t,"</ows:Identifier>")+"</wps:RawDataOutput>"},j=function(t,e,r){return"<wps:ResponseDocument".concat(t?' storeExecuteResponse="true"':"").concat(e?' status="true"':"",">")+r+"</wps:ResponseDocument>"},A=function(t,e,r,n,o){return"<wps:Output".concat(t?' mimeType="'.concat(t,'"'):"").concat(e?' asReference="true"':"",">")+"<ows:Identifier>".concat(r,"</ows:Identifier>")+(n?"<ows:Title>".concat(n,"</ows:Title>"):"")+(o?"<ows:Abstract>".concat(o,"</ows:Abstract>"):"")+"</wps:Output>"},E=function(t){return w("writeParameters",b(O("<dwn:Parameters>".concat(t,"</dwn:Parameters>"))))},F=function(t,e){return'<dwn:Parameter key="'.concat(t,'">').concat(e,"</dwn:Parameter>")},D=function(t,e){var r=o().parse(t,!0),n=r.pathname;return(a()(r.pathname,"wfs")||a()(r.pathname,"wms"))&&(n=r.pathname.replace(/(wms|ows|wfs|wps)$/,"wps")),o().format(m(m({},r),{},{search:null,pathname:n,query:m(m({service:"WPS"},e),r.query)}))},R=function(t,e){if(t&&u()(t))return D(t,e);if(l()(t)){var r=f()(0,t.length-1);return D(t[r],e)}return t}},27835:(t,e,r)=>{"use strict";r.d(e,{Uh:()=>S,W5:()=>x,ai:()=>E,RW:()=>F,dr:()=>D,mG:()=>I});var n=r(406557),o=r.n(n),i=r(49977),a=r(505055),c=r(507526),u=r(375875),s=r.n(u),l=r(199767);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=v(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}function w(t){var e="function"==typeof Map?new Map:void 0;return w=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return b(t,arguments,O(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)},w(t)}function b(t,e,r){return b=g()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o},b.apply(null,arguments)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(i,t);var e,r,n,o=(r=i,n=g(),function(){var t,e=O(r);if(n){var o=O(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function i(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t)).name="WPSExecuteError",r.code=e||t,r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(w(Error)),S=function(t,e,r){return'<?xml version="1.0" encoding="UTF-8"?><wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:dwn="http://geoserver.org/wps/download" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">'+"<ows:Identifier>".concat(t,"</ows:Identifier>")+"<wps:DataInputs>"+(e||[]).join("")+"</wps:DataInputs>"+(r||"")+"</wps:Execute>"},x=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.Observable.defer((function(){return s().get((0,l.Jy)(t,{version:"1.0.0",REQUEST:"GetExecutionStatus",executionId:e}),d({headers:{Accept:"application/xml"}},r))}))},j=function(t,e){var r,n,i=function(t){var e,r,n,i,a,c,u,s,l,p,f,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o(),d=null==t||null===(e=t.ExecuteResponse)||void 0===e||null===(r=e.Status)||void 0===r?void 0:r[0];return null!=d&&d.ProcessAccepted?{status:"ProcessAccepted"}:null!=d&&d.ProcessStarted?{status:"ProcessStarted"}:null!=d&&d.ProcessSucceeded?{status:"ProcessSucceeded",data:y(null===(n=t.ExecuteResponse.ProcessOutputs)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.Output)}:null!=d&&d.ProcessFailed?{status:"ProcessFailed",exceptionReport:null==d||null===(a=d.ProcessFailed)||void 0===a||null===(c=a[0])||void 0===c||null===(u=c.ExceptionReport)||void 0===u||null===(s=u[0])||void 0===s||null===(l=s.Exception)||void 0===l||null===(p=l[0])||void 0===p||null===(f=p.ExceptionText)||void 0===f?void 0:f[0]}:null!=d&&d.ProcessPaused?{status:"ProcessPaused"}:{status:"UnexpectedStatus"}}(t,e);if("ProcessFailed"===i.status)throw new P(i.exceptionReport,"ProcessFailed");if("UnexpectedStatus"===i.status)throw new P("UnexpectedProcessStatus");if("ProcessSucceeded"===i.status)return{succeeded:!0,data:i.data};var a=null==t||null===(r=t.ExecuteResponse)||void 0===r||null===(n=r.$)||void 0===n?void 0:n.statusLocation;if(!a)throw new P("NoStatusLocation");var c=a.indexOf("executionId=");if(-1===c)throw new P("NoExecutionId");var u=a.slice(c+12),s=u.indexOf("&");return{succeeded:!1,executionId:-1===s?u:u.slice(0,s)}},A=function(t){var e,r;return null!=t&&null!==(e=t.Identifier)&&void 0!==e&&e[0]?{identifier:null==t||null===(r=t.Identifier)||void 0===r?void 0:r[0]}:null},E=function(t){var e,r,n,o,i;return null!=t&&null!==(e=t.Data)&&void 0!==e&&null!==(r=e[0])&&void 0!==r&&r.LiteralData?{data:null==t||null===(n=t.Data)||void 0===n||null===(o=n[0])||void 0===o||null===(i=o.LiteralData)||void 0===i?void 0:i[0]}:null},F=function(t){var e,r,n,o,i,a;return null!=t&&t.Reference?{href:null==t||null===(e=t.Reference)||void 0===e||null===(r=e[0])||void 0===r||null===(n=r.$)||void 0===n?void 0:n.href,mimeType:null==t||null===(o=t.Reference)||void 0===o||null===(i=o[0])||void 0===i||null===(a=i.$)||void 0===a?void 0:a.mimeType}:null},D=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(t){return[A].concat((r=e||[],function(t){if(Array.isArray(t))return f(t)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).map((function(e){return e(t)})).reduce((function(t,e){return e?d(d({},t),e):t}),{});var r}))}},R=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.Observable.defer((function(){return s().post((0,l.Jy)(t,{version:"1.0.0",REQUEST:"Execute"}),e,d({headers:{"Content-Type":"application/xml"}},r))}))},I=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.executeStatusUpdateInterval,u=void 0===o?2e3:o,s=r.outputsExtractor,l=function(t){return i.Observable.defer((function(){return new Promise((function(e,r){return(0,a.parseString)(t,{tagNameProcessors:[c.stripPrefix]},(function(t,n){return t?r(t):e(n)}))}))}))};return R(t,e,n).catch((function(){throw new P("ExecuteProcessXHRFailed")})).switchMap((function(t){return"application/xml"===t.headers["content-type"]||"text/xml"===t.headers["content-type"]?l(t.data).map((function(e){return{data:e,type:"application/xml",originalData:t.data}})):i.Observable.of({data:t.data,type:t.headers["content-type"]})})).flatMap((function(e){var r=e.data,n=e.type,o=e.originalData;if("application/xml"!==n)return i.Observable.of(r);if(null==r||!r.ExecuteResponse)return i.Observable.of(o);var a=j(r,s),c=a.succeeded,p=a.data,f=a.executionId;if(c)return i.Observable.of(p);var y=i.Observable.interval(u).take(1).flatMap((function(){return x(t,f).catch((function(){throw new P("GetExecutionStatusXHRFailed")})).flatMap((function(t){return l(t.data).flatMap((function(t){var e=j(t,s);return e.succeeded?i.Observable.of(e.data):y}))}))}));return y}))}},439156:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=r(102245),u=r(984596),s=r(378889).wfsToGmlVersion,l=function(t){return'service="WFS" version="'+t+'" '+("1.0.0"===t?'outputFormat="GML2" ':"")+'xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs '+"http://schemas.opengis.net/wfs/".concat(t,"1.0.0"===t?'/WFS-basic.xsd"':'/wfs.xsd"')},p=function(t){return'service="WFS" version="'+t+'" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd"'};t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.wfsVersion,r=void 0===e?"1.1.0":e,n=t.gmlVersion,o=t.filterNS,a=t.wfsNS,f=void 0===a?"wfs":a,y=n;!y&&r?y=s(r):y||(y="3.1.1");var d=function(t){return u(t).map((function(t){return"<".concat("2.0"===r?"fes":"ogc",":PropertyName>").concat(t,"</").concat("2.0"===r?"fes":"ogc",":PropertyName>")})).join("")};return i(i({propertyName:d},c({gmlVersion:y,wfsVersion:r,filterNS:o||"2.0"===r?"fes":"ogc"})),{},{getFeature:function(t,e){return"<".concat(f,":GetFeature ").concat(function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.viewParams,o=e.resultType,i=e.outputFormat,a=e.startIndex,c=e.maxFeatures;return(0===r.indexOf("1.")?l(r):p(r))+(o?' resultType="'.concat(o,'"'):"")+(i?' outputFormat="'.concat(i,'"'):"")+(a||0===a?' startIndex="'.concat(a,'"'):"")+(c||0===c?" ".concat((t=c,0===r.indexOf("2.")?'count="'.concat(t,'"'):'maxFeatures="'.concat(t,'"'))):"")+(n?' viewParams="'.concat(n,'"'):"")}(e),">").concat(Array.isArray(t)?t.join(""):t,"</").concat(f,":GetFeature>")},sortBy:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC";return"<".concat(f,":SortBy><").concat(f,":SortProperty>").concat(d(t),"<").concat(f,":SortOrder>").concat(e,"</").concat(f,":SortOrder></").concat(f,":SortProperty></").concat(f,":SortBy>")},query:function(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).srsName,o=void 0===n?"EPSG:4326":n;return"<".concat(f,":Query ").concat("2.0"===r?"typeNames":"typeName",'="').concat(t,'" ').concat("native"!==o?'srsName="'.concat(o,'"'):"",">")+"".concat(Array.isArray(e)?e.join(""):e)+"</".concat(f,":Query>")}})}}}]);