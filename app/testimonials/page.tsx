import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials - CommuteTimely',
  description: 'Read what our users say about CommuteTimely. Real stories from people who never want to be late again.',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">What Our Users Say</h1>
        
        <div className="space-y-12">
          {/* Featured Testimonials */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-6 border border-[#d4af37]/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sarah M.</h3>
                    <p className="text-gray-400 text-sm">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Finally, an app that actually helps me be on time! I used to be late to meetings constantly, 
                  but now I get perfect notifications that tell me exactly when to leave. Game changer!"
                </p>
                <div className="flex text-[#d4af37]">
                  <span>★★★★★</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-6 border border-[#d4af37]/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Mike T.</h3>
                    <p className="text-gray-400 text-sm">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "The AI learning is incredible. After a week, it knew my commute better than I did. 
                  The predictions are spot-on, even with traffic changes."
                </p>
                <div className="flex text-[#d4af37]">
                  <span>★★★★★</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-6 border border-[#d4af37]/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Jennifer L.</h3>
                    <p className="text-gray-400 text-sm">Teacher</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "As a teacher, being on time is crucial. This app has eliminated my stress about 
                  traffic and made my mornings so much smoother. Highly recommend!"
                </p>
                <div className="flex text-[#d4af37]">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
          </section>

          {/* More Testimonials */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 4 */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DR</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">David R.</h3>
                    <p className="text-gray-400 text-sm">Sales Representative</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "I travel between multiple clients throughout the day. This app handles all my routes 
                  perfectly and keeps me on schedule. It's like having a personal assistant!"
                </p>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AK</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Amanda K.</h3>
                    <p className="text-gray-400 text-sm">Nurse</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Working in healthcare means I can't be late. This app has been a lifesaver. 
                  The notifications are reliable and the timing is always perfect."
                </p>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Carlos P.</h3>
                    <p className="text-gray-400 text-sm">Delivery Driver</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "I drive for a living and this app has improved my efficiency dramatically. 
                  It knows the traffic patterns better than any GPS I've used."
                </p>
              </div>

              {/* Testimonial 7 */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Lisa M.</h3>
                    <p className="text-gray-400 text-sm">Student</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "As a student, I'm always rushing between classes. This app has made my campus 
                  commute so much easier. I never miss a lecture anymore!"
                </p>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="bg-gradient-to-r from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
            <h2 className="text-2xl font-semibold mb-8 text-center">User Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-2">50K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-2">4.8★</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-2">95%</div>
                <div className="text-gray-300">On-Time Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-2">50+</div>
                <div className="text-gray-300">Cities Supported</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Thousands of Happy Users</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't just take our word for it. Join the thousands of users who have transformed 
              their daily commute with CommuteTimely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#download"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-8 py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Download Now
              </a>
              <a 
                href="/contact"
                className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold rounded-lg px-8 py-3 text-lg transition-all duration-200"
              >
                Share Your Story
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 