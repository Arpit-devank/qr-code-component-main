(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function s(i){let r=0;const o=n=>{r=n,i.innerHTML=`count is ${r}`};i.addEventListener("click",()=>o(r+100)),o(0)}document.querySelector("#app").innerHTML=`
<main>
<div class="container">
<img src="images/image-qr-code.png" title="frontend mentor QR Code">
  <h1>Improve your front-end skills by building projects
  </h1>

  <p>
  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
  </p>
</div>
</main>
`;s(document.querySelector("#counter"));
