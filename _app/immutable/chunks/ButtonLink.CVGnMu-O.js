import{s as v,d as _,e as d,u as y,g as k,f as C,h as g,i as N,j}from"./scheduler.I8ougQwK.js";import{S as z,i as A,e as B,c as S,a as T,d as m,y as b,g as q,z as E,n as L,l as O}from"./index.CF0UJEMS.js";function H(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function P(e,t){const s={},n={},r={$$scope:1};let u=e.length;for(;u--;){const l=e[u],o=t[u];if(o){for(const a in l)a in o||(n[a]=1);for(const a in o)r[a]||(s[a]=o[a],r[a]=1);e[u]=o}else for(const a in l)r[a]=1}for(const l in n)l in s||(s[l]=void 0);return s}function p(e){var t,s,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(s=p(e[t]))&&(n&&(n+=" "),n+=s)}else for(s in e)e[s]&&(n&&(n+=" "),n+=s);return n}function h(){for(var e,t,s=0,n="",r=arguments.length;s<r;s++)(e=arguments[s])&&(t=p(e))&&(n&&(n+=" "),n+=t);return n}function U(e){let t,s,n,r,u;const l=e[4].default,o=_(l,e,e[3],null);let a=[e[2],{class:s=h("relative inline-flex items-center justify-center h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 outline-none ring-orange-300 transition-colors hover:border-orange-200/40 hover:text-orange-300 focus:ring-2","after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-orange-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 after:hover:bg-opacity-15",e[0])}],f={};for(let i=0;i<a.length;i+=1)f=d(f,a[i]);return{c(){t=B("button"),o&&o.c(),this.h()},l(i){t=S(i,"BUTTON",{class:!0});var c=T(t);o&&o.l(c),c.forEach(m),this.h()},h(){b(t,f)},m(i,c){q(i,t,c),o&&o.m(t,null),t.autofocus&&t.focus(),n=!0,r||(u=E(t,"click",function(){j(e[1])&&e[1].apply(this,arguments)}),r=!0)},p(i,[c]){e=i,o&&o.p&&(!n||c&8)&&y(o,l,e,e[3],n?C(l,e[3],c,null):k(e[3]),null),b(t,f=P(a,[c&4&&e[2],(!n||c&1&&s!==(s=h("relative inline-flex items-center justify-center h-fit w-fit rounded-full border border-violet-100/20 bg-violet-200/10 px-4 py-2 text-violet-200 outline-none ring-orange-300 transition-colors hover:border-orange-200/40 hover:text-orange-300 focus:ring-2","after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-orange-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 after:hover:bg-opacity-15",e[0])))&&{class:s}]))},i(i){n||(L(o,i),n=!0)},o(i){O(o,i),n=!1},d(i){i&&m(t),o&&o.d(i),r=!1,u()}}}function D(e,t,s){const n=["className","onClick"];let r=g(t,n),{$$slots:u={},$$scope:l}=t,{className:o=void 0}=t,{onClick:a}=t;return e.$$set=f=>{t=d(d({},t),N(f)),s(2,r=g(t,n)),"className"in f&&s(0,o=f.className),"onClick"in f&&s(1,a=f.onClick),"$$scope"in f&&s(3,l=f.$$scope)},[o,a,r,l,u]}class I extends z{constructor(t){super(),A(this,t,D,U,v,{className:0,onClick:1})}}export{I as B,h as c,H as e,P as g};