"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const commonQuestions = [
  "How does the app work?",
  "Is it free to use?",
  "Which cities are supported?",
  "How accurate are the predictions?",
  "Can I use it offline?"
]

const botResponses: Record<string, string> = {
  "How does the app work?": "CommuteTimely uses real-time traffic data and your commute preferences to calculate the perfect departure time. Just set up your regular routes and we'll send you smart notifications when it's time to leave!",
  "Is it free to use?": "Yes! CommuteTimely is free to download and use. We offer premium features for advanced users, but the core functionality is completely free.",
  "Which cities are supported?": "We currently support over 50 major cities worldwide, including New York, London, Tokyo, and many more. We're constantly expanding our coverage!",
  "How accurate are the predictions?": "Our predictions are 99% accurate within a 5-minute window. The app learns from your commute patterns and improves accuracy over time.",
  "Can I use it offline?": "While some features require an internet connection for real-time traffic data, the app can work offline for basic route planning and saved schedules."
}

export default function SupportBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your CommuteTimely assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[text] || "I'm not sure about that. You can try asking about how the app works, pricing, supported cities, accuracy, or offline usage."
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      sendMessage(inputValue.trim())
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open support chat"
        aria-expanded={isOpen}
        aria-controls="support-chat-modal"
      >
        <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
      </motion.button>

      {/* Chat Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
          id="support-chat-modal"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass w-full max-w-md h-96 rounded-2xl border border-white/20 flex flex-col"
          >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-brand-accent" aria-hidden="true" />
                  <span id="chat-title" className="font-semibold text-white">CommuteTimely Assistant</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 text-white" aria-hidden="true" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-brand-accent text-white' 
                        : 'bg-white/10 text-white'
                    }`}>
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="px-4 pb-2">
                  <div className="text-xs text-gray-400 mb-2">Quick questions:</div>
                  <div className="flex flex-wrap gap-2">
                    {commonQuestions.slice(0, 3).map((question) => (
                      <button
                        key={question}
                        onClick={() => sendMessage(question)}
                        className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded-full transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="p-2 bg-brand-accent rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-accent/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4 text-white" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
    </>
  )
} 