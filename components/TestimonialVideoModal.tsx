"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { trapFocus, handleKeyboardNavigation } from '@/lib/accessibility'

interface TestimonialVideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  title?: string
  description?: string
}

export default function TestimonialVideoModal({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
  title = "See CommuteTimely in Action",
  description = "Watch how Sarah uses CommuteTimely to never be late again."
}: TestimonialVideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const modal = document.querySelector('[data-modal]') as HTMLElement
      if (modal) {
        const cleanup = trapFocus(modal)
        return cleanup
      }
    }
  }, [isOpen])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    handleKeyboardNavigation(event, undefined, onClose)
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            data-modal
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <Dialog.Title className="text-xl font-bold text-white">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="text-gray-400 mt-1">
                  {description}
                </Dialog.Description>
              </div>
              <Dialog.Close className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
                <X className="w-6 h-6 text-white" />
              </Dialog.Close>
            </div>

            {/* Video Content */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 px-4 py-2 bg-brand-accent/20 hover:bg-brand-accent/30 rounded-lg transition-colors duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                    <span className="text-white text-sm">
                      {isPlaying ? "Pause" : "Play"}
                    </span>
                  </button>
                </div>
                <div className="text-gray-400 text-sm">
                  Press ESC to close
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 