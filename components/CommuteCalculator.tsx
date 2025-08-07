"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Car, Bus, Train, Bike, Footprints } from 'lucide-react'

interface CalculatorForm {
  destination: string
  arrivalTime: string
  transportMode: 'car' | 'bus' | 'train' | 'bike' | 'walking'
  trafficLevel: 'low' | 'medium' | 'high'
}

const transportModes = [
  { id: 'car', label: 'Car', icon: Car, multiplier: 1 },
  { id: 'bus', label: 'Bus', icon: Bus, multiplier: 1.2 },
  { id: 'train', label: 'Train', icon: Train, multiplier: 0.8 },
  { id: 'bike', label: 'Bike', icon: Bike, multiplier: 1.5 },
  { id: 'walking', label: 'Walking', icon: Footprints, multiplier: 3 }
]

const trafficLevels = [
  { id: 'low', label: 'Low Traffic', multiplier: 0.8 },
  { id: 'medium', label: 'Medium Traffic', multiplier: 1 },
  { id: 'high', label: 'High Traffic', multiplier: 1.4 }
]

export default function CommuteCalculator() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [form, setForm] = useState<CalculatorForm>({
    destination: '',
    arrivalTime: '',
    transportMode: 'car',
    trafficLevel: 'medium'
  })
  const [departureTime, setDepartureTime] = useState<string | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const calculateDepartureTime = () => {
    if (!form.destination || !form.arrivalTime) return

    setIsCalculating(true)
    
    // Simulate calculation delay
    setTimeout(() => {
      const arrival = new Date(`2000-01-01T${form.arrivalTime}`)
      const transportMode = transportModes.find(m => m.id === form.transportMode)
      const trafficLevel = trafficLevels.find(t => t.id === form.trafficLevel)
      
      if (transportMode && trafficLevel) {
        // Simulate commute time calculation (15-45 minutes based on mode and traffic)
        const baseTime = 20 // minutes
        const adjustedTime = baseTime * transportMode.multiplier * trafficLevel.multiplier
        
        const departure = new Date(arrival.getTime() - (adjustedTime * 60 * 1000))
        const hours = departure.getHours().toString().padStart(2, '0')
        const minutes = departure.getMinutes().toString().padStart(2, '0')
        
        setDepartureTime(`${hours}:${minutes}`)
      }
      
      setIsCalculating(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateDepartureTime()
  }

  return (
    <motion.section 
      className="fullscreen-section bg-black relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max w-full h-full flex flex-col justify-center">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Commute <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Calculate your ideal departure time with our smart calculator
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Calculator Form */}
          <motion.div 
            className="glass p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Current Time Display */}
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  Current Time
                </div>
                <div className="text-4xl font-mono gradient-text">
                  {currentTime.toLocaleTimeString()}
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  placeholder="e.g., Work, Home, Gym"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent"
                  required
                />
              </div>

              {/* Arrival Time */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Desired Arrival Time
                </label>
                <input
                  type="time"
                  value={form.arrivalTime}
                  onChange={(e) => setForm({ ...form, arrivalTime: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-accent"
                  required
                />
              </div>

              {/* Transport Mode */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Transport Mode
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {transportModes.map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setForm({ ...form, transportMode: mode.id as any })}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        form.transportMode === mode.id
                          ? 'border-brand-accent bg-brand-accent/20'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <mode.icon className="w-6 h-6 text-white mx-auto mb-1" />
                      <div className="text-xs text-white">{mode.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Traffic Level */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Traffic Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {trafficLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setForm({ ...form, trafficLevel: level.id as any })}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        form.trafficLevel === level.id
                          ? 'border-brand-accent bg-brand-accent/20'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-sm text-white">{level.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                type="submit"
                disabled={isCalculating}
                className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Departure Time'}
              </button>
            </form>
          </motion.div>

          {/* Results */}
          <motion.div 
            className="glass p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <Clock className="w-16 h-16 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Departure Time
              </h3>
              
              {departureTime ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-6xl font-mono gradient-text mb-6"
                >
                  {departureTime}
                </motion.div>
              ) : (
                <div className="text-4xl text-gray-400 mb-6">
                  --:--
                </div>
              )}
              
              <div className="text-gray-400 space-y-2">
                <p>Based on {form.transportMode} travel</p>
                <p>with {form.trafficLevel} traffic</p>
                {departureTime && (
                  <p className="text-brand-accent font-medium">
                    Arrive at {form.arrivalTime}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 