if (!window.__wixMonitoring && !location.pathname.startsWith('/_wix/extensions/backoffice')) {
  window.__wixMonitoring = {
    queue: [],
    originalMethods: {},
  };

  ["debug","error","info","log","warn"].forEach((method) => {
    window.__wixMonitoring.originalMethods[method] = console[method];

    console[method] = (...args) => {
      let stack = '';

      try { throw Error() } catch(e) { stack = e.stack; } 

      window.__wixMonitoring.queue.push({method, stack, timestamp: Date.now(), args });
      window.__wixMonitoring.originalMethods[method].apply(console, args);
    };
  });
}

/* ===== INLINE JAVASCRIPT ===== */

window.commonConfig = {
        locale: "en-US", language: "en"
      };

/* ===== INLINE JAVASCRIPT ===== */

window.essentials = {
        locale: "en-US", language: "en", timeZone: "Asia/Jakarta"
      };

/* ===== INLINE JAVASCRIPT ===== */

window.wixEmbedsAPI = {
          registerToEvent: () => {},
          getExternalBaseUrl: () => "https://www.wixapis.com",
          getHtmlSiteId: () => "dummy-site-id",
          getMetaSiteId: () => "e81595be-bc8a-4f40-b371-99dcffe80d6c",
          getLanguage: () => "en",
          isWixSite: () => false,
          getAccessTokenFunction: function getAccessTokenFunction() { return () => window.__wix_context__?.client?.auth?.getAuthHeaders?.()?.then((res) =>  {  return res.headers.Authorization })}
        };

/* ===== INLINE JAVASCRIPT ===== */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("site-bi",[],t):"object"==typeof exports?exports["site-bi"]=t():e["site-bi"]=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{resetNavigation:()=>r});let o=1;const n=()=>++o;let i=new URL(document.location.href);const r=()=>{i=new URL(window.location.origin+"/__dummy__")},a=e=>{if(!e)return;let t=null;try{const o="string"==typeof e&&e.startsWith("/")?window.location.origin+e:e;t=new URL(o)}catch(e){}if(t&&t.origin===i.origin){if(t.pathname!==i.pathname){const e=n();setTimeout((()=>{window.dispatchEvent(new CustomEvent("wix:bi:navigation",{detail:{pageNumber:e}}))}))}i=t}};return["pushState","replaceState"].forEach((e=>{const t=window.history[e];window.history[e]=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];a(o[2]),t.apply(window.history,o)}})),window.addEventListener("popstate",(()=>a(window.location.href))),t})()));
//# sourceMappingURL=site-bi-navigation.umd.min.js.map

/* ===== INLINE JAVASCRIPT ===== */

// Close button functionality
      document.getElementById('wixvibe-banner-close').onclick = function(event) {
        event.stopPropagation(); // Prevent banner click when close button is clicked
        document.getElementById('wixvibe-banner-container').style.display = 'none';
        return false;
      };

/* ===== INLINE JAVASCRIPT ===== */

(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();

/* ===== INLINE JAVASCRIPT ===== */

(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

/* ===== INLINE JAVASCRIPT ===== */

document.addEventListener("DOMContentLoaded", function() {
          window.wixAnalytics.trackEvent('PageView', { pageNumber: 1 });

          window.addEventListener('wix:bi:navigation', function(e) {
            window.wixAnalytics.trackEvent('PageView', { pageNumber: e.detail.pageNumber });
          });
        });

/* ===== INLINE JAVASCRIPT ===== */

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'99b22d57cb4e216d',t:'MTc2MjU3NDU3MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();