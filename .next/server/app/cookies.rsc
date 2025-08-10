1:"$Sreact.fragment"
8:I[8393,[],""]
:HL["/_next/static/media/e4af272ccee01ff0-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/css/bd35b120f25838a3.css","style"]
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
          3:T1176,
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      const metrics = {
                        'Time to First Byte': perfData.responseStart - perfData.requestStart + 'ms',
                        'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.navigationStart + 'ms',
                        'Load Complete': perfData.loadEventEnd - perfData.navigationStart + 'ms'
                      };
                      console.log('Performance Metrics:', metrics);
                      
                      // Send to analytics if available
                      if (window.gtag) {
                        window.gtag('event', 'performance_metrics', metrics);
                      }
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
                
                // Send to analytics if available
                if (window.gtag && clsValue > 0.1) {
                  window.gtag('event', 'high_cls', { value: clsValue });
                }
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
              
              // Error logging and monitoring
              window.addEventListener('error', (event) => {
                console.error('JavaScript Error:', event.error);
                
                // Send to analytics if available
                if (window.gtag) {
                  window.gtag('event', 'exception', {
                    description: event.error?.message || 'Unknown error',
                    fatal: false
                  });
                }
              });
              
              // Unhandled promise rejection monitoring
              window.addEventListener('unhandledrejection', (event) => {
                console.error('Unhandled Promise Rejection:', event.reason);
                
                // Send to analytics if available
                if (window.gtag) {
                  window.gtag('event', 'exception', {
                    description: 'Unhandled promise rejection: ' + (event.reason?.message || 'Unknown'),
                    fatal: false
                  });
                }
              });
              
              // Core Web Vitals monitoring
              if ('PerformanceObserver' in window) {
                // LCP monitoring
                const lcpObserver = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  console.log('LCP:', lastEntry.startTime + 'ms');
                  
                  if (window.gtag) {
                    window.gtag('event', 'lcp', { value: lastEntry.startTime });
                  }
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                
                // FID monitoring
                const fidObserver = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime + 'ms');
                    
                    if (window.gtag) {
                      window.gtag('event', 'fid', { value: entry.processingStart - entry.startTime });
                    }
                  });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
              }
            0:{"P":null,"b":"Nsdkj4qFeuEWzvqHjsgjL","p":"","c":["","cookies"],"i":false,"f":[[["",{"children":["cookies",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/bd35b120f25838a3.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"__variable_e8ce0c","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://images.unsplash.com"}],["$","link",null,{"rel":"preconnect","href":"https://via.placeholder.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//fonts.googleapis.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//fonts.gstatic.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//images.unsplash.com"}],["$","link",null,{"rel":"preload","href":"/critical.css","as":"style"}],["$","link",null,{"rel":"preload","href":"/fonts/inter-var.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"prefetch","href":"/non-critical.css","as":"style"}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}]]}],"$L4"]}]]}],{"children":["cookies","$L5",{"children":["__PAGE__","$L6",{},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[9351,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-8c9f3dee8f195d23.js"],"default"]
a:I[7555,[],""]
b:I[1295,[],""]
c:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","345","static/chunks/app/not-found-1a1fc138394e4841.js"],""]
d:I[6109,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-8c9f3dee8f195d23.js"],"default"]
e:I[1828,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-8c9f3dee8f195d23.js"],"Analytics"]
18:I[9665,[],"ViewportBoundary"]
1a:I[9665,[],"MetadataBoundary"]
1b:"$Sreact.suspense"
f:T87a,
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
            4:["$","body",null,{"className":"__className_e8ce0c","children":[["$","a",null,{"href":"#main-content","className":"skip-link","children":"Skip to main content"}],["$","$L9",null,{}],["$","main",null,{"id":"main-content","role":"main","children":["$","$La",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Lb",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"min-h-screen bg-black flex items-center justify-center","children":["$","div",null,{"className":"text-center","children":["$","div",null,{"className":"animate-fade-in","children":[["$","h1",null,{"className":"text-8xl md:text-9xl font-bold gradient-text mb-4 animate-scale-in","children":"404"}],["$","h2",null,{"className":"text-2xl md:text-3xl font-semibold text-white mb-4 animate-fade-in","children":"Page Not Found"}],["$","p",null,{"className":"text-gray-400 text-lg mb-8 max-w-md mx-auto animate-fade-in","children":"The page you're looking for doesn't exist. It might have been moved or deleted."}],["$","div",null,{"className":"flex flex-col sm:flex-row gap-4 justify-center animate-fade-in","children":[["$","$Lc",null,{"href":"/","className":"inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white font-semibold rounded-lg hover:from-[#e6c244] hover:to-[#d4af37] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-house w-5 h-5 mr-2","aria-hidden":"true","children":[["$","path","5wwlr5",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["$","path","1d0kgt",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],"$undefined"]}],"Go Home"]}],["$","$Lc",null,{"href":"/","className":"inline-flex items-center justify-center px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-left w-5 h-5 mr-2","aria-hidden":"true","children":[["$","path","1l729n",{"d":"m12 19-7-7 7-7"}],["$","path","x3x0zl",{"d":"M19 12H5"}],"$undefined"]}],"Go Back"]}]]}],["$","div",null,{"className":"mt-12 p-6 glass rounded-xl max-w-md mx-auto animate-fade-in","children":[["$","div",null,{"className":"flex items-center mb-4","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-search w-5 h-5 text-[#d4af37] mr-2","aria-hidden":"true","children":[["$","path","14j7rj",{"d":"m21 21-4.34-4.34"}],["$","circle","4ej97u",{"cx":"11","cy":"11","r":"8"}],"$undefined"]}],["$","h3",null,{"className":"text-white font-semibold","children":"Looking for something specific?"}]]}],["$","div",null,{"className":"space-y-2 text-sm","children":[["$","$Lc",null,{"href":"/features","className":"block text-gray-300 hover:text-white transition-colors","children":"→ View our features"}],["$","$Lc",null,{"href":"/how-it-works","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Learn how it works"}],["$","$Lc",null,{"href":"/faq","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Check our FAQ"}],["$","$Lc",null,{"href":"/contact","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Contact support"}]]}]]}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$Ld",null,{}],["$","$Le",null,{}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$f"}}]]}]
5:["$","$1","c",{"children":[null,["$","$La",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Lb",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
6:["$","$1","c",{"children":[["$","div",null,{"className":"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900","children":[["$","div",null,{"className":"container-max py-16 sm:py-20 md:py-24","children":["$","div",null,{"className":"text-center space-y-6","children":[["$","h1",null,{"className":"text-4xl sm:text-5xl md:text-6xl font-bold text-white","children":"Cookie Policy"}],["$","p",null,{"className":"text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto","children":"Understanding how we use cookies to improve your CommuteTimely experience"}],["$","p",null,{"className":"text-sm text-gray-400","children":["Last updated: ","8/10/2025"]}]]}]}],["$","div",null,{"className":"container-max pb-16","children":["$","div",null,{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12","children":[["$","h2",null,{"className":"text-3xl sm:text-4xl font-bold text-white mb-6","children":"What Are Cookies?"}],["$","p",null,{"className":"text-lg text-gray-300 leading-relaxed mb-6","children":"Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content."}],["$","p",null,{"className":"text-lg text-gray-300 leading-relaxed","children":"We use cookies and similar technologies to ensure our website works properly, to understand how you interact with our services, and to improve your experience."}]]}]}],["$","div",null,{"className":"container-max pb-16","children":[["$","h2",null,{"className":"text-3xl sm:text-4xl font-bold text-white text-center mb-12","children":"Types of Cookies We Use"}],["$","div",null,{"className":"space-y-6","children":[["$","div","0",{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8","children":[["$","div",null,{"className":"flex items-start justify-between mb-4","children":[["$","h3",null,{"className":"text-xl sm:text-2xl font-bold text-white","children":"Essential Cookies"}],["$","span",null,{"className":"bg-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full","children":"Necessary"}]]}],["$","p",null,{"className":"text-gray-300 leading-relaxed mb-4","children":"These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas."}],["$","div",null,{"className":"space-y-2","children":[["$","p",null,{"className":"text-sm font-medium text-gray-400","children":"Examples:"}],["$","ul",null,{"className":"list-disc list-inside text-gray-300 space-y-1","children":[["$","li","0",{"className":"text-sm","children":"Authentication cookies"}],["$","li","1",{"className":"text-sm","children":"Security cookies"}],["$","li","2",{"className":"text-sm","children":"Session cookies"}]]}]]}]]}],["$","div","1",{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8","children":[["$","div",null,{"className":"flex items-start justify-between mb-4","children":[["$","h3",null,{"className":"text-xl sm:text-2xl font-bold text-white","children":"Performance Cookies"}],false]}],["$","p",null,{"className":"text-gray-300 leading-relaxed mb-4","children":"These cookies collect information about how visitors use the website, helping us improve performance and user experience."}],["$","div",null,{"className":"space-y-2","children":[["$","p",null,{"className":"text-sm font-medium text-gray-400","children":"Examples:"}],["$","ul",null,{"className":"list-disc list-inside text-gray-300 space-y-1","children":[["$","li","0",{"className":"text-sm","children":"Analytics cookies"}],["$","li","1",{"className":"text-sm","children":"Error tracking cookies"}],["$","li","2",{"className":"text-sm","children":"Performance monitoring"}]]}]]}]]}],["$","div","2",{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8","children":[["$","div",null,{"className":"flex items-start justify-between mb-4","children":["$L10",false]}],"$L11","$L12"]}],"$L13"]}]]}],"$L14","$L15","$L16"]}],null,"$L17"]}]
7:["$","$1","h",{"children":[null,[["$","$L18",null,{"children":"$L19"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L1a",null,{"children":["$","div",null,{"hidden":true,"children":["$","$1b",null,{"fallback":null,"children":"$L1c"}]}]}]]}]
1d:I[9665,[],"OutletBoundary"]
1f:I[4911,[],"AsyncMetadataOutlet"]
10:["$","h3",null,{"className":"text-xl sm:text-2xl font-bold text-white","children":"Functional Cookies"}]
11:["$","p",null,{"className":"text-gray-300 leading-relaxed mb-4","children":"These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings."}]
12:["$","div",null,{"className":"space-y-2","children":[["$","p",null,{"className":"text-sm font-medium text-gray-400","children":"Examples:"}],["$","ul",null,{"className":"list-disc list-inside text-gray-300 space-y-1","children":[["$","li","0",{"className":"text-sm","children":"Language preferences"}],["$","li","1",{"className":"text-sm","children":"Theme settings"}],["$","li","2",{"className":"text-sm","children":"User preferences"}]]}]]}]
13:["$","div","3",{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8","children":[["$","div",null,{"className":"flex items-start justify-between mb-4","children":[["$","h3",null,{"className":"text-xl sm:text-2xl font-bold text-white","children":"Marketing Cookies"}],false]}],["$","p",null,{"className":"text-gray-300 leading-relaxed mb-4","children":"These cookies are used to track visitors across websites to display relevant and engaging advertisements."}],["$","div",null,{"className":"space-y-2","children":[["$","p",null,{"className":"text-sm font-medium text-gray-400","children":"Examples:"}],["$","ul",null,{"className":"list-disc list-inside text-gray-300 space-y-1","children":[["$","li","0",{"className":"text-sm","children":"Advertising cookies"}],["$","li","1",{"className":"text-sm","children":"Social media cookies"}],["$","li","2",{"className":"text-sm","children":"Retargeting cookies"}]]}]]}]]}]
14:["$","div",null,{"className":"container-max pb-16","children":["$","div",null,{"className":"bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 sm:p-12","children":[["$","h2",null,{"className":"text-3xl sm:text-4xl font-bold text-white text-center mb-6","children":"Managing Your Cookie Preferences"}],["$","div",null,{"className":"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto","children":[["$","div",null,{"className":"text-center","children":[["$","h3",null,{"className":"text-xl font-bold text-white mb-4","children":"Browser Settings"}],["$","p",null,{"className":"text-white/90 text-sm leading-relaxed","children":"You can control and manage cookies through your browser settings. Most browsers allow you to view, delete, and block cookies."}]]}],["$","div",null,{"className":"text-center","children":[["$","h3",null,{"className":"text-xl font-bold text-white mb-4","children":"Cookie Consent"}],["$","p",null,{"className":"text-white/90 text-sm leading-relaxed","children":"When you first visit our site, you will see a cookie consent banner where you can choose which types of cookies to accept."}]]}]]}]]}]}]
15:["$","div",null,{"className":"container-max pb-16","children":["$","div",null,{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12","children":[["$","h2",null,{"className":"text-3xl sm:text-4xl font-bold text-white mb-6","children":"Third-Party Cookies"}],["$","p",null,{"className":"text-lg text-gray-300 leading-relaxed mb-6","children":"Some cookies on our website are set by third-party services that we use to improve our website functionality and user experience. These services include:"}],["$","ul",null,{"className":"list-disc list-inside text-gray-300 space-y-2 text-lg","children":[["$","li",null,{"children":"Google Analytics for website performance analysis"}],["$","li",null,{"children":"Google Fonts for typography"}],["$","li",null,{"children":"Social media platforms for sharing functionality"}],["$","li",null,{"children":"Payment processors for secure transactions"}]]}]]}]}]
16:["$","div",null,{"className":"container-max pb-16 sm:pb-20 md:pb-24","children":["$","div",null,{"className":"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center","children":[["$","h2",null,{"className":"text-3xl sm:text-4xl font-bold text-white mb-6","children":"Questions About Cookies?"}],["$","p",null,{"className":"text-lg text-gray-300 mb-8 max-w-2xl mx-auto","children":"If you have any questions about our use of cookies or would like to exercise your rights regarding your personal data, please contact us."}],["$","div",null,{"className":"flex flex-col sm:flex-row gap-4 justify-center","children":[["$","a",null,{"href":"mailto:privacy@commutetimely.com","className":"inline-block bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors duration-300","children":"Contact Privacy Team"}],["$","a",null,{"href":"/privacy-policy","className":"inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors duration-300 border border-white/20","children":"Privacy Policy"}]]}]]}]}]
17:["$","$L1d",null,{"children":["$L1e",["$","$L1f",null,{"promise":"$@20"}]]}]
19:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1e:null
20:{"metadata":[["$","title","0",{"children":"Cookie Policy - CommuteTimely | CommuteTimely"}],["$","meta","1",{"name":"description","content":"Learn about how CommuteTimely uses cookies and similar technologies to improve your experience."}],["$","meta","2",{"name":"author","content":"CommuteTimely Team"}],["$","meta","3",{"name":"keywords","content":"commute,notifications,traffic,smart notifications,leave on time,commute app,traffic alerts,public transport,walking,cycling,waitlist"}],["$","meta","4",{"name":"creator","content":"CommuteTimely"}],["$","meta","5",{"name":"publisher","content":"CommuteTimely"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://commutetimely.com"}],["$","meta","9",{"name":"format-detection","content":"telephone=no, address=no, email=no"}],["$","meta","10",{"name":"google-site-verification","content":"your-google-verification-code"}],["$","meta","11",{"property":"og:title","content":"Cookie Policy - CommuteTimely"}],["$","meta","12",{"property":"og:description","content":"Learn about how CommuteTimely uses cookies and similar technologies to improve your experience."}],["$","meta","13",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","14",{"name":"twitter:title","content":"CommuteTimely - Never Be Late Again"}],["$","meta","15",{"name":"twitter:description","content":"Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling."}],["$","meta","16",{"name":"twitter:image","content":"https://commutetimely.com/og-image.jpg"}]],"error":null,"digest":"$undefined"}
1c:"$20:metadata"
