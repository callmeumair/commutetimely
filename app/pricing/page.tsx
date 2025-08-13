'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Star, Zap, Shield, Clock, MapPin, Bell, TrendingUp } from 'lucide-react'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('monthly')

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$5.99',
      period: '/month',
      description: 'Perfect for trying out CommuteTimely',
      popular: true,
      savings: null
    },
    {
      id: 'annual',
      name: 'Annual',
      price: '$49.99',
      period: '/year',
      description: 'Best value for regular commuters',
      popular: false,
      savings: 'Save ~30%'
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: '$129',
      period: ' one-time',
      description: 'Own it forever, no recurring fees',
      popular: false,
      savings: 'Best long-term value'
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
      title: 'Custom smart notifications',
      description: 'Set personalized alerts for your commute'
    },
    {
      icon: Shield,
      title: 'No ads',
      description: 'Clean, distraction-free experience'
    },
    {
      icon: TrendingUp,
      title: 'Time saved tracking',
      description: 'See how much time you save with smart routing'
    }
  ]

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10" />
        
        {/* Abstract shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                One plan. All the features you need for stress-free commuting.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Plan Selector */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                <div className="flex space-x-2">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id as any)}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedPlan === plan.id
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Pricing Card */}
            <motion.div
              key={selectedPlan}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Popular Badge */}
                {selectedPlanData?.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {selectedPlanData?.savings && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {selectedPlanData.savings}
                    </div>
                  </div>
                )}

                <div className="p-8 sm:p-12">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {selectedPlanData?.name} Plan
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {selectedPlanData?.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {selectedPlanData?.price}
                        </span>
                        <span className="text-xl sm:text-2xl text-gray-400">
                          {selectedPlanData?.period}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg shadow-blue-500/25 transition-all duration-200 mb-6"
                    >
                      Start 7-Day Free Trial
                    </motion.button>

                    <p className="text-sm text-gray-500">
                      No credit card required • Cancel anytime
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">
                      Everything included:
                    </h3>
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{feature.title}</h4>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Free Trial Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl border border-white/10 p-8 sm:p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Try it free for 7 days
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Experience every premium feature with no limits. Cancel anytime before your trial ends.
                </p>
                
                <div className="bg-gray-900/50 rounded-2xl p-4 border border-white/10">
                  <p className="text-sm text-gray-400">
                    After trial, just <span className="text-white font-semibold">$5.99/month</span>, billed automatically unless cancelled.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need to know about CommuteTimely pricing
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Can I really try it for free?",
                  answer: "Absolutely! Start your 7-day free trial with no credit card required. Experience all premium features risk-free."
                },
                {
                  question: "What happens after the trial?",
                  answer: "After 7 days, you'll be automatically charged $5.99/month. You can cancel anytime before the trial ends to avoid charges."
                },
                {
                  question: "Can I change plans later?",
                  answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time through your account settings."
                },
                {
                  question: "Is there a long-term commitment?",
                  answer: "No long-term contracts. All plans are month-to-month or one-time payments. Cancel whenever you want."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-left"
                >
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to transform your commute?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of commuters who've already made their daily travel stress-free and efficient.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-2xl text-lg shadow-lg shadow-blue-500/25 transition-all duration-200"
              >
                Start Free Trial Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
