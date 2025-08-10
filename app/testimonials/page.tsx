import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Testimonials',
  description: 'See what our users are saying about CommuteTimely. Real stories from people who never miss their commute.',
  openGraph: {
    title: 'Customer Testimonials - CommuteTimely',
    description: 'See what our users are saying about CommuteTimely. Real stories from people who never miss their commute.',
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'CommuteTimely has completely changed my morning routine. I used to stress about traffic, but now I get notified exactly when to leave. No more rushing or being late!',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Sales Manager',
      company: 'SalesForce',
      content: 'As someone who travels between client meetings all day, this app is a lifesaver. It accounts for different transport modes and always gets me there on time.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Teacher',
      company: 'City Schools',
      content: 'I take the bus to work and CommuteTimely is incredibly accurate. It even tells me when to leave my house to catch the right bus. Game changer!',
      rating: 5,
      avatar: '👩‍🏫'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Cyclist',
      company: 'BikeShop',
      content: 'Perfect for my cycling commute! It considers weather, wind, and my fitness level to give me the perfect departure time. Love the health integration.',
      rating: 5,
      avatar: '🚴‍♂️'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Healthcare Worker',
      company: 'City Hospital',
      content: 'Working shifts means unpredictable traffic. CommuteTimely adapts to real-time conditions and always gets me to work on time. Essential for healthcare workers.',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Student',
      company: 'University',
      content: 'As a student, I need to maximize my study time. This app tells me exactly when to leave for class, so I can study until the last possible minute.',
      rating: 5,
      avatar: '👨‍🎓'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container-max py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            What Our Users Say
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of users who have transformed their daily commute with CommuteTimely
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container-max pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Commute?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our waitlist and be among the first to experience the future of smart commuting.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
