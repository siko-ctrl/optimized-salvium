(()=>{var n;function a(){let e=document.getElementById("particles");if(!e)return;let t=document.createElement("div"),i=Math.random()*2+2;t.style.width=`${i}px`,t.style.height=`${i}px`,t.style.backgroundColor="#40E0D0",t.style.position="absolute",t.style.borderRadius="50%",t.style.opacity="0.1",t.style.pointerEvents="none";let r=Math.random()*window.innerWidth,s=Math.random()*window.innerHeight;t.style.left=`${r}px`,t.style.top=`${s}px`,e.appendChild(t);let d=t.animate([{transform:"translate(0, 0)",opacity:.1},{transform:`translate(${Math.random()*100-50}px, ${Math.random()*100-50}px)`,opacity:0}],{duration:Math.random()*3e3+2e3,easing:"cubic-bezier(0.4, 0, 0.2, 1)"});d.onfinish=()=>{t.parentNode&&(t.remove(),n&&a())}}function o(){if(n)return;n=!0;let e=document.getElementById("particles");if(e){e.innerHTML="";for(let t=0;t<20;t++)a()}}document.addEventListener("DOMContentLoaded",o);document.addEventListener("visibilitychange",()=>{document.hidden?n=!1:o()});})();