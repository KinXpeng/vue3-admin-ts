import{l as j,n as h,u as $,g as x,o as F,r as O}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{m as S,w as E,j as C,n as I,p as A}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";var M=Object.defineProperty,R=Object.defineProperties,V=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))W.call(t,r)&&g(e,r,t[r]);if(P)for(var r of P(t))L.call(t,r)&&g(e,r,t[r]);return e},U=(e,t)=>R(e,V(t));function K(e,t){var r;const n=j();return S(()=>{n.value=e()},U(N({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),h(n)}var y;const T=typeof window<"u",Q=e=>typeof e<"u",X=e=>typeof e=="function",Y=e=>typeof e=="string",p=()=>{},Z=T&&((y=window==null?void 0:window.navigator)==null?void 0:y.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function d(e){return typeof e=="function"?e():$(e)}function b(e,t){function r(...n){return new Promise((o,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(i)})}return r}function q(e,t={}){let r,n,o=p;const i=s=>{clearTimeout(s),o(),o=p};return s=>{const u=d(e),a=d(t.maxWait);return r&&i(r),u<=0||a!==void 0&&a<=0?(n&&(i(n),n=null),Promise.resolve(s())):new Promise((c,m)=>{o=t.rejectOnCancel?m:c,a&&!n&&(n=setTimeout(()=>{r&&i(r),n=null,c(s())},a)),r=setTimeout(()=>{n&&i(n),n=null,c(s())},u)})}}function z(e,t=!0,r=!0,n=!1){let o=0,i,l=!0,s=p,u;const a=()=>{i&&(clearTimeout(i),i=void 0,s(),s=p)};return m=>{const f=d(e),v=Date.now()-o,w=()=>u=m();return a(),f<=0?(o=Date.now(),w()):(v>f&&(r||!l)?(o=Date.now(),w()):t&&(u=new Promise((_,D)=>{s=n?D:_,i=setTimeout(()=>{o=Date.now(),l=!0,_(w()),a()},Math.max(0,f-v))})),!r&&!i&&(i=setTimeout(()=>l=!0,f)),l=!1,u)}}function k(e){return e}function B(e){return x()?(F(e),!0):!1}function G(e,t=200,r={}){return b(q(t,r),e)}function ee(e,t=200,r={}){const n=O(e.value),o=G(()=>{n.value=e.value},t,r);return E(e,()=>o()),n}function te(e,t=200,r=!1,n=!0,o=!1){return b(z(t,r,n,o),e)}function re(e,t=!0){C()?I(e):t?e():A(e)}function ne(e,t,r={}){const{immediate:n=!0}=r,o=O(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function s(){o.value=!1,l()}function u(...a){l(),o.value=!0,i=setTimeout(()=>{o.value=!1,i=null,e(...a)},d(t))}return n&&(o.value=!0,T&&u()),B(s),{isPending:h(o),start:u,stop:s}}export{T as a,Z as b,re as c,k as d,X as e,Q as f,ee as g,ne as h,Y as i,K as j,p as n,d as r,B as t,te as u};