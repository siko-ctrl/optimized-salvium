(()=>{var a="salvium-cache-v1",c=["./","./css/output.css","./dist/js/header.js","./dist/js/footer.js","./dist/js/components.js","./images/salvium_coin_square_white_512x512px_transparent.png","./images/salvium_wordmark_white_512x512px_transparent.png"];self.addEventListener("install",e=>{e.waitUntil(caches.open(a).then(t=>t.addAll(c)))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(t=>Promise.all(t.filter(s=>s!==a).map(s=>caches.delete(s)))))});self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).then(t=>{if(t.ok){let s=t.clone();caches.open(a).then(n=>n.put(e.request,s))}return t}).catch(()=>caches.match(e.request)))});})();