(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10],{"+o2g":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("dI71"),i=n("q1tI"),o=n("2O4O"),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.createElement("div",{className:o.Heroshot},i.createElement("div",{className:o.HeroshotMainText},i.createElement("h1",null,this.props.title),i.createElement("h2",null,this.props.subtitle)))},t}(i.Component)},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,T=[];function N(){c=e(T.map((function(e){return e.props}))),l.canUseDOM?t(c):n&&(c=n(c))}var l=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,T=[],e};var M=i.prototype;return M.shouldComponentUpdate=function(e){return!a(e,this.props)},M.componentWillMount=function(){T.push(this),N()},M.componentDidUpdate=function(){N()},M.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),N()},M.render=function(){return o.createElement(r,this.props)},i}(i.Component);return M(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),M(l,"canUseDOM",u),l}}},"8UJJ":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiMDA+PHBhdGggZD0iTSAyNi41NjI1IDEgQyAyMi42MzY3MTkgMSAxOS40MDYyNSA0LjEzMjgxMyAxOS40MDYyNSA4IEMgMTkuNDA2MjUgOS43MzQzNzUgMjAuMDcwMzEzIDExLjA3NDIxOSAyMS4xMjUgMTIuNTYyNSBDIDIxLjk4NDM3NSAxMy43NzczNDQgMjEuOTM3NSAxNC40MzM1OTQgMjEuODQzNzUgMTQuNjI1IEMgMjEuNzUgMTQuODE2NDA2IDIxLjM5ODQzOCAxNS4wNjI1IDIwLjQ2ODc1IDE1IEMgMTguMDM5MDYzIDE0LjgzNTkzOCAxMC4yNSAxMy45Mzc1IDEwLjI1IDEzLjkzNzUgTCAxMC4yNSAxMy45Njg3NSBDIDkuMzA4NTk0IDEzLjgzOTg0NCA4LjM2NzE4OCAxNC4yNDIxODggNy44NzUgMTQuOTA2MjUgQyA3LjM5ODQzOCAxNS41NTA3ODEgNy4yMTg3NSAxNi4zMDg1OTQgNy4xMjUgMTcuMDkzNzUgQyA3LjEyNSAxNy4wOTM3NSA3LjEyNSAxNy4xNTYyNSA3LjEyNSAxNy4xNTYyNSBDIDcuMTIxMDk0IDE3LjE3OTY4OCA3LjA5NzY1NiAxNy4xOTUzMTMgNy4wOTM3NSAxNy4yMTg3NSBMIDcuMTI1IDE3LjIxODc1IEMgNy4xMTMyODEgMTcuMjYxNzE5IDYuNjkxNDA2IDE5LjIwNzAzMSA2LjA2MjUgMjcuNDY4NzUgQyA2LjA1NDY4OCAyNy41OTc2NTYgNi4wNDI5NjkgMjcuNDk2MDk0IDYuMDMxMjUgMjcuNjI1IEwgNi4wNjI1IDI3LjYyNSBDIDYuMDExNzE5IDI4LjAxMTcxOSA2LjA1NDY4OCAyOC4zNTkzNzUgNi4wNjI1IDI4LjQwNjI1IEMgNi4xODc1IDI5LjA0Mjk2OSA2LjUzOTA2MyAyOS42NzU3ODEgNy4xMjUgMjkuOTY4NzUgQyA3LjcxMDkzOCAzMC4yNjE3MTkgOC4zMDQ2ODggMzAuMTgzNTk0IDguODEyNSAzMC4wMzEyNSBDIDkuODMyMDMxIDI5LjcyNjU2MyAxMC43OTI5NjkgMjkuMDQ2ODc1IDExLjc4MTI1IDI4LjM0Mzc1IEMgMTIuOTQ5MjE5IDI3LjUxNTYyNSAxNC4wNDY4NzUgMjcgMTUuMzEyNSAyNyBDIDE4LjE4MzU5NCAyNyAyMC40Njg3NSAyOS4yMzgyODEgMjAuNDY4NzUgMzIgQyAyMC40Njg3NSAzNC43NjE3MTkgMTguMTgzNTk0IDM3IDE1LjMxMjUgMzcgQyAxMy44ODY3MTkgMzcgMTMuMDc4MTI1IDM2LjYzMjgxMyAxMS43MTg3NSAzNS41NjI1IEMgMTAuOTYwOTM4IDM0Ljk2ODc1IDEwLjA3NDIxOSAzNC4zMjQyMTkgOS4xMjUgMzMuOTY4NzUgQyA4LjY0ODQzOCAzMy43OTI5NjkgOC4xNDA2MjUgMzMuNjg3NSA3LjU2MjUgMzMuODEyNSBDIDYuOTg0Mzc1IDMzLjkzNzUgNi40MjU3ODEgMzQuNDE0MDYzIDYuMTg3NSAzNSBDIDUuOTQxNDA2IDM1LjYwMTU2MyA1Ljk1MzEyNSAzNi4wMjM0MzggNi4wMzEyNSAzNi41MzEyNSBDIDYuMDM1MTU2IDM2LjU4MjAzMSA2LjAyNzM0NCAzNi41NDI5NjkgNi4wMzEyNSAzNi41OTM3NSBDIDYuNjIxMDk0IDQyLjcxNDg0NCA2LjkxNzk2OSA0My4zMTI1IDcuMTI1IDQ0LjIxODc1IEMgNy4yNzM0MzggNDQuODY3MTg4IDcuNTM5MDYzIDQ1LjUyNzM0NCA4LjAzMTI1IDQ2LjA2MjUgQyA4LjUyMzQzOCA0Ni41OTc2NTYgOS4zMDA3ODEgNDcgMTAuMTU2MjUgNDcgTCA0Mi4xODc1IDQ3IEMgNDMuMzAwNzgxIDQ3IDQ0LjMwODU5NCA0Ni42MzI4MTMgNDUgNDUuOTM3NSBDIDQ1LjY5MTQwNiA0NS4yNDIxODggNDYgNDQuMjc3MzQ0IDQ2IDQzLjI1IEwgNDYgMTcuMzc1IEMgNDYgMTYuNDE0MDYzIDQ1LjY0NDUzMSAxNS41OTM3NSA0NS4wOTM3NSAxNS4wMzEyNSBDIDQ0LjU0Mjk2OSAxNC40Njg3NSA0My44NjMyODEgMTQuMTYwMTU2IDQzLjIxODc1IDEzLjk2ODc1IEMgNDMuMDk3NjU2IDEzLjkzMzU5NCA0Mi45Njg3NSAxMy45MjU3ODEgNDIuODQzNzUgMTMuOTM3NSBDIDQyLjg0Mzc1IDEzLjkzNzUgMzUuMzE2NDA2IDE0LjY4MzU5NCAzMi41OTM3NSAxNSBDIDMxLjgwMDc4MSAxNS4wODk4NDQgMzEuNTI3MzQ0IDE0LjkxNDA2MyAzMS40MDYyNSAxNC42NTYyNSBDIDMxLjI4NTE1NiAxNC4zOTg0MzggMzEuMjM0Mzc1IDEzLjY2Nzk2OSAzMS45Njg3NSAxMi41IEMgMzIuNTIzNDM4IDExLjYxNzE4OCAzMi45NDkyMTkgMTAuOTcyNjU2IDMzLjI1IDEwLjI4MTI1IEMgMzMuNTUwNzgxIDkuNTg5ODQ0IDMzLjY4NzUgOC44NjMyODEgMzMuNjg3NSA4IEMgMzMuNjg3NSA0LjEzMjgxMyAzMC40ODgyODEgMSAyNi41NjI1IDEgWiBNIDI2LjU2MjUgMyBDIDI5LjQzMzU5NCAzIDMxLjY4NzUgNS4yMzgyODEgMzEuNjg3NSA4IEMgMzEuNjg3NSA4LjY2NDA2MyAzMS42MDkzNzUgOS4wMzUxNTYgMzEuNDA2MjUgOS41IEMgMzEuMjAzMTI1IDkuOTY0ODQ0IDMwLjgzOTg0NCAxMC41NDY4NzUgMzAuMjgxMjUgMTEuNDM3NSBDIDI5LjM0Mzc1IDEyLjkyOTY4OCAyOS4wNDY4NzUgMTQuMzQzNzUgMjkuNTkzNzUgMTUuNSBDIDMwLjE0MDYyNSAxNi42NTYyNSAzMS40ODA0NjkgMTcuMTUyMzQ0IDMyLjgxMjUgMTcgQyAzNS4zOTg0MzggMTYuNjk5MjE5IDQyLjM4NjcxOSAxNi4wMDc4MTMgNDIuNzgxMjUgMTUuOTY4NzUgQyA0My4xNzE4NzUgMTYuMTAxNTYzIDQzLjUxNTYyNSAxNi4yMzA0NjkgNDMuNjg3NSAxNi40MDYyNSBDIDQzLjg4MjgxMyAxNi42MDU0NjkgNDQgMTYuODI0MjE5IDQ0IDE3LjM3NSBMIDQ0IDQzLjI1IEMgNDQgNDMuODc4OTA2IDQzLjgyNDIxOSA0NC4yNjU2MjUgNDMuNTYyNSA0NC41MzEyNSBDIDQzLjMwMDc4MSA0NC43OTY4NzUgNDIuOTAyMzQ0IDQ1IDQyLjE4NzUgNDUgTCAxMC4xNTYyNSA0NSBDIDkuODc4OTA2IDQ1IDkuNzIyNjU2IDQ0LjkyOTY4OCA5LjUzMTI1IDQ0LjcxODc1IEMgOS4zMzk4NDQgNDQuNTA3ODEzIDkuMTQ4NDM4IDQ0LjE0ODQzOCA5LjA2MjUgNDMuNzgxMjUgQyA4LjgwNDY4OCA0Mi42NjQwNjMgOC42Mjg5MDYgNDIuNTYyNSA4LjAzMTI1IDM2LjM0Mzc1IEMgOC4wMjM0MzggMzYuMzI0MjE5IDguMDExNzE5IDM2LjMwMDc4MSA4IDM2LjI4MTI1IEMgNy45ODA0NjkgMzYuMTcxODc1IDguMDgyMDMxIDM1LjYyNSA4LjAzMTI1IDM1Ljc1IEMgOC4wNjY0MDYgMzUuNzUgOC4xOTkyMTkgMzUuNzUzOTA2IDguNDM3NSAzNS44NDM3NSBDIDguOTgwNDY5IDM2LjA0Njg3NSA5Ljc4MTI1IDM2LjYxMzI4MSAxMC40Njg3NSAzNy4xNTYyNSBDIDEyIDM4LjM1OTM3NSAxMy40NzI2NTYgMzkgMTUuMzEyNSAzOSBDIDE5LjIzODI4MSAzOSAyMi40Njg3NSAzNS44NjcxODggMjIuNDY4NzUgMzIgQyAyMi40Njg3NSAyOC4xMzI4MTMgMTkuMjM4MjgxIDI1IDE1LjMxMjUgMjUgQyAxMy40ODgyODEgMjUgMTEuOTUzMTI1IDI1Ljc3MzQzOCAxMC42MjUgMjYuNzE4NzUgQyA5LjY3NTc4MSAyNy4zOTQ1MzEgOC43NDIxODggMjcuOTc2NTYzIDguMjUgMjguMTI1IEMgOC4xNTYyNSAyOC4xNTIzNDQgOC4xMDkzNzUgMjguMTUyMzQ0IDguMDYyNSAyOC4xNTYyNSBDIDguMDU4NTk0IDI4LjEyODkwNiA4LjA1MDc4MSAyOC4xMjEwOTQgOC4wMzEyNSAyOC4wMzEyNSBDIDguMDE5NTMxIDI3Ljk2ODc1IDguMDMxMjUgMjcuOTIxODc1IDguMDMxMjUgMjcuOTA2MjUgQyA4LjAzNTE1NiAyNy44NjMyODEgOC4wMzUxNTYgMjcuODI0MjE5IDguMDMxMjUgMjcuNzgxMjUgQyA4LjY3OTY4OCAxOS4xMzI4MTMgOS4wNjI1IDE3LjU2MjUgOS4wNjI1IDE3LjU2MjUgQyA5LjA3NDIxOSAxNy41MjM0MzggOS4wODU5MzggMTcuNDgwNDY5IDkuMDkzNzUgMTcuNDM3NSBDIDkuMTY0MDYzIDE2Ljc4OTA2MyA5LjMyNDIxOSAxNi4yOTI5NjkgOS40Njg3NSAxNi4wOTM3NSBDIDkuNjEzMjgxIDE1Ljg5NDUzMSA5LjU4NTkzOCAxNS44NzUgOS45Njg3NSAxNS45Mzc1IEMgOS45ODgyODEgMTUuOTM3NSAxMC4wMTE3MTkgMTUuOTM3NSAxMC4wMzEyNSAxNS45Mzc1IEMgMTAuMDMxMjUgMTUuOTM3NSAxNy43MjI2NTYgMTYuODI0MjE5IDIwLjM0Mzc1IDE3IEMgMjEuNzE4NzUgMTcuMDkzNzUgMjMuMDc4MTI1IDE2LjY4MzU5NCAyMy42NTYyNSAxNS41IEMgMjQuMjM0Mzc1IDE0LjMxNjQwNiAyMy44MTI1IDEyLjkxMDE1NiAyMi43NSAxMS40MDYyNSBDIDIxLjc2OTUzMSAxMC4wMjM0MzggMjEuNDA2MjUgOS4yNzM0MzggMjEuNDA2MjUgOCBDIDIxLjQwNjI1IDUuMjM4MjgxIDIzLjY5MTQwNiAzIDI2LjU2MjUgMyBaIi8+PC9zdmc+Cg=="},BIUY:function(e,t,n){var r=n("q1tI");function i(e){return r.createElement("svg",e,[r.createElement("path",{fill:"#2279BF",d:"M374.48,174.16c0,0,103.72,105.12,26.16,273.66c-46.38,100.72-253.71,133.75-235,304.98\n\tc20.6,188.34,253.71,206.01,355.41,187.26c94.75-17.46,248.79-112.35,248.79-294.29C769.81,327.4,374.48,174.16,374.48,174.16z",key:0}),r.createElement("path",{fill:"#E89424",d:"M391.24,361.84c0,0-70.93,111.75,10.06,219.18c48.4,64.19,200.39,55.6,213.52,179.75\n\tc14.49,136.58-147.93,185.09-222.81,187.5c-69.81,2.27-193.58-41.17-221.66-170.04C121.19,552.72,391.24,361.84,391.24,361.84\n\tL391.24,361.84z",key:1}),r.createElement("path",{fill:"#D64C27",d:"M487.98,41c0,0,65.45,215.09-18.86,398.19C418.76,548.64,193.48,584.5,213.8,770.54\n\tC236.19,975.15,489.45,994.32,599.91,974c102.92-18.96,270.3-122.06,270.3-319.72C870.21,308.37,487.98,41,487.98,41L487.98,41z",key:2})])}i.defaultProps={version:"1.1",baseProfile:"tiny",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 1024 1024",xmlSpace:"preserve"},e.exports=i,i.default=i},"Dn+L":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("dI71"),i=n("q1tI"),o=n("2O4O"),a=n("BIUY"),M=n.n(a),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.createElement("div",{className:o.Tagline,id:"Me"},i.createElement("div",{className:o.Centered},i.createElement("div",{className:o.Block},i.createElement("h2",null,"INTENT"),i.createElement("h1",null,"I believe that building a world with precise, equitable, and accessible technology is something everyone will benefit from.")),i.createElement("div",{className:o.Block},i.createElement(M.a,{className:o.Symbol}))))},t}(i.Component)},Gytx:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var M=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!M(c))return!1;var T=e[c],N=t[c];if(!1===(i=n?n.call(r,T,N,c):void 0)||void 0===i&&T!==N)return!1}return!0}},J2Aq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n("dI71"),i=n("q1tI"),o=n("2O4O"),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.createElement("div",{className:o.Services,id:"Services"},i.createElement("div",{className:o.Centered},i.createElement("h1",null,"What have I done?"),i.createElement("p",{className:o.Subtitle},"Graduated from Carnegie Mellon University with a B.S. in Math (Computational and Applied) and minors in Computer Science and Creative Writing. Received University Honors and the Senior Leadership Recognition Award.")))},t}(i.Component)},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("dI71"),i=n("q1tI"),o=n("2O4O"),a=n("gPTD"),M=n("+o2g"),u=n("Dn+L"),c=n("J2Aq"),T=n("smDP"),N=n("px3k"),l=n("hVEd"),E=n("TJpk"),A=n("8UJJ"),s=n.n(A),g=function(e){function t(t){return e.call(this,t)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.createElement("section",{className:o.Container},i.createElement(E.Helmet,null,i.createElement("meta",{charSet:"utf-8"}),i.createElement("title",null,"Anna Lulushi | Portfolio Website"),i.createElement("link",{rel:"canonical",href:"https://fenix.eth/"}),i.createElement("link",{rel:"icon",type:"vector/svg",hrf:s.a})),i.createElement(a.default,null),i.createElement(M.default,{title:"Hi there. I am Anna Lulushi.",subtitle:"I work to design products that work for the many, not the few."}),i.createElement("div",{className:o.Homepage},i.createElement(u.default,null),i.createElement(c.default,null),i.createElement(T.default,null),i.createElement(N.default,null)),i.createElement(l.default,null))},t}(i.Component)},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=N(n("q1tI")),a=N(n("17x9")),M=N(n("8+s/")),u=N(n("bmMU")),c=n("v1p5"),T=n("hFT/");function N(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s,g,I,D=(0,M.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),f=(s=D,I=g=function(e){function t(){return E(this,t),A(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case T.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,o=e.newProps,a=e.newChildProps,M=e.nestedChildren;switch(i.type){case T.TAG_NAMES.TITLE:return r({},o,((t={})[i.type]=M,t.titleAttributes=r({},a),t));case T.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case T.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=l(i,["children"]),M=(0,c.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,o),e.type){case T.TAG_NAMES.LINK:case T.TAG_NAMES.META:case T.TAG_NAMES.NOSCRIPT:case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:M,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:M,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=l(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(s,i)},i(t,null,[{key:"canUseDOM",set:function(e){s.canUseDOM=e}}]),t}(o.default.Component),g.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},g.defaultProps={defer:!0,encodeSpecialCharacters:!0},g.peek=s.peek,g.rewind=function(){var e=s.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},I);f.renderStatic=f.rewind,t.Helmet=f,t.default=f},bmMU:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var M,u,c,T=r(t),N=r(n);if(T&&N){if((u=t.length)!=n.length)return!1;for(M=u;0!=M--;)if(!e(t[M],n[M]))return!1;return!0}if(T!=N)return!1;var l=t instanceof Date,E=n instanceof Date;if(l!=E)return!1;if(l&&E)return t.getTime()==n.getTime();var A=t instanceof RegExp,s=n instanceof RegExp;if(A!=s)return!1;if(A&&s)return t.toString()==n.toString();var g=i(t);if((u=g.length)!==i(n).length)return!1;for(M=u;0!=M--;)if(!o.call(n,g[M]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(M=u;0!=M--;)if(!("_owner"===(c=g[M])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},px3k:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("2O4O"),a=n("ythq");t.default=function(e){e.data;return i.a.createElement("div",{className:o.Contact,id:"Contact"},i.a.createElement("header",null,i.a.createElement("h1",null,"Have feedback for me?"),i.a.createElement("p",{className:o.Subtitle},"Submit feedback here. I will reach out on a rolling basis as I am able.")),i.a.createElement(a.default,null))}},smDP:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("2O4O");t.default=function(e){e.data;return i.a.createElement("section",{className:o.Portfolio,id:"Portfolio"},i.a.createElement("section",{className:o.Centered},i.a.createElement("header",null,i.a.createElement("h1",null,"Portfolio"),i.a.createElement("p",{className:o.Subtitle},i.a.createElement("a",{href:"https://drive.google.com/file/d/1_KzPf4h_qSy3YFjoLCMAgTS7H1O-iQgH/view?usp=sharing"},"View Resume on Google Drive"),i.a.createElement("br",null),i.a.createElement("a",{href:"https://drive.google.com/file/d/10vtNJQqPysh921RCh0eSC6Qqf9NmtgIG/view?usp=sharing"},"View CV Draft on Google Drive"),i.a.createElement("br",null),i.a.createElement("a",{href:"https://ipfs.io/ipfs/QmTkpQCMv3Z7eoPChQo6AYVebvAdGiBBTQiNyiyKzBebL1?filename=Anna%20Lulushi%20-%20Resume.pdf"},"View Resume on IPFS (beta)")))))}},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),a=u(n("YVoz")),M=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var c,T=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},N=function(e){var t=g(e,M.TAG_NAMES.TITLE),n=g(e,M.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=g(e,M.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},l=function(e){return g(e,M.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},A=function(e,t){return t.filter((function(e){return void 0!==e[M.TAG_NAMES.BASE]})).map((function(e){return e[M.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},s=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var u=o[a],c=u.toLowerCase();-1===t.indexOf(c)||n===M.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===M.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==M.TAG_PROPERTIES.INNER_HTML&&u!==M.TAG_PROPERTIES.CSS_TEXT&&u!==M.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var T=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][T]&&(r[n][T]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var c=o[u],T=(0,a.default)({},i[c],r[c]);i[c]=T}return e}),[]).reverse()},g=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},I=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){I(e)}),0)}),D=function(e){return clearTimeout(e)},f="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||I:e.requestAnimationFrame||I,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||D:e.cancelAnimationFrame||D,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},j=null,O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,T=e.scriptTags,N=e.styleTags,l=e.title,E=e.titleAttributes;z(M.TAG_NAMES.BODY,r),z(M.TAG_NAMES.HTML,i),p(l,E);var A={baseTag:m(M.TAG_NAMES.BASE,n),linkTags:m(M.TAG_NAMES.LINK,o),metaTags:m(M.TAG_NAMES.META,a),noscriptTags:m(M.TAG_NAMES.NOSCRIPT,u),scriptTags:m(M.TAG_NAMES.SCRIPT,T),styleTags:m(M.TAG_NAMES.STYLE,N)},s={},g={};Object.keys(A).forEach((function(e){var t=A[e],n=t.newTags,r=t.oldTags;n.length&&(s[e]=n),r.length&&(g[e]=A[e].oldTags)})),t&&t(),c(e,s,g)},d=function(e){return Array.isArray(e)?e.join(""):e},p=function(e,t){void 0!==e&&document.title!==e&&(document.title=d(e)),z(M.TAG_NAMES.TITLE,t)},z=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(M.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],T=t[c]||"";n.getAttribute(c)!==T&&n.setAttribute(c,T),-1===i.indexOf(c)&&i.push(c);var N=o.indexOf(c);-1!==N&&o.splice(N,1)}for(var l=o.length-1;l>=0;l--)n.removeAttribute(o[l]);i.length===o.length?n.removeAttribute(M.HELMET_ATTRIBUTE):n.getAttribute(M.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(M.HELMET_ATTRIBUTE,a.join(","))}},m=function(e,t){var n=document.head||document.querySelector(M.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+M.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===M.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===M.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(M.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},L=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case M.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[M.HELMET_ATTRIBUTE]=!0,i=h(n,r),[o.default.createElement(M.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=L(n),o=d(t);return i?"<"+e+" "+M.HELMET_ATTRIBUTE+'="true" '+i+">"+T(o,r)+"</"+e+">":"<"+e+" "+M.HELMET_ATTRIBUTE+'="true">'+T(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case M.ATTRIBUTE_NAMES.BODY:case M.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return h(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[M.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=M.REACT_TAG_MAP[e]||e;if(n===M.TAG_PROPERTIES.INNER_HTML||n===M.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===M.TAG_PROPERTIES.INNER_HTML||e===M.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+T(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===M.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+M.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){j&&y(j),e.defer?j=f((function(){O(e,(function(){j=null}))})):(O(e),j=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,T=e.styleTags,N=e.title,l=void 0===N?"":N,E=e.titleAttributes;return{base:C(M.TAG_NAMES.BASE,t,r),bodyAttributes:C(M.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(M.ATTRIBUTE_NAMES.HTML,i,r),link:C(M.TAG_NAMES.LINK,o,r),meta:C(M.TAG_NAMES.META,a,r),noscript:C(M.TAG_NAMES.NOSCRIPT,u,r),script:C(M.TAG_NAMES.SCRIPT,c,r),style:C(M.TAG_NAMES.STYLE,T,r),title:C(M.TAG_NAMES.TITLE,{title:l,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:A([M.TAG_PROPERTIES.HREF],e),bodyAttributes:E(M.ATTRIBUTE_NAMES.BODY,e),defer:g(e,M.HELMET_PROPS.DEFER),encode:g(e,M.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(M.ATTRIBUTE_NAMES.HTML,e),linkTags:s(M.TAG_NAMES.LINK,[M.TAG_PROPERTIES.REL,M.TAG_PROPERTIES.HREF],e),metaTags:s(M.TAG_NAMES.META,[M.TAG_PROPERTIES.NAME,M.TAG_PROPERTIES.CHARSET,M.TAG_PROPERTIES.HTTPEQUIV,M.TAG_PROPERTIES.PROPERTY,M.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:s(M.TAG_NAMES.NOSCRIPT,[M.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:l(e),scriptTags:s(M.TAG_NAMES.SCRIPT,[M.TAG_PROPERTIES.SRC,M.TAG_PROPERTIES.INNER_HTML],e),styleTags:s(M.TAG_NAMES.STYLE,[M.TAG_PROPERTIES.CSS_TEXT],e),title:N(e),titleAttributes:E(M.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=f,t.warn=S}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-284280acf00875f9a513.js.map