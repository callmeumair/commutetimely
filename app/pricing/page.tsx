'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  MapPin, 
  Bell, 
  TrendingUp, 
  ChevronDown,
  ChevronUp,
  Lock,
  Users,
  Award,
  Sparkles
} from 'lucide-react'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('monthly')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$5.99',
      period: '/month',
      description: 'Perfect for trying out CommuteTimely',
      popular: true,
      savings: null,
      originalPrice: null
    },
    {
      id: 'annual',
      name: 'Annual',
      price: '$49.99',
      period: '/year',
      description: 'Best value for regular commuters',
      popular: false,
      savings: 'Save ~30%',
      originalPrice: '$71.88'
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: '$129',
      period: ' one-time',
      description: 'Own it forever, no recurring fees',
      popular: false,
      savings: 'Best Value',
      originalPrice: null
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Real-time commute recalculations',
      description: 'Get instant updates as traffic conditions change'
    },
    {
      icon: MapPin,
      title: 'Multi-mode travel comparisons',
      description: 'Compare car, transit, walking, and cycling routes'
    },
    {
      icon: Bell,
      title: 'Smart notifications & reminders',
      description: 'Set personalized alerts for your commute'
    },
    {
      icon: Shield,
      title: 'No ads',
      description: 'Clean, distraction-free experience'
    },
    {
      icon: TrendingUp,
      title: 'Time saved tracking dashboard',
      description: 'See how much time you save with smart routing'
    }
  ]

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription at any time through your account settings. No questions asked, no hidden fees."
    },
    {
      question: "What happens after my trial?",
      answer: "After your 7-day free trial ends, you'll be automatically charged $5.99/month. You can cancel anytime before the trial ends to avoid charges."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes! We use bank-level encryption and never store your payment details. All transactions are processed securely through Stripe."
    },
    {
      question: "Do I get updates for free?",
      answer: "Yes! All future updates and new features are included at no additional cost. Your subscription covers everything."
    }
  ]

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Premium Features Included</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6 leading-tight">
                Simple, Transparent Pricing for Everyone
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                One plan. All the premium features you need for stress-free commuting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center space-x-2"
                >
                  <Clock className="w-5 h-5" />
                  <span>Start 7-Day Free Trial</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-200 hover:bg-white/5"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Plan Selector */}
            <div className="flex justify-center mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 shadow-xl">
                <div className="flex space-x-2">
                  {plans.map((plan) => (
                    <motion.button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id as any)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                        selectedPlan === plan.id
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {plan.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative ${
                    plan.popular ? 'lg:scale-105' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {plan.savings && !plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        {plan.savings}
                      </div>
                    </div>
                  )}

                  <div className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-blue-500/50' : ''
                  }`}>
                    <div className="p-8">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {plan.name} Plan
                        </h3>
                        <p className="text-gray-400 mb-6">
                          {plan.description}
                        </p>
                        
                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline justify-center space-x-2">
                            <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                              {plan.price}
                            </span>
                            <span className="text-xl text-gray-400">
                              {plan.period}
                            </span>
                          </div>
                          
                          {/* Original Price for Annual */}
                          {plan.originalPrice && (
                            <div className="mt-2">
                              <span className="text-gray-500 line-through">
                                {plan.originalPrice}/year
                              </span>
                              <span className="text-green-400 text-sm ml-2">
                                (~${(parseFloat(plan.price.replace('$', '')) / 12).toFixed(2)}/month)
                              </span>
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 ${
                            plan.popular
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                          }`}
                        >
                          Start 7-Day Free Trial
                        </motion.button>
                      </div>

                      {/* Features List */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4 text-center">
                          Everything included:
                        </h4>
                        {features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                              <Check className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-white">{feature.title}</h5>
                              <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Trial Highlight Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-white/20 p-8 sm:p-12 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      Try CommuteTimely Free for 7 Days
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                      Experience every premium feature with no limits. Cancel anytime before your trial ends.
                    </p>
                    
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                      <p className="text-sm text-gray-400">
                        After trial, just <span className="text-white font-semibold">$5.99/month</span>, billed automatically unless cancelled.
                      </p>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-4 border border-blue-500/30">
                      <p className="text-blue-200 text-sm italic">
                        "CommuteTimely saved me 45 minutes this week alone." 
                        <span className="block text-blue-300 font-medium mt-1">– Real Beta User</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-48 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white/80 text-sm">Commute Check</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need to know about CommuteTimely pricing
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="font-semibold text-white text-lg">{faq.question}</h3>
                    <div className="flex-shrink-0 ml-4">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Your commute, optimized.
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of commuters who've already made their daily travel stress-free and efficient.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-5 px-12 rounded-2xl text-xl shadow-lg shadow-blue-500/25 transition-all duration-200 mb-10"
              >
                Start My Free Trial
              </motion.button>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
