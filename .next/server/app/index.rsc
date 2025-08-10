1:"$Sreact.fragment"
7:I[8393,[],""]
:HL["/_next/static/media/e4af272ccee01ff0-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/css/b8a80d6e78f79db6.css","style"]
2:T8eb,
            /* Critical above-the-fold styles */
            :root {
              --background: 0 0% 100%;
              --foreground: 222.2 84% 4.9%;
              --brand-primary: 174 64% 41%;
              --brand-primary-light: 174 64% 51%;
              --brand-secondary: 180 67% 15%;
              --brand-accent: 39 100% 71%;
            }
            * { box-sizing: border-box; }
            body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              background-color: hsl(var(--background));
              color: hsl(var(--foreground));
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              line-height: 1.5;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            h1, h2, h3, h4, h5, h6 {
              margin: 0 0 1rem 0;
              font-weight: 700;
              line-height: 1.2;
            }
            h1 { font-size: 3rem; }
            h2 { font-size: 2.25rem; }
            h3 { font-size: 1.875rem; }
            .container-max {
              width: 100%;
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }
            @media (min-width: 640px) {
              .container-max { padding: 0 1.5rem; }
            }
            @media (min-width: 768px) {
              .container-max { padding: 0 2rem; }
            }
            @media (min-width: 1024px) {
              .container-max { padding: 0 3rem; }
            }
            .btn-primary {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 1rem 2rem;
              background: hsl(var(--brand-primary));
              color: white;
              border: none;
              border-radius: 0.375rem;
              font-size: 1.125rem;
              font-weight: 600;
              text-decoration: none;
              cursor: pointer;
            }
            .btn-primary:hover {
              background: hsl(var(--brand-primary-light));
            }
            *:focus-visible {
              outline: 2px solid hsl(var(--brand-primary));
              outline-offset: 2px;
            }
          3:T658,
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Performance Metrics:', {
                        'Time to First Byte': perfData.responseStart - perfData.requestStart + 'ms',
                        'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.navigationStart + 'ms',
                        'Load Complete': perfData.loadEventEnd - perfData.navigationStart + 'ms'
                      });
                    }
                  }, 0);
                });
              }
              
              // CLS monitoring
              let clsValue = 0;
              let clsEntries = [];
              
              function updateCLS() {
                clsValue = clsEntries.reduce((sum, entry) => sum + entry.value, 0);
                console.log('Current CLS:', clsValue);
              }
              
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                      clsEntries.push(entry);
                      updateCLS();
                    }
                  }
                });
                observer.observe({ entryTypes: ['layout-shift'] });
              }
            0:{"P":null,"b":"G7JN7UuVvXdVL6CY5EDeV","p":"","c":["",""],"i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b8a80d6e78f79db6.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"__variable_e8ce0c","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://images.unsplash.com"}],["$","link",null,{"rel":"preconnect","href":"https://via.placeholder.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//fonts.googleapis.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//fonts.gstatic.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//images.unsplash.com"}],["$","link",null,{"rel":"preload","href":"/critical.css","as":"style"}],["$","link",null,{"rel":"preload","href":"/fonts/inter-var.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"prefetch","href":"/non-critical.css","as":"style"}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}]]}],"$L4"]}]]}],{"children":["__PAGE__","$L5",{},null,false]},null,false],"$L6",false]],"m":"$undefined","G":["$7",[]],"s":false,"S":true}
8:I[9351,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-cdeadf69b738503e.js"],"default"]
9:I[7555,[],""]
a:I[1295,[],""]
b:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","345","static/chunks/app/not-found-ab27c97d0d79f853.js"],""]
c:I[6109,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-cdeadf69b738503e.js"],"default"]
e:"$Sreact.suspense"
f:I[160,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
10:I[307,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
11:I[4071,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
12:I[7978,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
13:I[1064,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
14:I[9261,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
15:I[2740,["410","static/chunks/410-c6c798bd365ea244.js","730","static/chunks/730-5ec04baa4c5efcc2.js","974","static/chunks/app/page-c4d0e79edc82a2e0.js"],"default"]
16:I[9665,[],"OutletBoundary"]
18:I[4911,[],"AsyncMetadataOutlet"]
1a:I[9665,[],"ViewportBoundary"]
1c:I[9665,[],"MetadataBoundary"]
d:T87a,
              // Lazy load non-critical resources
              function lazyLoadCSS(href) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
              }
              
              // Load non-critical CSS after page load
              window.addEventListener('load', () => {
                setTimeout(() => {
                  lazyLoadCSS('/non-critical.css');
                }, 1000);
              });
              
              // Load non-critical CSS when user starts interacting
              let userInteracted = false;
              const interactionEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
              
              function handleUserInteraction() {
                if (!userInteracted) {
                  userInteracted = true;
                  lazyLoadCSS('/non-critical.css');
                  // Remove event listeners after first interaction
                  interactionEvents.forEach(event => {
                    document.removeEventListener(event, handleUserInteraction);
                  });
                }
              }
              
              interactionEvents.forEach(event => {
                document.addEventListener(event, handleUserInteraction, { passive: true });
              });
              
              // Intersection Observer for lazy loading images
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                      observer.unobserve(img);
                    }
                  });
                });
                
                document.querySelectorAll('img[data-src]').forEach(img => {
                  imageObserver.observe(img);
                });
              }
            4:["$","body",null,{"className":"__className_e8ce0c","children":[["$","a",null,{"href":"#main-content","className":"skip-link","children":"Skip to main content"}],["$","$L8",null,{}],["$","main",null,{"id":"main-content","role":"main","children":["$","$L9",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"min-h-screen bg-black flex items-center justify-center","children":["$","div",null,{"className":"text-center","children":["$","div",null,{"className":"animate-fade-in","children":[["$","h1",null,{"className":"text-8xl md:text-9xl font-bold gradient-text mb-4 animate-scale-in","children":"404"}],["$","h2",null,{"className":"text-2xl md:text-3xl font-semibold text-white mb-4 animate-fade-in","children":"Page Not Found"}],["$","p",null,{"className":"text-gray-400 text-lg mb-8 max-w-md mx-auto animate-fade-in","children":"The page you're looking for doesn't exist. It might have been moved or deleted."}],["$","div",null,{"className":"flex flex-col sm:flex-row gap-4 justify-center animate-fade-in","children":[["$","$Lb",null,{"href":"/","className":"inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white font-semibold rounded-lg hover:from-[#e6c244] hover:to-[#d4af37] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-house w-5 h-5 mr-2","aria-hidden":"true","children":[["$","path","5wwlr5",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["$","path","1d0kgt",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],"$undefined"]}],"Go Home"]}],["$","$Lb",null,{"href":"/","className":"inline-flex items-center justify-center px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-left w-5 h-5 mr-2","aria-hidden":"true","children":[["$","path","1l729n",{"d":"m12 19-7-7 7-7"}],["$","path","x3x0zl",{"d":"M19 12H5"}],"$undefined"]}],"Go Back"]}]]}],["$","div",null,{"className":"mt-12 p-6 glass rounded-xl max-w-md mx-auto animate-fade-in","children":[["$","div",null,{"className":"flex items-center mb-4","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-search w-5 h-5 text-[#d4af37] mr-2","aria-hidden":"true","children":[["$","path","14j7rj",{"d":"m21 21-4.34-4.34"}],["$","circle","4ej97u",{"cx":"11","cy":"11","r":"8"}],"$undefined"]}],["$","h3",null,{"className":"text-white font-semibold","children":"Looking for something specific?"}]]}],["$","div",null,{"className":"space-y-2 text-sm","children":[["$","$Lb",null,{"href":"/features","className":"block text-gray-300 hover:text-white transition-colors","children":"→ View our features"}],["$","$Lb",null,{"href":"/how-it-works","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Learn how it works"}],["$","$Lb",null,{"href":"/faq","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Check our FAQ"}],["$","$Lb",null,{"href":"/contact","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Contact support"}]]}]]}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$Lc",null,{}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$d"}}]]}]
