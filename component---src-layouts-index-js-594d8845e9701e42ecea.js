webpackJsonp([0x67ef26645b2a,60335399758886],{103:function(e,t){e.exports={data:{site:{siteMetadata:{title:"GitMe!",author:"haxzie",profile:"https://github.com/haxzie"}}},layoutContext:{}}},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(4),i=r(a),u=n(200),c=r(u),l=n(103),T=r(l);t.default=function(e){return i.default.createElement(c.default,o({},e,T.default))},e.exports=t.default},282:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,T;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var s=u(e),f=u(t)}catch(e){return!1}if(s.length!=f.length)return!1;for(s.sort(),f.sort(),a=s.length-1;a>=0;a--)if(s[a]!=f[a])return!1;for(a=s.length-1;a>=0;a--)if(T=s[a],!l(e[T],t[T],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(284),c=n(283),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},283:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},284:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},291:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},392:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),T=n(4),s=r(T),f=n(7),E=r(f),d=n(411),p=r(d),A=n(282),M=r(A),y=n(393),S=n(181),h=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,M.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case S.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case S.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case S.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case S.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case S.TAG_NAMES.LINK:case S.TAG_NAMES.META:case S.TAG_NAMES.NOSCRIPT:case S.TAG_NAMES.SCRIPT:case S.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:E.default.object,bodyAttributes:E.default.object,children:E.default.oneOfType([E.default.arrayOf(E.default.node),E.default.node]),defaultTitle:E.default.string,defer:E.default.bool,encodeSpecialCharacters:E.default.bool,htmlAttributes:E.default.object,link:E.default.arrayOf(E.default.object),meta:E.default.arrayOf(E.default.object),noscript:E.default.arrayOf(E.default.object),onChangeClientState:E.default.func,script:E.default.arrayOf(E.default.object),style:E.default.arrayOf(E.default.object),title:E.default.string,titleAttributes:E.default.object,titleTemplate:E.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},m=function(){return null},N=(0,p.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(m),b=h(N);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},181:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},393:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(4),u=r(i),c=n(5),l=r(c),T=n(181),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=M(e,T.TAG_NAMES.TITLE),n=M(e,T.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=M(e,T.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return M(e,T.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},p=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[T.TAG_NAMES.BASE]}).map(function(e){return e[T.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},A=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===T.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===T.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==T.TAG_PROPERTIES.INNER_HTML&&u!==T.TAG_PROPERTIES.CSS_TEXT&&u!==T.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},M=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:p([T.TAG_PROPERTIES.HREF],e),bodyAttributes:d(T.ATTRIBUTE_NAMES.BODY,e),defer:M(e,T.HELMET_PROPS.DEFER),encode:M(e,T.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(T.ATTRIBUTE_NAMES.HTML,e),linkTags:A(T.TAG_NAMES.LINK,[T.TAG_PROPERTIES.REL,T.TAG_PROPERTIES.HREF],e),metaTags:A(T.TAG_NAMES.META,[T.TAG_PROPERTIES.NAME,T.TAG_PROPERTIES.CHARSET,T.TAG_PROPERTIES.HTTPEQUIV,T.TAG_PROPERTIES.PROPERTY,T.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(T.TAG_NAMES.NOSCRIPT,[T.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:A(T.TAG_NAMES.SCRIPT,[T.TAG_PROPERTIES.SRC,T.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(T.TAG_NAMES.STYLE,[T.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(T.ATTRIBUTE_NAMES.TITLE,e)}},S=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){S(t)},0)}}(),h=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S:e.requestAnimationFrame||S,N="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,g=function(e){_&&N(_),e.defer?_=m(function(){I(e,function(){_=null})}):(I(e),_=null)},I=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,E=e.titleAttributes;L(T.TAG_NAMES.BODY,r),L(T.TAG_NAMES.HTML,o),v(f,E);var d={baseTag:P(T.TAG_NAMES.BASE,n),linkTags:P(T.TAG_NAMES.LINK,a),metaTags:P(T.TAG_NAMES.META,i),noscriptTags:P(T.TAG_NAMES.NOSCRIPT,u),scriptTags:P(T.TAG_NAMES.SCRIPT,l),styleTags:P(T.TAG_NAMES.STYLE,s)},p={},A={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(A[e]=d[e].oldTags)}),t&&t(),c(e,p,A)},O=function(e){return Array.isArray(e)?e.join(""):e},v=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),L(T.TAG_NAMES.TITLE,t)},L=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(T.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=a.indexOf(c);s!==-1&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(T.HELMET_ATTRIBUTE):n.getAttribute(T.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(T.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(T.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+T.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===T.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(T.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},R=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},C=function(e,t,n,r){var o=R(n),a=O(t);return o?"<"+e+" "+T.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+T.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"},w=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===T.TAG_PROPERTIES.INNER_HTML||e===T.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=T.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+T.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[T.REACT_TAG_MAP[n]||n]=e[n],t},t)},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[T.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,o=(r={key:t},r[T.HELMET_ATTRIBUTE]=!0,r),a=x(n,o);return[u.default.createElement(T.TAG_NAMES.TITLE,a,t)]},G=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[T.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=T.REACT_TAG_MAP[e]||e;if(n===T.TAG_PROPERTIES.INNER_HTML||n===T.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case T.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return C(e,t.title,t.titleAttributes,n)}};case T.ATTRIBUTE_NAMES.BODY:case T.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return w(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,E=e.titleAttributes;return{base:H(T.TAG_NAMES.BASE,t,r),bodyAttributes:H(T.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(T.ATTRIBUTE_NAMES.HTML,o,r),link:H(T.TAG_NAMES.LINK,a,r),meta:H(T.TAG_NAMES.META,i,r),noscript:H(T.TAG_NAMES.NOSCRIPT,u,r),script:H(T.TAG_NAMES.SCRIPT,c,r),style:H(T.TAG_NAMES.STYLE,l,r),title:H(T.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}};t.convertReactPropstoHtmlAttributes=D,t.handleClientStateChange=g,t.mapStateOnServer=k,t.reducePropsToState=y,t.requestAnimationFrame=m,t.warn=b}).call(t,function(){return this}())},411:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(4),c=r(u),l=n(291),T=r(l),s=n(428),f=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function s(){d=e(E.map(function(e){return e.props})),p.canUseDOM?t(d):n&&(d=n(d))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var E=[],d=void 0,p=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,E=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){E.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=E.indexOf(this);E.splice(e,1),s()},t.prototype.render=function(){return c.default.createElement(l,this.props)},t}(u.Component);return p.displayName="SideEffect("+r(l)+")",p.canUseDOM=T.default.canUseDOM,p}}},428:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var T=e[l],s=t[l];if(o=n?n.call(r,T,s,l):void 0,o===!1||void 0===o&&T!==s)return!1}return!0}},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(4),a=r(o),i=n(34),u=r(i),c=function(e){var t=e.author,n=e.profile;return a.default.createElement("footer",null,"Made with ",a.default.createElement("i",{className:"em em-heart",style:{width:"15px",height:"15px"}}),a.default.createElement(u.default,{to:n}," @"+t))};t.default=c,e.exports=t.default},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(4),a=r(o),i=n(34),u=(r(i),n(429)),c=r(u),l=function(e){var t=e.siteTitle;return a.default.createElement("div",null,a.default.createElement("div",{className:"background-hero"}),a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"nav"},a.default.createElement("div",{className:"brand-text"},t),a.default.createElement("div",{className:"github-logo"},a.default.createElement("a",{target:"_blank",href:"https://github.com/haxzie/GitMe"},a.default.createElement("img",{alt:"github-logo",src:c.default}))))))};t.default=l,e.exports=t.default},429:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04OTYgMTI4cTIwOSAwIDM4NS41IDEwM3QyNzkuNSAyNzkuNSAxMDMgMzg1LjVxMCAyNTEtMTQ2LjUgNDUxLjV0LTM3OC41IDI3Ny41cS0yNyA1LTQwLTd0LTEzLTMwcTAtMyAuNS03Ni41dC41LTEzNC41cTAtOTctNTItMTQyIDU3LTYgMTAyLjUtMTh0OTQtMzkgODEtNjYuNSA1My0xMDUgMjAuNS0xNTAuNXEwLTExOS03OS0yMDYgMzctOTEtOC0yMDQtMjgtOS04MSAxMXQtOTIgNDRsLTM4IDI0cS05My0yNi0xOTItMjZ0LTE5MiAyNnEtMTYtMTEtNDIuNS0yN3QtODMuNS0zOC41LTg1LTEzLjVxLTQ1IDExMy04IDIwNC03OSA4Ny03OSAyMDYgMCA4NSAyMC41IDE1MHQ1Mi41IDEwNSA4MC41IDY3IDk0IDM5IDEwMi41IDE4cS0zOSAzNi00OSAxMDMtMjEgMTAtNDUgMTV0LTU3IDUtNjUuNS0yMS41LTU1LjUtNjIuNXEtMTktMzItNDguNS01MnQtNDkuNS0yNGwtMjAtM3EtMjEgMC0yOSA0LjV0LTUgMTEuNSA5IDE0IDEzIDEybDcgNXEyMiAxMCA0My41IDM4dDMxLjUgNTFsMTAgMjNxMTMgMzggNDQgNjEuNXQ2NyAzMCA2OS41IDcgNTUuNS0zLjVsMjMtNHEwIDM4IC41IDg4LjV0LjUgNTQuNXEwIDE4LTEzIDMwdC00MCA3cS0yMzItNzctMzc4LjUtMjc3LjV0LTE0Ni41LTQ1MS41cTAtMjA5IDEwMy0zODUuNXQyNzkuNS0yNzkuNSAzODUuNS0xMDN6bS00NzcgMTEwM3EzLTctNy0xMi0xMC0zLTEzIDItMyA3IDcgMTIgOSA2IDEzLTJ6bTMxIDM0cTctNS0yLTE2LTEwLTktMTYtMy03IDUgMiAxNiAxMCAxMCAxNiAzem0zMCA0NXE5LTcgMC0xOS04LTEzLTE3LTYtOSA1IDAgMTh0MTcgN3ptNDIgNDJxOC04LTQtMTktMTItMTItMjAtMy05IDggNCAxOSAxMiAxMiAyMCAzem01NyAyNXEzLTExLTEzLTE2LTE1LTQtMTkgN3QxMyAxNXExNSA2IDE5LTZ6bTYzIDVxMC0xMy0xNy0xMS0xNiAwLTE2IDExIDAgMTMgMTcgMTEgMTYgMCAxNi0xMXptNTgtMTBxLTItMTEtMTgtOS0xNiAzLTE0IDE1dDE4IDggMTQtMTR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},292:function(e,t){},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(4),a=r(o),i=n(7),u=r(i),c=n(392),l=r(c),T=n(34),s=r(T),f=n(198),E=r(f),d=n(197),p=r(d);n(292);var A=function(e){var t=e.children,n=e.data;return a.default.createElement("div",null,a.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Make your first GitHub Pull Request"},{name:"keywords",content:"GitHub, PullRequest, First OpenSource, contribution"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}),a.default.createElement(E.default,{siteTitle:n.site.siteMetadata.title}),a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"card"},a.default.createElement("div",{className:"tab-holder"},a.default.createElement("ul",{className:"tabs"},a.default.createElement("li",null,a.default.createElement(s.default,{to:"/",exact:!0,activeClassName:"active"},"Instructions")),a.default.createElement("li",null,a.default.createElement(s.default,{to:"/submissions/",exact:!0,activeClassName:"active"},"Submissions")))),a.default.createElement("div",{className:"content"},t()))),a.default.createElement(p.default,{author:n.site.siteMetadata.author,profile:n.site.siteMetadata.author}))};A.propTypes={children:u.default.func},t.default=A;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-594d8845e9701e42ecea.js.map