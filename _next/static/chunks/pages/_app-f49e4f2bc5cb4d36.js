(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5290)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,r=n(7273).Z,o=l(n(7294)),a=n(4532),s=n(3353),i=n(1410),c=n(9064),u=n(370),d=n(9955),f=n(4224),m=n(508),h=n(1516),p=n(4266);let y=new Set;function v(e,t,n,l,r){if(r||s.isLocalURL(t)){if(!l.bypassPrefetchedCheck){let r=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+r;if(y.has(o))return;y.add(o)}Promise.resolve(e.prefetch(t,n,l)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let b=o.default.forwardRef(function(e,t){let n,l;let{href:i,as:y,children:b,prefetch:x,passHref:j,replace:w,shallow:C,scroll:E,locale:_,onClick:k,onMouseEnter:S,onTouchStart:M,legacyBehavior:$=!1}=e,T=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,$&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let O=!1!==x,L=o.default.useContext(d.RouterContext),N=o.default.useContext(f.AppRouterContext),P=null!=L?L:N,I=!L,{href:R,as:H}=o.default.useMemo(()=>{if(!L){let e=g(i);return{href:e,as:y?g(y):e}}let[e,t]=a.resolveHref(L,i,!0);return{href:e,as:y?a.resolveHref(L,y):t||e}},[L,i,y]),A=o.default.useRef(R),B=o.default.useRef(H);$&&(l=o.default.Children.only(n));let K=$?l&&"object"==typeof l&&l.ref:t,[z,U,D]=m.useIntersection({rootMargin:"200px"}),F=o.default.useCallback(e=>{(B.current!==H||A.current!==R)&&(D(),B.current=H,A.current=R),z(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[H,K,R,D,z]);o.default.useEffect(()=>{P&&U&&O&&v(P,R,H,{locale:_},I)},[H,R,U,_,O,null==L?void 0:L.locale,P,I]);let J={ref:F,onClick(e){$||"function"!=typeof k||k(e),$&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,l,r,a,i,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!s.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,l,{shallow:a,locale:c,scroll:i}):t[r?"replace":"push"](l||n,{forceOptimisticNavigation:!d})};u?o.default.startTransition(h):h()}(e,P,R,H,w,C,E,_,I,O)},onMouseEnter(e){$||"function"!=typeof S||S(e),$&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),P&&(O||!I)&&v(P,R,H,{locale:_,priority:!0,bypassPrefetchedCheck:!0},I)},onTouchStart(e){$||"function"!=typeof M||M(e),$&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),P&&(O||!I)&&v(P,R,H,{locale:_,priority:!0,bypassPrefetchedCheck:!0},I)}};if(c.isAbsoluteUrl(H))J.href=H;else if(!$||j||"a"===l.type&&!("href"in l.props)){let e=void 0!==_?_:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(H,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);J.href=t||p.addBasePath(u.addLocale(H,e,null==L?void 0:L.defaultLocale))}return $?o.default.cloneElement(l,J):o.default.createElement("a",Object.assign({},T,J),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!o,[u,d]=l.useState(!1),f=l.useRef(null),m=l.useCallback(e=>{f.current=e},[]);l.useEffect(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName){let l=function(e,t,n){let{id:l,observer:r,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},l=s.find(e=>e.root===n.root&&e.margin===n.margin);if(l&&(t=a.get(l)))return t;let r=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:r},s.push(n),a.set(n,t),t}(n);return o.set(e,t),r.observe(e),function(){if(o.delete(e),r.unobserve(e),0===o.size){r.disconnect(),a.delete(l);let e=s.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return l}}else if(!u){let e=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=l.useCallback(()=>{d(!1)},[]);return[m,u,h]};var l=n(7294),r=n(29);let o="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5290:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var l=n(5893),r=n(7294);let o=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=(0,r.createContext)(void 0),c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:c=u,defaultTheme:d=n?"system":"light",attribute:y="data-theme",value:v,children:g,nonce:b})=>{let[x,j]=(0,r.useState)(()=>m(s,d)),[w,C]=(0,r.useState)(()=>m(s)),E=v?Object.values(v):c,_=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=p());let a=v?v[r]:r,s=t?h():null,i=document.documentElement;if("class"===y?(i.classList.remove(...E),a&&i.classList.add(a)):a?i.setAttribute(y,a):i.removeAttribute(y),l){let e=o.includes(d)?d:null,t=o.includes(r)?r:e;i.style.colorScheme=t}null==s||s()},[]),k=(0,r.useCallback)(e=>{j(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),S=(0,r.useCallback)(t=>{let l=p(t);C(l),"system"===x&&n&&!e&&_("system")},[x,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(S),S(e),()=>e.removeListener(S)},[S]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&k(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),(0,r.useEffect)(()=>{_(null!=e?e:x)},[e,x]);let M=(0,r.useMemo)(()=>({theme:x,setTheme:k,forcedTheme:e,resolvedTheme:"system"===x?w:x,themes:n?[...c,"system"]:c,systemTheme:n?w:void 0}),[x,k,e,w,n,c]);return r.createElement(i.Provider,{value:M},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:s,themes:c,defaultTheme:d,attribute:y,value:v,children:g,attrs:E,nonce:b}),g)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:c,attrs:u,nonce:d})=>{let f="system"===i,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=s?o.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,l=!0)=>{let r=c?c[e]:e,a=t?e+"|| ''":`'${r}'`,i="";return s&&l&&!t&&o.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||r?`c.add(${a})`:"null":r&&(i+=`d[s](n,${a})`),i},y=e?`!function(){${m}${p(e)}}()`:l?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),m=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light");var y=n(1697);n(3814);var v=function(e){let{Component:t,pageProps:n}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c,{enableSystem:!0,attribute:"class",children:[(0,l.jsx)(y.default,{}),(0,l.jsx)(t,{...n})]})})}},1697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var l=n(5893),r=n(1664),o=n.n(r),a=n(7294);let s=a.forwardRef(function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))});var i=function(){let e=()=>{let e=document.getElementById("mobile-menu");e.classList.toggle("hidden")},t=()=>{let e=document.getElementById("mobile-menu");e.classList.add("hidden")};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("nav",{className:"text-indigo-100 bg-indigo-600",children:(0,l.jsx)("div",{className:"max-w-2xl py-4 px-8 mx-auto lg:max-w-5xl",children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)(o(),{href:"/",children:"Gauthaman Sahadevan"}),(0,l.jsxs)("ul",{className:"hidden md:flex justify-end space-x-12",children:[(0,l.jsx)("li",{children:(0,l.jsx)(o(),{href:"/blog",children:(0,l.jsx)("span",{children:"Blog"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(o(),{href:"/hire-me",children:(0,l.jsx)("span",{className:"px-6 py-2 text-yellow-100 bg-yellow-600 rounded-full",children:"Hire Me"})})})]}),(0,l.jsx)("div",{className:"md:hidden flex items-center",children:(0,l.jsx)("button",{onClick:e,children:(0,l.jsx)(s,{className:"w-6 h-6"})})})]})})}),(0,l.jsxs)("div",{id:"mobile-menu",className:"hidden md:hidden flex flex-col absolute w-full px-8 bg-gray-100",children:[(0,l.jsx)(o(),{href:"/blog",children:(0,l.jsx)("span",{className:"py-2 px-4 text-sm",onClick:t,children:"Blog"})}),(0,l.jsx)(o(),{href:"/hire-me",children:(0,l.jsx)("span",{className:"py-2 px-4 text-sm",onClick:t,children:"Hire Me"})})]})]})}},3814:function(){},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);