'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { Button } from './button';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset video state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setCurrentTime(video.currentTime);
    setDuration(video.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
    setCurrentTime(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isOpen ? 'open' : 'closed'}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        suppressHydrationWarning
      >
        <motion.div
          className={`relative bg-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden ${
            isFullscreen ? 'w-full h-full' : 'w-full max-w-4xl max-h-[90vh]'
          }`}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="relative p-4 border-b border-white/10 bg-gradient-to-r from-gray-900 to-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">CommuteTimely Demo</h2>
                  <p className="text-sm text-gray-400">See how it works in action</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                aria-label="Close demo video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative bg-black">
            {/* Actual Video Player */}
            <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
              <video
                ref={videoRef}
                src="/videos/ScreenRecording_08-13-2025 18-09-49_1.mov"
                controls
                muted={isMuted}
                className="w-full h-full object-cover rounded-lg"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                poster="/images/IMG_750E9EF883FD-1.jpeg"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={handlePlayPause}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      onClick={handleMuteToggle}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-3 py-2 rounded-lg"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      onClick={handleRestart}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-3 py-2 rounded-lg"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    
                    <Button
                      onClick={handleFullscreen}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-3 py-2 rounded-lg"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-white font-mono">
                  {formatTime(currentTime)}
                </span>
                
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / (duration || 100)) * 100}%, rgba(255,255,255,0.2) ${(currentTime / (duration || 100)) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                </div>
                
                <span className="text-sm text-white font-mono">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-gradient-to-r from-gray-900 to-black">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span>🎥 Interactive Demo</span>
                <span>•</span>
                <span>2:45 Duration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>HD Quality</span>
                <span>•</span>
                <span>Auto-play ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