5:["$","$1","c",{"children":[["$","div",null,{"className":"w-full bg-black text-white overflow-x-hidden","children":[["$","section",null,{"id":"hero","className":"relative w-full flex items-center justify-center min-h-screen","children":["$","$e",null,{"fallback":["$","$Lf",null,{}],"children":["$","$L10",null,{}]}]}],["$","section",null,{"id":"features","className":"relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32","children":["$","$e",null,{"fallback":["$","$Lf",null,{}],"children":["$","$L11",null,{}]}]}],["$","section",null,{"id":"how-it-works","className":"relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32","children":["$","$e",null,{"fallback":["$","$Lf",null,{}],"children":["$","$L12",null,{}]}]}],["$","section",null,{"id":"trust","className":"relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32","children":["$","$e",null,{"fallback":["$","$Lf",null,{}],"children":["$","$L13",null,{}]}]}],["$","section",null,{"id":"faq","className":"relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32","children":["$","$e",null,{"fallback":["$","$Lf",null,{}],"children":["$","$L14",null,{}]}]}],["$","section",null,{"id":"download","className":"relative w-full flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32","children":["$","$e",null,{"fallback":["$","$Lf",null,{}],"children":["$","$L15",null,{}]}]}]]}],null,["$","$L16",null,{"children":["$L17",["$","$L18",null,{"promise":"$@19"}]]}]]}]
6:["$","$1","h",{"children":[null,[["$","$L1a",null,{"children":"$L1b"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L1c",null,{"children":["$","div",null,{"hidden":true,"children":["$","$e",null,{"fallback":null,"children":"$L1d"}]}]}]]}]
1b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
17:null
19:{"metadata":[["$","title","0",{"children":"CommuteTimely - Never Be Late Again | Smart Commute Notifications"}],["$","meta","1",{"name":"description","content":"Get intelligent notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling. Join the waitlist for early access."}],["$","meta","2",{"name":"author","content":"CommuteTimely Team"}],["$","meta","3",{"name":"keywords","content":"commute, notifications, traffic, smart notifications, leave on time, commute app, traffic alerts, public transport, walking, cycling, car, bus, train"}],["$","meta","4",{"name":"creator","content":"CommuteTimely"}],["$","meta","5",{"name":"publisher","content":"CommuteTimely"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://commutetimely.com"}],["$","meta","9",{"name":"format-detection","content":"telephone=no, address=no, email=no"}],["$","meta","10",{"name":"google-site-verification","content":"your-google-verification-code"}],["$","meta","11",{"property":"og:title","content":"CommuteTimely - Never Be Late Again"}],["$","meta","12",{"property":"og:description","content":"Smart notifications that tell you exactly when to leave. Works with all transport modes."}],["$","meta","13",{"property":"og:url","content":"https://commutetimely.com"}],["$","meta","14",{"property":"og:site_name","content":"CommuteTimely"}],["$","meta","15",{"property":"og:locale","content":"en_US"}],["$","meta","16",{"property":"og:image","content":"https://commutetimely.com/og-image.jpg"}],["$","meta","17",{"property":"og:image:width","content":"1200"}],["$","meta","18",{"property":"og:image:height","content":"630"}],["$","meta","19",{"property":"og:image:alt","content":"CommuteTimely - Smart commute notifications app"}],["$","meta","20",{"property":"og:type","content":"website"}],["$","meta","21",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","22",{"name":"twitter:creator","content":"@commutetimely"}],["$","meta","23",{"name":"twitter:title","content":"CommuteTimely - Never Be Late Again"}],["$","meta","24",{"name":"twitter:description","content":"Smart notifications that tell you exactly when to leave. Works with all transport modes."}],["$","meta","25",{"name":"twitter:image","content":"https://commutetimely.com/og-image.jpg"}]],"error":null,"digest":"$undefined"}
1d:"$19:metadata"
