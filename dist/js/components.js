(()=>{document.addEventListener("DOMContentLoaded",async()=>{let o=document.getElementById("header");if(o)try{let n=await(await fetch("../components/header.html")).text();o.innerHTML=n;let t=document.querySelector("[data-mobile-menu]"),a=document.querySelector("[data-mobile-menu-panel]");t&&a&&t.addEventListener("click",()=>{let c=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!c),a.classList.toggle("hidden")})}catch(e){console.error("Error loading header:",e)}let r=document.getElementById("footer");if(r)try{let n=await(await fetch("../components/footer.html")).text();r.innerHTML=n}catch(e){console.error("Error loading footer:",e)}let s=window.location.pathname;document.querySelectorAll("nav a").forEach(e=>{e.getAttribute("href")===s&&(e.classList.add("text-[#40E0D0]"),e.classList.add("font-semibold"))})});})();
