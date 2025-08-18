'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Mail, User, MapPin, Clock, Smartphone, CheckCircle } from 'lucide-react'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useEarlyAccess } from '@/components/use-early-access'

export default function EarlyAccessPage() {
  const { isLoading, isSubmitted, error, submitEarlyAccess, reset } = useEarlyAccess()
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    useCase: '',
    location: '',
    commuteChallenge: '',
    device: ''
  })

  useEffect(() => { setIsMounted(true) }, [])
  if (!isMounted) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await submitEarlyAccess(formData)
    if (result.success) {
      setFormData({ email: '', name: '', useCase: '', location: '', commuteChallenge: '', device: '' })
    }
  }

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-lg mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-white/10 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">Join Early Access</h1>
            <p className="text-sm text-gray-300 mt-1">Be among the first to experience CommuteTimely</p>
          </div>

          <div className="p-6 sm:p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11" />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11" />
                </div>
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-2">How will you use CommuteTimely?</label>
                  <select id="useCase" value={formData.useCase} onChange={(e) => setFormData({ ...formData, useCase: e.target.value })} className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 h-11 focus:border-blue-400 focus:ring-blue-400/20">
                    <option value="">Select an option</option>
                    <option value="office-worker">Office worker</option>
                    <option value="university-staff">University staff</option>
                    <option value="delivery-driver">Delivery driver</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">Location/Commute Type</label>
                  <Input id="location" type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="e.g., Downtown, Suburbs, Rural" className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11" />
                </div>
                <div>
                  <label htmlFor="commuteChallenge" className="block text-sm font-medium text-gray-300 mb-2">What's your biggest commute challenge?</label>
                  <textarea id="commuteChallenge" rows={3} value={formData.commuteChallenge} onChange={(e) => setFormData({ ...formData, commuteChallenge: e.target.value })} placeholder="Tell us about your commute struggles..." className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What device will you use?</label>
                  <div className="flex flex-wrap gap-4">
                    {['Android', 'iOS', 'Both'].map((device) => (
                      <label key={device} className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="device" value={device} checked={formData.device === device} onChange={(e) => setFormData({ ...formData, device: e.target.value })} className="text-blue-500 focus:ring-blue-400 w-4 h-4" />
                        <span className="text-sm text-gray-300">{device}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {error && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">{error}</div>}
                <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold h-12 rounded-lg disabled:opacity-50">
                  {isLoading ? 'Submitting...' : 'Join Early Access'}
                </Button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold mb-2">🎉 Welcome to Early Access! 🎉</h2>
                <p className="text-gray-300">Thank you for joining! We'll notify you as soon as CommuteTimely launches.</p>
                <Button className="mt-6 bg-white text-black" onClick={() => reset()}>Submit another response</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


