!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="./",e(0)}({0:function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return t+="",1===t.length?"0"+t:t}function s(){var t=document.querySelectorAll(".tools-section");t.forEach(function(t){t.scrollTop=0})}function a(){function t(t){t=(t||"").toLowerCase();var n="title";0===t.indexOf("#")&&(t=t.substr(1,t.length),n="tag");var i=e.items;i.forEach(function(e){var i=!1;e.title.toLowerCase().indexOf(t)>-1&&(i=!0);var r=!1;e.tags.forEach(function(e){e.name.toLowerCase().indexOf(t)>-1&&(r=!0)}),"title"===n&&i||"tag"===n&&r?e.isShow=!0:e.isShow=!1}),e.$set("items",i)}var e=new d.default({el:"#container",data:{isCtnShow:!1,isShow:0,innerArchive:!1,friends:!1,aboutme:!1,items:[],jsonFail:!1,showTags:!1,search:""},methods:{stop:function(t){t.stopPropagation()},choseTag:function(t,n){e.$set("search","#"+(n?n:t.target.innerHTML))},clearChose:function(t){e.$set("search","")},toggleTag:function(t){e.$set("showTags",!e.showTags),window.localStorage&&window.localStorage.setItem(g,e.showTags)},openSlider:function(t,n){t.stopPropagation(),n||(n="innerArchive"),e.$set("innerArchive",!1),e.$set("friends",!1),e.$set("aboutme",!1),e.$set(n,!0),e.$set("isShow",!0),e.$set("isCtnShow",!0),s()}},filters:{isFalse:function(t){return t===!1},isEmptyStr:function(t){return""===t},isNotEmptyStr:function(t){return""!==t},urlformat:function(t){return"/"+t},tagformat:function(t){return"#"+t},dateformat:function(t){var e=new Date(t);return e.getFullYear()+"-"+o(e.getMonth()+1)+"-"+o(e.getDate())}},ready:function(){}});e.$watch("search",function(e,n){window.localStorage&&window.localStorage.setItem(w,e),t(e)}),window.fetch(window.yiliaConfig.root+"content.json",{method:"get"}).then(function(t){return t.json()}).then(function(n){n.forEach(function(t){t.isShow=!0}),e.$set("items",n);var i=window.localStorage&&window.localStorage.getItem(w)||"";e.$set("search",i),""!==i&&t(i)}).catch(function(t){e.$set("jsonFail",!0)}),document.querySelector("#container").onclick=function(t){e.isShow&&(e.$set("isShow",!1),setTimeout(function(){e.$set("isCtnShow",!1)},300))};var n=!1;window.localStorage&&(n=window.localStorage.getItem(g));var i="false";i=null===n?window.yiliaConfig&&window.yiliaConfig.showTags?"true":"false":window.localStorage&&window.localStorage.getItem(g)||"false",e.$set("showTags",JSON.parse(i));for(var r=document.querySelectorAll(".tagcloud a.js-tag"),a=function(){var t=r[u];t.setAttribute("href","javascript:void(0)"),t.onclick=function(n){return n.stopPropagation(),e.$set("innerArchive",!0),e.$set("friends",!1),e.$set("aboutme",!1),e.$set("isShow",!0),e.$set("isCtnShow",!0),e.$set("search","#"+t.innerHTML),s(),!1}},u=0,c=r.length;u<c;u++)a()}var u=n(119),c=r(u),h=n(60),l=r(h),f=n(118),d=r(f),p=n(307),v=i(p),m=n(311),y=i(m);window.Promise=window.Promise||v.Promise,window.fetch=window.fetch||y;var g="yilia-tag",w="yilia-search",_=l.default.versions.mobile&&window.screen.width<800;a(),_||c.default.init(),t.exports={}},60:function(t,e){"use strict";var n={versions:function(){var t=window.navigator.userAgent;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&t.indexOf("KHTML")==-1,mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1||t.indexOf("Mac")>-1,iPad:t.indexOf("iPad")>-1,webApp:t.indexOf("Safari")==-1,weixin:t.indexOf("MicroMessenger")==-1}}()};t.exports=n},118:function(t,e,n){var i,r,o;(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * Q.js v1.0.12
	 * Inspired from vue.js
	 * (c) 2016 Daniel Yang
	 * Released under the MIT License.
	 */
!function(s,a){"object"===n(e)&&"object"===n(t)?t.exports=a():(r=[],i=a,o="function"==typeof i?i.apply(e,r):i,!(void 0!==o&&(t.exports=o)))}(void 0,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i=n(1),r=n(3),o=n(4);r.extend(i,r),t.exports=o(i)},function(t,e,i){function r(t,e,n){for(var i,r,o=0,s=u.length;o<s;o++)if(i="q-"+u[o],r=t.getAttribute(i))return e.push({name:i,value:r}),t.removeAttribute(i),!0}function o(t,e,n){n=n||{};var i,s,a,u,c,h;for(i=0;u=t[i++];){if(1===u.nodeType){if(c=u.attributes,h=[],!r(u,h,n))for(s=0,a=c.length;s<a;s++)0===c[s].name.indexOf("q-")&&h.push({name:c[s].name,value:c[s].value});h.length>0&&e(u,h,n)}u.childNodes.length&&!n.stop&&o(l.call(u.childNodes,0),e,n),n.stop=!1}}var s=function(){},a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||setTimeout,u=(new(i(2))(1e3),["vm","repeat","if"]),c=[].slice,h=document.getElementsByTagName("html")[0],l=function(){try{return c.call(document.body.childNodes),c}catch(t){return function(t){t=t||0;for(var e=[],n=this.length;t<n;t++)e.push(this[t]);return e}}}();h&&(h=h.getAttribute("alpaca")),t.exports={slice:l,noop:s,addClass:function(t,e){if(t.classList)t.classList.add(e);else{var n=" "+(t.className||"")+" ";n.indexOf(" "+e+" ")<0&&(t.className=(n+e).trim())}},removeClass:function(t,e){if(t.classList)t.classList.remove(e);else{for(var n=" "+(t.className||"")+" ",i=" "+e+" ";n.indexOf(i)>=0;)n=n.replace(i," ");t.className=n.trim()}},noexist:function(t,e){throw this.warn(t),new Error("Filter "+e+" hasn't implemented.")},warn:function(){return window.console&&console.error?function(){console.error.apply(console,arguments)}:s}(),isObject:function(t){return"object"===("undefined"==typeof t?"undefined":n(t))},nextTick:function(t,e){return e?a(function(){t.call(e)},0):a(t,0)},get:function(t,e){var n=[];return t&&n.push(t),e&&n.push(e),n.join(".").replace(/^(.+\.)?\$top\./,"")},walk:o,alpaca:!!h}},function(t,e){function n(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap={}}var i=n.prototype;i.put=function(t,e){var n={key:t,value:e};return this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit?this.shift():void this.size++},i.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0),t},i.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)},t.exports=n},function(t,e){function n(t,e){return t!==e&&t.contains(e)}function i(t,e,n){var i=t[u]=t[u]||++c,r=h[i]=h[i]||{};return void 0===n?r[e]:r[e]=n}function r(t,e,n){e.split(" ").forEach(function(e){t.addEventListener(e,n,!1)})}var o="__cbs__",s={mouseover:!0,change:!0,input:!0,porpertychange:!0},a=function(t,e){e=[].splice.call(arguments,1);for(var n,i,r=0,o=e.length;r<o;r++){n=e[r];for(i in n)t[i]=n[i]}return t},u="QDataUid",c=0,h={};t.exports={find:function(t){return this.slice.call(document.querySelectorAll(t),0)},contains:n,data:i,cleanData:function(t){t.forEach(function(t){var e=t[u];e&&e in h&&delete h[e]})},add:function(t,e,a,u){if(!u||s[e])r(t,e,a);else{var c=u.$el,h=i(c,o);h||(h=[],i(c,o,h),r(c,e,function(t){var e=t.target;h.forEach(function(i){var r=i.fn,o=i.el;n(o,e)&&r.call(o,t)})})),h.push({el:t,fn:a})}},remove:function(t,e,n){t.removeEventListener(e,n,!1)},clone:function(t){return t.cloneNode(!0)},extend:function(t){return 1===arguments.length?a(this,t):a.apply(this,arguments)}}},function(t,e,n){t.exports=function(t){function e(e){return t.contains(u.documentElement,e)}function i(t){this._init(t)}var r=n(5),o=n(6),s=n(7).mergeOptions,a=n(8),u=document;return i._=t,i.options={directives:n(9),filters:{}},i.get=function(e){var n=t.find(e)[0];return n?t.data(n,"QI"):new this({el:e})},i.all=function(e){var n=this;return t.find(e.el).map(function(i){return new n(t.extend(e,{el:i}))})},t.extend(i,a),t.extend(i.prototype,{_init:function(e){e=e||{},this.$el=e.el&&"string"==typeof e.el?t.find(e.el)[0]:e.el,this.$$={},this.$parent=e._parent,e=this.$options=s(this.constructor.options,e,this),this._isCompiled=!1,this._isAttached=!1,this._isReady=!1,this._events={},this._watchers={},this._children=[],this.$={},r.call(this,e),this._initScope(),this._callHook("created"),this.$el&&(t.data(this.$el,"QI",this),this.$mount(this.$el))},$on:function(t,e){return(this._events[t]||(this._events[t]=[])).push(e),this},$once:function(t,e){function n(){i.$off(t,n),e.apply(this,arguments)}var i=this;return n.fn=e,this.$on(t,n),this},$off:function(t,e){var n,i,r;if(!arguments.length)return this._events={},this;if(n=this._events[t],!n)return this;if(1===arguments.length)return this._events[t]=null,this;for(r=n.length;r--;)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return this},$watch:function(t,e,n,i){var r=n?t+"**deep**":t;return(this._watchers[r]||(this._watchers[r]=[])).push(e),i&&e(this.data(t)),this},$emit:function(e){var n=t.slice.call(arguments,1);return o.emit.call(this,e,t.slice.call(n,0)),e.indexOf("data:")||(e=e.substring(5),o.callChange.call(this,e,t.slice.call(n,0))),e.indexOf("deep:")||(e=e.substring(5),o.callDeep.call(this,e,t.slice.call(n,0)),n.unshift(e),o.emit.call(this,"datachange",n)),this},_initScope:function(){this._initMethods()},_initMethods:function(){var t,e=this.$options.methods;if(e)for(t in e)this[t]=e[t].bind(this)},$mount:function(n){return this._isCompiled?t.warn("$mount() should be called only once"):(this._compile(n),this._isCompiled=!0,this._callHook("compiled"),void(e(this.$el)?(this._callHook("attached"),this._ready()):this.$once("hook:attached",this._ready)))},_ready:function(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")},_compile:function(t){this.transclue(t,this.$options)},transclue:function(t,e){this._templateBind(t,e)},_templateBind:n(11),_callHook:function(t){var e=this.$options[t];if(e)for(var n=0,i=e.length;n<i;n++)e[n].call(this);this.$emit("hook:"+t)},_makeReadFilters:function(e,n){if(!e.length)return[];var i=this.$options.filters,r=this;return e.map(function(e){e=t.slice.call(e,0);var o=e.shift(),s=i[o]?i[o].read||i[o]:t.noexist(r,o);return function(t,i){var o=[t].concat(e||[]),a=o.indexOf("$this");return o.push(i),~a&&(o[a]=n),e?s.apply(r,o):s.call(r,t,i)}})},applyFilters:function(t,e,n){if(!e||!e.length)return t;for(var i=0,r=e.length;i<r;i++)t=e[i].call(this,t,n);return t}}),t.extend(i.prototype,r.prototype),i}},function(t,e,i){function r(t,e,i,r){var s=t._top,c=o(i),h={data:i,up:t,top:s,namespace:e+"",trigger:!c&&r},l=s.data?s.data(t.$namespace(e)):void 0;"object"===("undefined"==typeof i?"undefined":n(i))&&null!==i?(t[e]=c?new u(h):new a(h),r&&t.$change(t.$namespace(e),t[e],l)):l!==i&&(t[e]=i,r&&t.$change(t.$namespace(e),i,l)),~t._keys.indexOf(e)||t._keys.push(e)}function o(t){return Array.isArray(t)||t instanceof u}function s(t){return t.filter(function(t){return"number"==typeof t}).length}function a(t){var e=t.data,n=Object.keys(t.data||{}).filter(function(t){return 0!==t.indexOf("_")}).map(function(t){return+t+""===t?+t:t}),i=this;h.extend(this,e),this._keys=n,this._up=t.up,this._top=t.top||this,this._namespace=t.namespace||"",n.forEach(function(n){r(i,n,e[n],t.trigger)}),o(e)&&(this.length=s(n))}function u(t){a.call(this,t)}function c(t){a.call(this,t)}var h=i(1);h.extend(a.prototype,{$namespace:function(t){for(var e=[],n=this;void 0!=n;n=n._up)n._namespace&&e.unshift(n._namespace);return t&&e.push(t),e.join(".")},$key:function(){var t=this._namespace;return+t+""===t?+t:t},$up:function(t){t=t||1;for(var e=this;t--;)e=e._up;return e},$set:function(t,e){if("object"===("undefined"==typeof t?"undefined":n(t))){var i=this;Object.keys(t).filter(function(t){return 0!==t.indexOf("_")}).forEach(function(e){r(i,e,t[e],!0)}),this.$change(this.$namespace(t),this,void 0,1)}else{var o=this[t];r(this,t,e,!0),this.$change(this.$namespace(t),this[t],o,void 0,-1)}return this},$get:function(){var t,e=this._keys,n=this;return t=this instanceof a?{}:[],e.forEach(function(e){t[e]=null==n[e]?n[e]:n[e].$get?n[e].$get():n[e]}),t},$change:function(t,e,n,i,r){r=r||0;var o=this._top;o.$emit&&(~r&&this._top.$emit("data:"+t,e,n,i),r&&this._top.$emit("deep:"+t,e,n,i))}}),h.extend(u.prototype,a.prototype,{push:function(t){t=h.slice.call(arguments,0);for(var e=[],n=0,i=t.length;n<i;n++)r(this,this.length,t[n]),this._keys.push(this.length),e.push(this[this.length]),this.length++;return this.$change(this.$namespace(),this,null,{method:"push",res:e,args:t},1),this},pop:function(){var t=this[--this.length];return delete this[this.length],this._keys.pop(),this.$change(this.$namespace(),this,null,void 0,1),t},unshift:function(t){this._keys.push(this.length),this.length++;for(var e=this.length;e--;)this[e]=this[e-1],"object"===n(this[e])&&(this[e]._namespace=e+"");return r(this,0,t),this.$change(this.$namespace(),this,null,void 0,1),this},shift:function(){this.length--;for(var t=this[0],e=0,i=this.length;e<i;e++)this[e]=this[e+1],"object"===n(this[e])&&(this[e]._namespace=e+"");return this._keys.pop(),delete this[this.length],this.$change(this.$namespace(),this,null,void 0,1),t},touch:function(t){this.$change(this.$namespace(t),this,null,void 0,1)},indexOf:function(t){if(t._up===this){var e=+t._namespace;if(this[e]===t)return e}else if("object"!==("undefined"==typeof t?"undefined":n(t)))for(var e=0,i=this.length;e<i;e++)if(this[e]===t)return e;return-1},splice:function(t,e){for(var i={method:"splice",args:[t,e]},r=0,o=e+t,s=this.length-e;t<s;t++,r++)this[t]=this[o+r],"object"===n(this[t])&&(this[t]._namespace=t+"");for(;t<this.length;t++)this[t]=null,delete this[t];this.length-=e,this._keys.splice(this.length,e),this.$change(this.$namespace(),this,null,i,1)},forEach:function(t){for(var e=0,n=this.length;e<n;e++)t(this[e],e)},filter:function(t){var e=[];return this.forEach(function(n,i){t(n)&&e.push(n)}),e}}),h.extend(c,{Data:a,DataArray:u}),h.extend(c.prototype,a.prototype,{data:function t(e,n){if(void 0===e)return this;var i,o,s=0,t=this;if(~e.indexOf(".")){var a=e.split(".");for(i=a.length;s<i-1;s++)if(e=a[s],+e+""===e&&(e=+e),e in t&&null!=t[e])t=t[e];else{if(void 0===n)return;o=a[s+1],+o+""==o?r(t,e,[],!0):r(t,e,{},!0)}}return i&&(e=a[s]),void 0===n?t&&e?t[e]:t:(t.$set(e,n),t[e])}}),t.exports=c},function(t,e,n){function i(t,e,n){n=n||this;var r=this._events[t];if(r){var o=0;r=r.length>1?s.slice.call(r,0):r;for(var a=r.length;o<a;o++)r[o].apply(n,e)}t.indexOf("data:")&&t.indexOf("hook:")&&t.indexOf("deep:")&&this.$parent&&i.call(this.$parent,t,e,n)}function r(t,e){var n={_events:this._watchers};i.call(n,t,e),i.call(n,t+"**deep**",e)}function o(t,e){var n,r=t.split("."),o={_events:this._watchers};for(r.pop();r.length>0;r.pop())t=r.join("."),n=t+"**deep**",i.call(o,n,[this.data(t)]);i.call(o,"**deep**",[this])}var s=(n(5),n(1));t.exports={emit:i,callChange:r,callDeep:o}},function(t,e,n){function i(t,e,n){function i(i){var r=o[i]||s;a[i]=r(t[i],e[i],n,i)}var r,a={};for(r in t)i(r);for(r in e)t.hasOwnProperty(r)||i(r);return a}var r=n(1),o={};o.created=o.ready=o.attached=o.detached=o.compiled=o.beforeDestroy=o.destroyed=o.paramAttributes=function(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t},o.data=o.filters=o.methods=o.directives=function(t,e){return e?t?r.extend({},t,e):e:t};var s=function(t,e){return void 0===e?t:e};t.exports={strats:o,mergeOptions:i}},function(t,e,n){function i(t,e){if(u[t])return!1;var n=u[t]=this.extend(e||{});return n}function r(t,e){return u[t]||this}function o(t){function e(){}return e.prototype=t,new e}function s(t){t=t||{};var e=this,n=a(t.name||"QComponent");return n.prototype=o(e.prototype),n.prototype.constructor=n,n.options=c(e.options,t),n.super=e,["extend","get","all","require","define"].forEach(function(t){n[t]=e[t]}),n}function a(t){return new Function("return function "+t+" (options) { this._init(options) }")()}var u={},c=n(7).mergeOptions;t.exports={define:i,require:r,extend:s}},function(t,e,i){var r=i(1);i(7);t.exports={cloak:{bind:function(){var t=this.vm,e=this.el;t.$once("hook:ready",function(){t.$once("datachange",function(){e.removeAttribute("q-cloak")})})}},show:function(t){var e=this.el;if(t){e.style.display="";var n=e.currentStyle?e.currentStyle.display:getComputedStyle(e,null).display;"none"===n&&(e.style.display="block")}else e.style.display="none"},class:function(t){var e=this.el,n=this.arg;n?t?r.addClass(e,n):r.removeClass(e,n):(this.lastVal&&r.removeClass(e,this.lastVal),t&&(r.addClass(e,t),this.lastVal=t))},value:function(t){var e=this.el;"checkbox"===e.type?e.checked=t:e.value=t},attr:function(t){if(void 0!==t){var e=this.arg,i=this.el;if("style"===e)if("object"===("undefined"==typeof t?"undefined":n(t)))for(var r in t)t.hasOwnProperty(r)&&(i.style[r]=t[r]);else i.setAttribute(e,t);else e in i?i[e]=t:i.setAttribute(e,t)}},text:function t(e){var t;void 0!==e&&(t="string"==typeof this.el.textContent?"textContent":"innerText")&&(this.el[t]=null==e?"":e.toString())},html:function(t){this.el.innerHTML=t&&t.toString()||""},on:{bind:function(){var t=this,e=this.target,n=this.param,i=this.filters,o=this.vm,s=o.applyFilters(this.vm[e],i),a=n&&~n.indexOf("this")&&t.data();r.add(this.el,this.arg,function(i){if(!s||"function"!=typeof s)return r.warn("You need implement the "+e+" method.");var u=[];n?n.forEach(function(e){"e"===e?u.push(i):"this"===e?u.push(a):"true"===e?u.push(!0):"false"===e?u.push(!1):+e+""===e?u.push(+e):e.match(/^(['"]).*\1$/)?u.push(e.slice(1,-1)):u.push(t.data(e))}):u.push(i),s.apply(o,u)})}},model:{bind:function(){var t=((this.namespace?this.namespace+".":"")+this.target).split("."),e=t.pop(),n=t.join("."),i=this.el,o=this.vm,s=o.data(n),a=!1;r.add(i,"input propertychange change keypress keyup",function(t){a||s.$set(e,i.value)}),r.add(i,"compositionstart",function(t){a=!0}),r.add(i,"compositionend",function(t){a=!1})},update:function(t){this.el.value!==t&&(this.el.value=t)}},vm:{bind:function(){this.setting.stop=!0;var t,e,n=this.target,i=this.vm,r=this.el,o=r.getAttribute("q-ref")||!1,s=i.constructor.require(n),a=s.options.data;t={el:r,data:a,_parent:i},e=new s(t),i._children.push(e),o&&!function(){var t=i.$[o];t?t.length?t.push(e):i.$[o]=[t,e]:i.$[o]=e}()}},if:{bind:function(){function t(t){!s&&a&&t&&(s=!0,d._templateBind(e,{data:f,namespace:c,immediate:!0}))}if(this.el.parentNode){var e=this.el,i=e.parentNode,o=document.createComment("q-if"),s=!1,a=!0,u=this.target,c=this.namespace,h=r.get(c,u),l=this.filters,f=this.data(),d=this.vm;this.setting.stop=!0,d.$watch(h,function(n,r){n=d.applyFilters(n,l,r),t(n),n!==a&&(n===!0?(i.replaceChild(e,o),a=n):n===!1&&(i.replaceChild(o,e),a=n),t(n))},"object"===n(this.data(u)),!0)}}},el:{bind:function(){this.vm.$$[this.target]=this.el}},repeat:i(10)}},function(t,e,n){function i(t,e,n,i){var r,o,s,a,u=e.length;Object.keys(t).forEach(function(c){~c.indexOf(e)&&(r=c.substring(u+1),o=r.split("."),o.length&&(s=+o.shift(),(s-=i)>=n&&(o.unshift(s),o.unshift(e),a=o.join("."),t[a]=t[c],delete t[c])))})}var r=n(1),o={default:{clean:function(t,e){e.length&&(e.forEach(function(e){e.parentNode===t&&t.removeChild(e)}),r.cleanData(e),e.length=0)},insert:function(t,e,n){t.insertBefore(e,n)}},push:{insert:function(t,e,n){t.insertBefore(e,n)},dp:function(t,e){return e.res}},splice:{clean:function(t,e,n,r){var o=n[0],s=n[1],a=n[2].$namespace(),u=e.splice(o,s);return u.forEach(function(e){t.removeChild(e)}),n.done||(i(r,a,o,s),n.done=!0),!0},dp:function(t,e){return e.args.push(t),e.args}}};e.bind=function(){var t,e,n,i,s,a,u,c=this.el,h=this.setting,l=c.parentNode;l&&!h.stop&&(h.stop=!0,t=this.target,e=this.namespace,n=r.get(e,t),i=this.filters,s=[],a=document.createComment("q-repeat"),u=this.vm,l.replaceChild(a,c),u.$watch(n,function(t,e,h){if(t=u.applyFilters(t,i),null!=t){var f=!i.length&&h?h.method:"default",d=(o[f]||{}).dp,p=(o[f]||{}).clean,v=(o[f]||{}).insert;if(d&&(t=d(t,h)),!p||p(l,s,t,u._watchers,n)!==!0){var m,y=document.createDocumentFragment();t.forEach(function(t,e){m=r.clone(c),u._templateBind(m,{data:t,namespace:t.$namespace(),immediate:!0}),s.push(m),y.appendChild(m)}),v&&v(l,y,a),u.$emit("repeat-render")}}},!1,!0))}},function(t,e,i){var r=i(12),o=i(1);t.exports=function(t,e){e=e||{};var i=this,s=i.$options.directives,a=(e.index,e.data||i,e.namespace);o.walk([t],function(t,u,c){u.forEach(function(u){var h=u.name.substring(2),l=s[h],f=r(u.value);l&&f.forEach(function(r){var s=i._makeReadFilters(r.filters,i.data(a)),u=r.target,h=o.get(a,u),f=o.isObject(l)?l.update:l,d=o.extend({el:t,vm:i,data:function(t){return i.data(o.get(a,t))},namespace:a,setting:c},r,{filters:s}),p=d.data(u);f&&i.$watch(h,function(t,e){t=i.applyFilters(t,s,e),f.call(d,t,e)},"object"===("undefined"==typeof p?"undefined":n(p)),!o.alpaca&&("boolean"==typeof e.immediate?e.immediate:void 0!==p)),o.isObject(l)&&l.bind&&l.bind.call(d)})})})}},function(t,e,n){function i(t){var e=t,n=o.get(e);if(n)return n;for(var i,u,c,h=[],l=s.length,f=!1,d={filter:!1,token:{filters:[]}};t.length;){for(u=0;u<l;u++)if(i=s[u][0].exec(t)){var f=!0,c=s[u][1];c&&c(i,d,h),t=t.replace(s[u][0],""),d.filter&&(i=a.exec(t),r(i[0].trim(),d.token),t=t.replace(a,""),d.filter=!1);break}if(!f)throw new Error("Syntax error at: "+t);f=!1}return h.push(d.token),o.put(e,h),h}function r(t,e){for(var n,i=u.length,r=!1;t.length;){for(n=0;n<i;n++){var o=u[n][0].exec(t);if(o){var r=!0,s=u[n][1];s&&s(o,e.filters),t=t.replace(u[n][0],"");break}}if(!r)throw new Error("Syntax error at: "+t);r=!1}}var o=new(n(2))(1e3),s=[[/^ +/],[/^([\w\-]+):/,function(t,e){e.token.arg=t[1]}],[/^([\w]+)\((.+?)\)/,function(t,e){e.token.target=t[1],e.token.param=t[2].split(/ *, */)}],[/^([\w\-\.\$]+)/,function(t,e){e.token.target=t[1]}],[/^(?=\|)/,function(t,e){e.filter=!0}],[/^,/,function(t,e,n){n.push(e.token),e.token={filters:[]}}]],a=/^(.+?)(?=,|$)/,u=[[/^ +/],[/^\| *([\w\-\!]+)/,function(t,e){e.push([t[1]])}],[/^(['"])(((\\['"])?([^\1])*)+)\1/,function(t,e){e[e.length-1].push(t[3])}],[/^([\w\-\$]+)/,function(t,e){e[e.length-1].push(t[1])}]];t.exports=i}])})}).call(e,n(316)(t))},119:function(t,e){"use strict";function n(){function t(){s=window.innerWidth,a=window.innerHeight,f={x:0,y:a},u=document.getElementById("container"),u.style.height=a+"px",c=document.getElementById("anm-canvas"),c.width=s,c.height=a,h=c.getContext("2d"),l=[];for(var t=0;t<.5*s;t++){var e=new o;l.push(e)}r()}function e(){window.addEventListener("scroll",n),window.addEventListener("resize",i)}function n(){d=!(document.body.scrollTop>a)}function i(){s=window.innerWidth,a=window.innerHeight,u.style.height=a+"px",c.width=s,c.height=a}function r(){if(d){h.clearRect(0,0,s,a);for(var t in l)l[t].draw()}requestAnimationFrame(r)}function o(){function t(){e.pos.x=Math.random()*s,e.pos.y=a+100*Math.random(),e.alpha=.1+.3*Math.random(),e.scale=.1+.3*Math.random(),e.velocity=Math.random()}var e=this;!function(){e.pos={},t()}(),this.draw=function(){e.alpha<=0&&t(),e.pos.y-=e.velocity,e.alpha-=5e-4,h.beginPath(),h.arc(e.pos.x,e.pos.y,10*e.scale,0,2*Math.PI,!1),h.fillStyle="rgba(255,255,255,"+e.alpha+")",h.fill()}}var s,a,u,c,h,l,f,d=!0;t(),e()}t.exports={init:n}},307:function(t,e,n){(function(e,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.1
	 */
!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function r(t){return"function"==typeof t}function o(t){Q=t}function s(t){X=t}function a(){return function(){return e.nextTick(f)}}function u(){return"undefined"!=typeof Y?function(){Y(f)}:l()}function c(){var t=0,e=new Z(f),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function h(){var t=new MessageChannel;return t.port1.onmessage=f,function(){return t.port2.postMessage(0)}}function l(){var t=setTimeout;return function(){return t(f,1)}}function f(){for(var t=0;t<W;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}W=0}function d(){try{var t=n(317);return Y=t.runOnLoop||t.runOnContext,u()}catch(t){return l()}}function p(t,e){var n=arguments,i=this,r=new this.constructor(m);void 0===r[rt]&&L(r);var o=i._state;return o?!function(){var t=n[o-1];X(function(){return P(o,r,t,i._result)})}():A(i,r,t,e),r}function v(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(m);return T(n,t),n}function m(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(t){return ut.error=t,ut}}function _(t,e,n,i){try{t.call(e,n,i)}catch(t){return t}}function b(t,e,n){X(function(t){var i=!1,r=_(n,e,function(n){i||(i=!0,e!==n?T(t,n):O(t,n))},function(e){i||(i=!0,k(t,e))},"Settle: "+(t._label||" unknown promise"));!i&&r&&(i=!0,k(t,r))},t)}function x(t,e){e._state===st?O(t,e._result):e._state===at?k(t,e._result):A(e,void 0,function(e){return T(t,e)},function(e){return k(t,e)})}function $(t,e,n){e.constructor===t.constructor&&n===p&&e.constructor.resolve===v?x(t,e):n===ut?(k(t,ut.error),ut.error=null):void 0===n?O(t,e):r(n)?b(t,e,n):O(t,e)}function T(e,n){e===n?k(e,y()):t(n)?$(e,n,w(n)):O(e,n)}function E(t){t._onerror&&t._onerror(t._result),S(t)}function O(t,e){t._state===ot&&(t._result=e,t._state=st,0!==t._subscribers.length&&X(S,t))}function k(t,e){t._state===ot&&(t._state=at,t._result=e,X(E,t))}function A(t,e,n,i){var r=t._subscribers,o=r.length;t._onerror=null,r[o]=e,r[o+st]=n,r[o+at]=i,0===o&&t._state&&X(S,t)}function S(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var i=void 0,r=void 0,o=t._result,s=0;s<e.length;s+=3)i=e[s],r=e[s+n],i?P(n,i,r,o):r(o);t._subscribers.length=0}}function C(){this.error=null}function j(t,e){try{return t(e)}catch(t){return ct.error=t,ct}}function P(t,e,n,i){var o=r(n),s=void 0,a=void 0,u=void 0,c=void 0;if(o){if(s=j(n,i),s===ct?(c=!0,a=s.error,s.error=null):u=!0,e===s)return void k(e,g())}else s=i,u=!0;e._state!==ot||(o&&u?T(e,s):c?k(e,a):t===st?O(e,s):t===at&&k(e,s))}function F(t,e){try{e(function(e){T(t,e)},function(e){k(t,e)})}catch(e){k(t,e)}}function B(){return ht++}function L(t){t[rt]=ht++,t._state=void 0,t._result=void 0,t._subscribers=[]}function D(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[rt]||L(this.promise),K(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&O(this.promise,this._result))):k(this.promise,M())}function M(){return new Error("Array Methods must be provided an Array")}function R(t){return new D(this,t).promise}function q(t){var e=this;return new e(K(t)?function(n,i){for(var r=t.length,o=0;o<r;o++)e.resolve(t[o]).then(n,i)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function N(t){var e=this,n=new e(m);return k(n,t),n}function I(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function H(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[rt]=B(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&I(),this instanceof U?F(this,t):H())}function z(){var t=void 0;if("undefined"!=typeof i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=U}var G=void 0;G=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var K=G,W=0,Y=void 0,Q=void 0,X=function(t,e){nt[W]=t,nt[W+1]=e,W+=2,2===W&&(Q?Q(f):it())},V="undefined"!=typeof window?window:void 0,J=V||{},Z=J.MutationObserver||J.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),it=void 0;it=tt?a():Z?c():et?h():void 0===V?d():l();var rt=Math.random().toString(36).substring(16),ot=void 0,st=1,at=2,ut=new C,ct=new C,ht=0;return D.prototype._enumerate=function(t){for(var e=0;this._state===ot&&e<t.length;e++)this._eachEntry(t[e],e)},D.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,i=n.resolve;if(i===v){var r=w(t);if(r===p&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof r)this._remaining--,this._result[e]=t;else if(n===U){var o=new n(m);$(o,t,r),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(i(t),e)},D.prototype._settledAt=function(t,e,n){var i=this.promise;i._state===ot&&(this._remaining--,t===at?k(i,n):this._result[e]=n),0===this._remaining&&O(i,this._result)},D.prototype._willSettleAt=function(t,e){var n=this;A(t,void 0,function(t){return n._settledAt(st,e,t)},function(t){return n._settledAt(at,e,t)})},U.all=R,U.race=q,U.resolve=v,U.reject=N,U._setScheduler=o,U._setAsap=s,U._asap=X,U.prototype={constructor:U,then:p,catch:function(t){return this.then(null,t)}},U.polyfill=z,U.Promise=U,U})}).call(e,n(314),function(){return this}())},311:function(t,e){!function(e){"use strict";function n(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){this.map={},t instanceof r?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function s(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function a(t){var e=new FileReader;return e.readAsArrayBuffer(t),s(e)}function u(t,e){var n=new FileReader,i=e.headers.map["content-type"]?e.headers.map["content-type"].toString():"",r=/charset\=[0-9a-zA-Z\-\_]*;?/,o=t.type.match(r)||i.match(r),a=[t];return o&&a.push(o[0].replace(/^charset\=/,"").replace(/;$/,"")),n.readAsText.apply(n,a),s(n)}function c(){return this.bodyUsed=!1,this._initBody=function(t,e){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t,this._options=e;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(t){if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText=""},v.blob?(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob,this._options);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=o(this);return t?t:Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(f)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return m.indexOf(e)>-1?e:t}function l(t,e){e=e||{};var n=e.body;if(l.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new r(t.headers)),this.method=t.method,this.mode=t.mode,n||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new r(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n,e)}function f(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),i=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(i),decodeURIComponent(r))}}),e}function d(t){var e=new r,n=t.getAllResponseHeaders().trim().split("\n");return n.forEach(function(t){var n=t.trim().split(":"),i=n.shift().trim(),r=n.join(":").trim();e.append(i,r)}),e}function p(t,e){e||(e={}),this._initBody(t,e),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof r?e.headers:new r(e.headers),this.url=e.url||""}if(e.__disableNativeFetch||!e.fetch){r.prototype.append=function(t,e){t=n(t),e=i(e);var r=this.map[t];r||(r=[],this.map[t]=r),r.push(e)},r.prototype.delete=function(t){delete this.map[n(t)]},r.prototype.get=function(t){var e=this.map[n(t)];return e?e[0]:null},r.prototype.getAll=function(t){return this.map[n(t)]||[]},r.prototype.has=function(t){return this.map.hasOwnProperty(n(t))},r.prototype.set=function(t,e){this.map[n(t)]=[i(e)]},r.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(i){t.call(e,i,n,this)},this)},this)};var v={blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e},m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this)},c.call(l.prototype),c.call(p.prototype),p.prototype.clone=function(){return new p(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},p.error=function(){var t=new p(null,{status:0,statusText:""});return t.type="error",t};var y=[301,302,303,307,308];p.redirect=function(t,e){if(y.indexOf(e)===-1)throw new RangeError("Invalid status code");return new p(null,{status:e,headers:{location:t}})},e.Headers=r,e.Request=l,e.Response=p,e.fetch=function(t,e){return new Promise(function(n,i){function r(){return"responseURL"in a?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):void 0}function o(){if(4===a.readyState){var t=1223===a.status?204:a.status;if(t<100||t>599){if(u)return;return u=!0,void i(new TypeError("Network request failed"))}var e={status:t,statusText:a.statusText,headers:d(a),url:r()},o="response"in a?a.response:a.responseText;u||(u=!0,n(new p(o,e)))}}var s;s=l.prototype.isPrototypeOf(t)&&!e?t:new l(t,e);var a=new XMLHttpRequest,u=!1;a.onreadystatechange=o,a.onload=o,a.onerror=function(){u||(u=!0,i(new TypeError("Network request failed")))},a.open(s.method,s.url,!0);try{"include"===s.credentials&&("withCredentials"in a?a.withCredentials=!0:console&&console.warn&&console.warn("withCredentials is not supported, you can ignore this warning"))}catch(t){console&&console.warn&&console.warn("set withCredentials error:"+t)}"responseType"in a&&v.blob&&(a.responseType="blob"),s.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})},e.fetch.polyfill=!0,"undefined"!=typeof t&&t.exports&&(t.exports=e.fetch)}}("undefined"!=typeof self?self:this)},314:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(h===setTimeout)return setTimeout(t,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function o(t){if(l===clearTimeout)return clearTimeout(t);if((l===i||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){v&&d&&(v=!1,d.length?p=d.concat(p):m=-1,p.length&&a())}function a(){if(!v){var t=r(s);v=!0;for(var e=p.length;e;){for(d=p,p=[];++m<e;)d&&d[m].run();m=-1,e=p.length}d=null,v=!1,o(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var h,l,f=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(t){h=n}try{l="function"==typeof clearTimeout?clearTimeout:i}catch(t){l=i}}();var d,p=[],v=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new u(t,e)),1!==p.length||v||r(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},316:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},317:function(t,e){}});