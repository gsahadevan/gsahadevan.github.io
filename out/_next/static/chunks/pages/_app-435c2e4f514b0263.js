(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var l=n(7294);let r=["light","dark"],a="(prefers-color-scheme: dark)",o="undefined"==typeof window,s=(0,l.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,l.useContext)(s))&&void 0!==e?e:i},u=e=>(0,l.useContext)(s)?l.createElement(l.Fragment,null,e.children):l.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:f="data-theme",value:g,children:y,nonce:x})=>{let[b,w]=(0,l.useState)(()=>h(i,u)),[j,C]=(0,l.useState)(()=>h(i)),E=g?Object.values(g):c,k=(0,l.useCallback)(e=>{let l=e;if(!l)return;"system"===e&&n&&(l=v());let a=g?g[l]:l,s=t?p():null,i=document.documentElement;if("class"===f?(i.classList.remove(...E),a&&i.classList.add(a)):a?i.setAttribute(f,a):i.removeAttribute(f),o){let e=r.includes(u)?u:null,t=r.includes(l)?l:e;i.style.colorScheme=t}null==s||s()},[]),M=(0,l.useCallback)(e=>{w(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),_=(0,l.useCallback)(t=>{let l=v(t);C(l),"system"===b&&n&&!e&&k("system")},[b,e]);(0,l.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,l.useEffect)(()=>{let e=e=>{e.key===i&&M(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),(0,l.useEffect)(()=>{k(null!=e?e:b)},[e,b]);let S=(0,l.useMemo)(()=>({theme:b,setTheme:M,forcedTheme:e,resolvedTheme:"system"===b?j:b,themes:n?[...c,"system"]:c,systemTheme:n?j:void 0}),[b,M,e,j,n,c]);return l.createElement(s.Provider,{value:S},l.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:o,storageKey:i,themes:c,defaultTheme:u,attribute:f,value:g,children:y,attrs:E,nonce:x}),y)},m=(0,l.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:o,enableColorScheme:s,defaultTheme:i,value:c,attrs:u,nonce:d})=>{let f="system"===i,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=s?r.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,l=!0)=>{let a=c?c[e]:e,o=t?e+"|| ''":`'${a}'`,i="";return s&&l&&!t&&r.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||a?`c.add(${o})`:"null":a&&(i+=`d[s](n,${o})`),i},v=e?`!function(){${m}${p(e)}}()`:o?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${h}}catch(t){}}();`;return l.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4178)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,r=n(7273).Z,a=l(n(7294)),o=n(4532),s=n(3353),i=n(1410),c=n(9064),u=n(370),d=n(9955),f=n(4224),m=n(508),h=n(1516),p=n(4266);let v=new Set;function g(e,t,n,l,r){if(r||s.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+r;if(v.has(a))return;v.add(a)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let x=a.default.forwardRef(function(e,t){let n,l;let{href:i,as:v,children:x,prefetch:b,passHref:w,replace:j,shallow:C,scroll:E,locale:k,onClick:M,onMouseEnter:_,onTouchStart:S,legacyBehavior:$=!1}=e,T=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,$&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let N=!1!==b,O=a.default.useContext(d.RouterContext),L=a.default.useContext(f.AppRouterContext),P=null!=O?O:L,R=!O,{href:z,as:I}=a.default.useMemo(()=>{if(!O){let e=y(i);return{href:e,as:v?y(v):e}}let[e,t]=o.resolveHref(O,i,!0);return{href:e,as:v?o.resolveHref(O,v):t||e}},[O,i,v]),H=a.default.useRef(z),A=a.default.useRef(I);$&&(l=a.default.Children.only(n));let B=$?l&&"object"==typeof l&&l.ref:t,[K,F,U]=m.useIntersection({rootMargin:"200px"}),D=a.default.useCallback(e=>{(A.current!==I||H.current!==z)&&(U(),A.current=I,H.current=z),K(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[I,B,z,U,K]);a.default.useEffect(()=>{P&&F&&N&&g(P,z,I,{locale:k},R)},[I,z,F,k,N,null==O?void 0:O.locale,P,R]);let J={ref:D,onClick(e){$||"function"!=typeof M||M(e),$&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,l,r,o,i,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!s.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:o,locale:c,scroll:i}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(h):h()}(e,P,z,I,j,C,E,k,R,N)},onMouseEnter(e){$||"function"!=typeof _||_(e),$&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),P&&(N||!R)&&g(P,z,I,{locale:k,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){$||"function"!=typeof S||S(e),$&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),P&&(N||!R)&&g(P,z,I,{locale:k,priority:!0,bypassPrefetchedCheck:!0},R)}};if(c.isAbsoluteUrl(I))J.href=I;else if(!$||w||"a"===l.type&&!("href"in l.props)){let e=void 0!==k?k:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&h.getDomainLocale(I,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);J.href=t||p.addBasePath(u.addLocale(I,e,null==O?void 0:O.defaultLocale))}return $?a.default.cloneElement(l,J):a.default.createElement("a",Object.assign({},T,J),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!a,[u,d]=l.useState(!1),f=l.useRef(null),m=l.useCallback(e=>{f.current=e},[]);l.useEffect(()=>{if(a){if(c||u)return;let e=f.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:r,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=s.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=o.get(l)))return t;let r=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:r},s.push(n),o.set(n,t),t}(n);return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),o.delete(l);let e=s.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!u){let e=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=l.useCallback(()=>{d(!1)},[]);return[m,u,h]};var l=n(7294),r=n(29);let a="function"==typeof IntersectionObserver,o=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4178:function(e,t,n){"use strict";n.r(t);var l=n(5893),r=n(2010),a=n(94);n(3814),t.default=function(e){let{Component:t,pageProps:n}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(r.f,{enableSystem:!0,attribute:"class",children:[(0,l.jsx)(a.default,{}),(0,l.jsx)(t,{...n})]})})}},94:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var l=n(5893),r=n(7294),a=n(2010),o=n(1664),s=n.n(o);let i=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}))}),c=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}))}),u=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))});var d=function(){let{systemTheme:e,theme:t,setTheme:n}=(0,a.F)(),[o,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{d(!0)},[]);let f=()=>"dark"===("system"===t?e:t)?(0,l.jsx)(i,{className:"w-5 h-6",role:"button",onClick:()=>n("light")}):(0,l.jsx)(c,{className:"w-5 h-6",role:"button",onClick:()=>n("dark")}),m=()=>{let e=document.getElementById("mobile-menu");e.classList.toggle("hidden")},h=()=>{let e=document.getElementById("mobile-menu");e.classList.add("hidden")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("nav",{className:"text-indigo-100 bg-indigo-600 dark:bg-gray-800 dark:text-gray-200",children:(0,l.jsx)("div",{className:"max-w-2xl py-4 px-8 mx-auto lg:max-w-5xl",children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)(s(),{href:"/",children:"Gauthaman Sahadevan"}),(0,l.jsxs)("ul",{className:"hidden md:flex justify-end space-x-12",children:[(0,l.jsx)("li",{children:(0,l.jsx)(s(),{href:"/",children:(0,l.jsx)("span",{children:"Home"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(s(),{href:"/blog",children:(0,l.jsx)("span",{children:"Blog"})})}),(0,l.jsx)("li",{children:f()}),(0,l.jsx)("li",{children:(0,l.jsx)(s(),{href:"/hire-me",children:(0,l.jsx)("span",{className:"px-6 py-2 text-yellow-100 bg-yellow-600 rounded-full",children:"Hire Me"})})})]}),(0,l.jsxs)("div",{className:"md:hidden flex items-center",children:[(0,l.jsx)("div",{className:"px-6",children:f()}),(0,l.jsx)("button",{onClick:m,children:(0,l.jsx)(u,{className:"w-6 h-6"})})]})]})})}),(0,l.jsxs)("div",{id:"mobile-menu",className:"hidden md:hidden flex flex-col absolute w-full px-8 bg-gray-100 dark:bg-gray-600",children:[(0,l.jsx)(s(),{href:"/",children:(0,l.jsx)("span",{className:"py-2 px-4 text-sm",onClick:h,children:"Home"})}),(0,l.jsx)(s(),{href:"/blog",children:(0,l.jsx)("span",{className:"py-2 px-4 text-sm",onClick:h,children:"Blog"})}),(0,l.jsx)(s(),{href:"/hire-me",children:(0,l.jsx)("span",{className:"py-2 px-4 text-sm",onClick:h,children:"Hire Me"})})]})]})}},3814:function(){},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);