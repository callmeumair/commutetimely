1:"$Sreact.fragment"
8:I[8393,[],""]
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
            0:{"P":null,"b":"2og5mYkztCp5rTyr9foLi","p":"","c":["","faq"],"i":false,"f":[[["",{"children":["faq",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b8a80d6e78f79db6.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"__variable_e8ce0c","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"preconnect","href":"https://images.unsplash.com"}],["$","link",null,{"rel":"preconnect","href":"https://via.placeholder.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//fonts.googleapis.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//fonts.gstatic.com"}],["$","link",null,{"rel":"dns-prefetch","href":"//images.unsplash.com"}],["$","link",null,{"rel":"preload","href":"/critical.css","as":"style"}],["$","link",null,{"rel":"preload","href":"/fonts/inter-var.woff2","as":"font","type":"font/woff2","crossOrigin":"anonymous"}],["$","link",null,{"rel":"prefetch","href":"/non-critical.css","as":"style"}],["$","style",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$3"}}]]}],"$L4"]}]]}],{"children":["faq","$L5",{"children":["__PAGE__","$L6",{},null,false]},null,false]},null,false],"$L7",false]],"m":"$undefined","G":["$8",[]],"s":false,"S":true}
9:I[9351,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-cdeadf69b738503e.js"],"default"]
a:I[7555,[],""]
b:I[1295,[],""]
c:I[6874,["874","static/chunks/874-437a265a67d6cfee.js","505","static/chunks/app/faq/page-ab27c97d0d79f853.js"],""]
d:I[6109,["874","static/chunks/874-437a265a67d6cfee.js","410","static/chunks/410-c6c798bd365ea244.js","177","static/chunks/app/layout-cdeadf69b738503e.js"],"default"]
14:I[9665,[],"ViewportBoundary"]
16:I[9665,[],"MetadataBoundary"]
17:"$Sreact.suspense"
e:T87a,
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
            4:["$","body",null,{"className":"__className_e8ce0c","children":[["$","a",null,{"href":"#main-content","className":"skip-link","children":"Skip to main content"}],["$","$L9",null,{}],["$","main",null,{"id":"main-content","role":"main","children":["$","$La",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Lb",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"min-h-screen bg-black flex items-center justify-center","children":["$","div",null,{"className":"text-center","children":["$","div",null,{"className":"animate-fade-in","children":[["$","h1",null,{"className":"text-8xl md:text-9xl font-bold gradient-text mb-4 animate-scale-in","children":"404"}],["$","h2",null,{"className":"text-2xl md:text-3xl font-semibold text-white mb-4 animate-fade-in","children":"Page Not Found"}],["$","p",null,{"className":"text-gray-400 text-lg mb-8 max-w-md mx-auto animate-fade-in","children":"The page you're looking for doesn't exist. It might have been moved or deleted."}],["$","div",null,{"className":"flex flex-col sm:flex-row gap-4 justify-center animate-fade-in","children":[["$","$Lc",null,{"href":"/","className":"inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white font-semibold rounded-lg hover:from-[#e6c244] hover:to-[#d4af37] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-house w-5 h-5 mr-2","aria-hidden":"true","children":[["$","path","5wwlr5",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["$","path","1d0kgt",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],"$undefined"]}],"Go Home"]}],["$","$Lc",null,{"href":"/","className":"inline-flex items-center justify-center px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-arrow-left w-5 h-5 mr-2","aria-hidden":"true","children":[["$","path","1l729n",{"d":"m12 19-7-7 7-7"}],["$","path","x3x0zl",{"d":"M19 12H5"}],"$undefined"]}],"Go Back"]}]]}],["$","div",null,{"className":"mt-12 p-6 glass rounded-xl max-w-md mx-auto animate-fade-in","children":[["$","div",null,{"className":"flex items-center mb-4","children":[["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-search w-5 h-5 text-[#d4af37] mr-2","aria-hidden":"true","children":[["$","path","14j7rj",{"d":"m21 21-4.34-4.34"}],["$","circle","4ej97u",{"cx":"11","cy":"11","r":"8"}],"$undefined"]}],["$","h3",null,{"className":"text-white font-semibold","children":"Looking for something specific?"}]]}],["$","div",null,{"className":"space-y-2 text-sm","children":[["$","$Lc",null,{"href":"/features","className":"block text-gray-300 hover:text-white transition-colors","children":"→ View our features"}],["$","$Lc",null,{"href":"/how-it-works","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Learn how it works"}],["$","$Lc",null,{"href":"/faq","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Check our FAQ"}],["$","$Lc",null,{"href":"/contact","className":"block text-gray-300 hover:text-white transition-colors","children":"→ Contact support"}]]}]]}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","$Ld",null,{}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$e"}}]]}]
5:["$","$1","c",{"children":[null,["$","$La",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Lb",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
6:["$","$1","c",{"children":[["$","div",null,{"className":"min-h-screen bg-black text-white","children":["$","div",null,{"className":"container-max py-16","children":[["$","h1",null,{"className":"text-4xl font-bold mb-8","children":"Frequently Asked Questions"}],["$","div",null,{"className":"space-y-8","children":[["$","section",null,{"children":[["$","h2",null,{"className":"text-2xl font-semibold mb-6 text-[#d4af37]","children":"Getting Started"}],["$","div",null,{"className":"space-y-4","children":[["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"How do I set up my first commute?"}],["$","p",null,{"className":"text-gray-300","children":"Simply download the app, create an account, and add your home and work addresses. Set your preferred arrival time and choose your transport mode. The app will start learning your patterns immediately."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"Does the app work in my city?"}],["$","p",null,{"className":"text-gray-300","children":"CommuteTimely works in over 50 major cities worldwide and is constantly expanding. We use global traffic data sources to provide accurate predictions wherever you are."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"How long does it take to learn my commute?"}],["$","p",null,{"className":"text-gray-300","children":"The app starts providing predictions immediately, but accuracy improves significantly after 3-5 days of regular use as it learns your specific patterns and preferences."}]]}]]}]]}],["$","section",null,{"children":[["$","h2",null,{"className":"text-2xl font-semibold mb-6 text-[#d4af37]","children":"Features & Functionality"}],["$","div",null,{"className":"space-y-4","children":[["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"How does CommuteTimely know when to notify me?"}],["$","p",null,{"className":"text-gray-300","children":"The app uses real-time traffic data, historical patterns, and your personal commute preferences to calculate the optimal departure time. It continuously monitors traffic conditions and adjusts notifications accordingly."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"Can I use the app for multiple destinations?"}],["$","p",null,{"className":"text-gray-300","children":"Yes! You can add multiple destinations like work, gym, grocery store, etc. Each destination can have its own arrival time and transport mode preferences."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"What transport modes are supported?"}],["$","p",null,{"className":"text-gray-300","children":"We support driving, public transit, walking, and cycling. The app adapts its predictions based on your chosen transport mode and available data for each type."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"Can I customize notification times?"}],["$","p",null,{"className":"text-gray-300","children":"Absolutely! You can set multiple notification times (e.g., 15 minutes before departure, 5 minutes before departure) and choose which ones you want to receive."}]]}]]}]]}],["$","section",null,{"children":[["$","h2",null,{"className":"text-2xl font-semibold mb-6 text-[#d4af37]","children":"Privacy & Security"}],"$Lf"]}],"$L10","$L11","$L12"]}]]}]}],null,"$L13"]}]
7:["$","$1","h",{"children":[null,[["$","$L14",null,{"children":"$L15"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L16",null,{"children":["$","div",null,{"hidden":true,"children":["$","$17",null,{"fallback":null,"children":"$L18"}]}]}]]}]
19:I[9665,[],"OutletBoundary"]
1b:I[4911,[],"AsyncMetadataOutlet"]
f:["$","div",null,{"className":"space-y-4","children":[["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"How does CommuteTimely protect my privacy?"}],["$","p",null,{"className":"text-gray-300","children":"Your privacy is our top priority. All location data is processed locally on your device, and we never sell or share your personal information. We use industry-standard encryption and follow GDPR compliance guidelines."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"What data does the app collect?"}],["$","p",null,{"className":"text-gray-300","children":"We collect location data (processed locally), commute preferences, and app usage statistics. We never collect personal information like names, addresses, or contact details."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"Can I delete my data?"}],["$","p",null,{"className":"text-gray-300","children":"Yes, you can delete your account and all associated data at any time through the app settings. We'll permanently remove all your information from our systems."}]]}]]}]
10:["$","section",null,{"children":[["$","h2",null,{"className":"text-2xl font-semibold mb-6 text-[#d4af37]","children":"Troubleshooting"}],["$","div",null,{"className":"space-y-4","children":[["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"I'm not receiving notifications. What should I do?"}],["$","p",null,{"className":"text-gray-300","children":"First, check that notifications are enabled in your device settings and that location services are turned on. Also ensure the app has permission to send notifications. If the issue persists, try restarting the app or reinstalling it."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"The arrival times seem inaccurate. Why?"}],["$","p",null,{"className":"text-gray-300","children":"The app learns from your commute patterns over time. If predictions seem off initially, give it a few days to learn your specific route and timing. You can also manually adjust your route preferences for better accuracy."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"The app crashes or freezes. How can I fix this?"}],["$","p",null,{"className":"text-gray-300","children":"Try closing and reopening the app, or restart your device. If the problem continues, uninstall and reinstall the app from your device's app store. Make sure you have the latest version installed."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"How do I update my commute settings?"}],["$","p",null,{"className":"text-gray-300","children":"Go to the app settings and select \"Commute Settings.\" You can modify addresses, arrival times, transport modes, and notification preferences at any time."}]]}]]}]]}]
11:["$","section",null,{"children":[["$","h2",null,{"className":"text-2xl font-semibold mb-6 text-[#d4af37]","children":"Pricing & Availability"}],["$","div",null,{"className":"space-y-4","children":[["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"Is CommuteTimely free to use?"}],["$","p",null,{"className":"text-gray-300","children":"Yes! The core features of CommuteTimely are completely free. We may offer premium features in the future, but the basic commute notification service will always be free."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"Which devices and operating systems are supported?"}],["$","p",null,{"className":"text-gray-300","children":"CommuteTimely is available for iOS (iPhone) and Android devices. We support iOS 12+ and Android 8+ with regular updates for newer versions."}]]}],["$","div",null,{"className":"bg-[#1a1a1a] rounded-lg p-6 border border-gray-700","children":[["$","h3",null,{"className":"text-lg font-semibold mb-3","children":"When will the app be available in my country?"}],["$","p",null,{"className":"text-gray-300","children":"We're constantly expanding to new regions. If CommuteTimely isn't available in your country yet, you can sign up for our waitlist to be notified when we launch there."}]]}]]}]]}]
12:["$","section",null,{"className":"bg-gradient-to-r from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20","children":[["$","h2",null,{"className":"text-2xl font-semibold mb-4","children":"Still Have Questions?"}],["$","p",null,{"className":"text-gray-300 mb-6","children":"Can't find the answer you're looking for? Our support team is here to help."}],["$","div",null,{"className":"flex flex-col sm:flex-row gap-4","children":[["$","$Lc",null,{"href":"/contact","className":"bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200","children":"Contact Support"}],["$","$Lc",null,{"href":"/support","className":"border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold rounded-lg px-6 py-3 transition-all duration-200","children":"Visit Support Center"}]]}]]}]
13:["$","$L19",null,{"children":["$L1a",["$","$L1b",null,{"promise":"$@1c"}]]}]
15:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1a:null
1c:{"metadata":[["$","title","0",{"children":"FAQ - CommuteTimely | CommuteTimely"}],["$","meta","1",{"name":"description","content":"Frequently asked questions about CommuteTimely. Find answers to common questions about our smart commute notification app."}],["$","meta","2",{"name":"author","content":"CommuteTimely Team"}],["$","meta","3",{"name":"keywords","content":"commute,notifications,traffic,smart notifications,leave on time,commute app,traffic alerts,public transport,walking,cycling,waitlist"}],["$","meta","4",{"name":"creator","content":"CommuteTimely"}],["$","meta","5",{"name":"publisher","content":"CommuteTimely"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://commutetimely.com"}],["$","meta","9",{"name":"format-detection","content":"telephone=no, address=no, email=no"}],["$","meta","10",{"name":"google-site-verification","content":"your-google-verification-code"}],["$","meta","11",{"property":"og:title","content":"CommuteTimely - Never Be Late Again"}],["$","meta","12",{"property":"og:description","content":"Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling."}],["$","meta","13",{"property":"og:url","content":"https://commutetimely.com"}],["$","meta","14",{"property":"og:site_name","content":"CommuteTimely"}],["$","meta","15",{"property":"og:locale","content":"en_US"}],["$","meta","16",{"property":"og:image","content":"https://commutetimely.com/og-image.jpg"}],["$","meta","17",{"property":"og:image:width","content":"1200"}],["$","meta","18",{"property":"og:image:height","content":"630"}],["$","meta","19",{"property":"og:image:alt","content":"CommuteTimely - Smart commute notifications"}],["$","meta","20",{"property":"og:type","content":"website"}],["$","meta","21",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","22",{"name":"twitter:title","content":"CommuteTimely - Never Be Late Again"}],["$","meta","23",{"name":"twitter:description","content":"Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling."}],["$","meta","24",{"name":"twitter:image","content":"https://commutetimely.com/og-image.jpg"}]],"error":null,"digest":"$undefined"}
18:"$1c:metadata"
