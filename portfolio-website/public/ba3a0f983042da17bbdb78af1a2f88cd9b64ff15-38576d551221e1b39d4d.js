(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Bi3C:function(t,e,o){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=o(1),n=(r=l)&&r.__esModule?r:{default:r};e.default=n.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),i=o(2),c=(r=i)&&r.__esModule?r:{default:r},s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1),l=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:l-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}(t,["offset"]));return c.default.createElement("a",l({},e,{onClick:this.smoothScroll}))}}]),e}(i.Component);e.default=s},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,r=t.HTMLElement||t.Element,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):l.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?l.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=u(this),r=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+n.left-r.left,o.scrollTop+n.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function s(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function a(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function p(t){var e=f(t,"Y")&&a(t,"Y"),o=f(t,"X")&&a(t,"X");return e||o}function u(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===p(t));return o=null,t}function d(e){var o,r,l,i,c=(n()-e.startTime)/468;i=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*i)),r=e.startX+(e.x-e.startX)*o,l=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,l),r===e.x&&l===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(o,r,i){var s,f,a,p,u=n();o===e.body?(s=t,f=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,p=l.scroll):(s=o,f=o.scrollLeft,a=o.scrollTop,p=c),d({scrollable:s,method:p,startTime:u,startX:f,startY:a,x:r,y:i})}}}}()}])},t.exports=r(o("q1tI"))},gPTD:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return a}));var r=o("dI71"),l=o("q1tI"),n=o("2O4O"),i=o("zBwk"),c=o.n(i),s=o("Bi3C"),f=o.n(s),a=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){return l.createElement("section",{className:n.Navbar},l.createElement("section",{className:n.Centered},l.createElement("div",{className:n.Logo},l.createElement(f.a,{offset:"100",href:"/"},l.createElement(c.a,null))),l.createElement("nav",{className:n.Menu},l.createElement(f.a,{offset:"100",href:"#Me"},"Me"),l.createElement(f.a,{offset:"100",href:"#Services"},"Services"),l.createElement(f.a,{offset:"100",href:"#Portfolio"},"Portfolio"),l.createElement(f.a,{offset:"100",href:"#Contact"},"Contact"))))},e}(l.Component)},zBwk:function(t,e,o){var r=o("q1tI");function l(t){return r.createElement("svg",t,r.createElement("g",null,r.createElement("path",{d:"m16.455 1.4094c0-2e-7 -2.9253-0.034011-5.5115 1.058-2.5005 1.0558-4.2537 4.3297-5.3449 3.8415-1.0578-0.47323-0.36169-1.2806 1.3085-3.1179-4.1199 2.0599-5.9689 5.6845-3.948 11.599 1.578 4.6186 7.3341 8.6681 12.994 10.673 1.4744 0.52228 1.8379 2.8369 1.8379 2.8369s-0.77041-1.5676-1.9329-2.2898c-1.4203-0.88243-2.5006-0.88661-5.6386-2.3313-2.7426-1.2627-4.4739-3.5597-4.4739-3.5597 4e-7 0 0.49163 1.1659-0.17647 1.3886-0.66809 0.2227-1.7329-0.23446-2.9049-3.5631 0.32449 3.4642 1.3601 4.1443 3.101 5.8456 2.2076 2.1574 10.913 3.9605 9.9795 6.0261-0.97502 2.1577-7.7392-0.75329-7.7392-0.75329 5.8647 3.7948 8.3663 3.5276 10.059 3.252 1.6928-0.27557 4.7245-1.1218 5.0789-4.9798 0.35431-3.858-3.806-4.803-6.1809-7.1452-1.8735-1.8476-1.9351-2.7295-1.9699-4.1498-0.03944-1.611 1.0663-2.9211 2.687-2.8559 2.1724 0.08749 2.4163 1.3579 2.5708 2.0999 0.16408 0.78767-0.01233 2.029-0.82998 2.5885 0.52273 0.57305 1.2295 0.63124 1.9289 0.34343 0.79819-0.3285 1.1463-1.051 1.2019-1.8583 0.78002-0.58598 1.4578-2.0571 0.81176-4.2153-0.69471-2.321-2.6211-3.5193-2.816-5.8619-0.06884-0.8276-0.29828-2.9523 2.4298-4.6782-4.4919 0.87028-4.8798 4.7617-4.8798 4.7617s-0.41746-0.36191-0.27828-1.6981c-0.86295 1.0021-0.61222 2.9509-0.61222 2.9509s-1.3659-0.12343-3.039 1.156c3.11-0.45273 4.5576 0.30068 5.5704 1.2798 1.8696 1.8075 2.0671 4.1136 2.0671 4.1136s-0.25619 0.06902-0.39398-0.11797c-0.15747-0.31494-0.52165-0.03923-0.71849-0.33449-0.15747-0.21652-0.08467-1.1006-0.32088-1.8873-0.09606-0.31994-0.38997-0.94404-1.0122-1.4934-0.8804-0.77732-2.2361-1.4634-4.5188-1.352-2.2826 0.11135-4.3708 3.396-4.0646 7.3489 0.3616 4.6679 4.7468 6.4911 4.7468 6.4911s1.5181 0.71327 0.17543-0.85487c1.3233 0.42233 2.9838 2.2137 3.0952 5.4984-1.0021-3.7302-3.1165-3.9064-4.8954-5.1214-1.464-0.99994-5.7746-3.1484-6.1842-10.153-0.46924-8.0243 8.7409-10.782 8.7409-10.782zm8.8539 3.2304s-1.3583 2.8937 0.92498 6.8698c-1.181-0.98419-2.185-0.86614-2.185-0.86614s3.5641 3.3598 2.5592 6.7514c-1.371 4.6277-4.8229 5.4133-4.8229 5.4133s5.6689 4.724-1.2992 9.3496c3.7596-0.86609 8.1098-2.2831 10.059-7.9914-1.1023 1.5353-3.7299 4.335-4.409 3.5428-0.78996-0.92153 3.7742-3.2316 4.8223-5.2258 1.2935-2.4611 1.1812-7.8245-2.0272-11.072 0.96451 3.051 0.96474 5.5377 0.23624 7.4802-0.58371 1.5564-1.2834 3.0954-2.2637 4.1336-1.0891 1.1534-1.9685 2.4208-2.1653 3.1688 0.07873-1.5747 0.60106-2.5384 1.516-3.6413 2.0778-2.5049 3.1922-6.2049 2.6373-8.2477-0.55115-2.0471-1.5671-3.7259-2.972-5.7473-0.69756-1.0037-0.61028-3.9175-0.61028-3.9175z",fillOpacity:".99048"})))}l.defaultProps={width:"33.867px",height:"33.867px",viewBox:"0 0 33.867 33.867",version:"1.1"},t.exports=l,l.default=l}}]);
//# sourceMappingURL=ba3a0f983042da17bbdb78af1a2f88cd9b64ff15-38576d551221e1b39d4d.js.map