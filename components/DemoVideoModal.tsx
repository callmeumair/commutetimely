'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Button } from './button';

// Device detection hook
const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (width < 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const [isMounted, setIsMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-fullscreen when modal opens (only for mobile)
  useEffect(() => {
    if (isOpen && isMobile) {
      // For mobile, try to enter fullscreen after a short delay
      const autoFullscreen = async () => {
        try {
          setTimeout(async () => {
            if (videoRef.current) {
              try {
                if (videoRef.current.requestFullscreen) {
                  await videoRef.current.requestFullscreen();
                } else if ((videoRef.current as any).webkitRequestFullscreen) {
                  await (videoRef.current as any).webkitRequestFullscreen();
                } else if ((videoRef.current as any).mozRequestFullScreen) {
                  await (videoRef.current as any).mozRequestFullScreen();
                } else if ((videoRef.current as any).msRequestFullscreen) {
                  await (videoRef.current as any).msRequestFullscreen();
                }
                setIsFullscreen(true);
              } catch (error) {
                console.log('Auto-fullscreen failed:', error);
              }
            }
          }, 300);
        } catch (error) {
          console.log('Auto-fullscreen error:', error);
        }
      };
      
      autoFullscreen();
    }
  }, [isOpen, isMobile]);

  // Auto-hide controls on mobile after inactivity
  useEffect(() => {
    if (isMobile && showControls) {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
      
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      setControlsTimeout(timeout);
    }
    
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    };
  }, [isMobile, showControls]);

  // Listen for fullscreen changes and keyboard shortcuts
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreenActive = !!(
        document.fullscreenElement || 
        (document as any).webkitFullscreenElement || 
        (document as any).mozFullScreenElement || 
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isFullscreenActive);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        handleFullscreen();
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleFullscreen();
      }
      if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        handlePlayPause();
      }
      if (e.key === 'm') {
        e.preventDefault();
        handleMute();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  if (!isMounted) return null;

  const handleFullscreen = () => {
    if (videoRef.current) {
      try {
        if (!document.fullscreenElement && !(document as any).webkitFullscreenElement && !(document as any).mozFullScreenElement) {
          // Request fullscreen with cross-browser support
          if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
          } else if ((videoRef.current as any).webkitRequestFullscreen) {
            (videoRef.current as any).webkitRequestFullscreen();
          } else if ((videoRef.current as any).mozRequestFullScreen) {
            (videoRef.current as any).mozRequestFullScreen();
          } else if ((videoRef.current as any).msRequestFullscreen) {
            (videoRef.current as any).msRequestFullscreen();
          }
          setIsFullscreen(true);
        } else {
          // Exit fullscreen with cross-browser support
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
          } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
          } else if ((document as any).msExitFullscreen) {
            (document as any).msExitFullscreen();
          }
          setIsFullscreen(false);
        }
      } catch (error) {
        console.log('Fullscreen not supported:', error);
        // Fallback: toggle modal size for mobile
        setIsFullscreen(!isFullscreen);
      }
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (isMobile) {
      setShowControls(!showControls);
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoLoadStart = () => setIsLoading(true);
  const handleVideoCanPlay = () => setIsLoading(false);
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setIsLoading(false);
    setVideoError(true);
    // Fallback to original video if mobile version fails to load
    const target = e.target as HTMLVideoElement;
    if (target.src.includes('mobile')) {
      target.src = '/videos/ScreenRecording_08-13-2025 18-45-18_1.MP4';
      setVideoError(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isOpen ? 'open' : 'closed'}
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          isMobile ? 'p-0' : 'p-4'
        } bg-black/95 backdrop-blur-md`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        suppressHydrationWarning
      >
        <motion.div
          className={`relative bg-black rounded-none sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden ${
            isFullscreen ? 'w-full h-full' : 
            isMobile ? 'w-full h-full' : 
            'w-full max-w-[95vw] sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] mx-2 sm:mx-0'
          }`}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header - Hidden on mobile when in fullscreen */}
          {(!isMobile || !isFullscreen) && (
            <div className={`relative p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-gray-900 to-black ${
              isMobile ? 'p-2' : ''
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className={`font-bold text-white truncate ${
                      isMobile ? 'text-sm' : 'text-base sm:text-lg'
                    }`}>CommuteTimely Demo</h2>
                    <p className={`text-gray-400 truncate ${
                      isMobile ? 'text-xs' : 'text-xs sm:text-sm'
                    }`}>See how it works in action</p>
                    {!isMobile && (
                      <div className="hidden sm:flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">F: Fullscreen • Space: Play/Pause • M: Mute</span>
                      </div>
                    )}
                    {isMobile && (
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-blue-400">Mobile optimized • Tap to show controls</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className={`text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex-shrink-0 ml-2 ${
                    isMobile ? 'p-1.5' : 'p-2 sm:p-3'
                  }`}
                  aria-label="Close demo video"
                >
                  <X className={`${isMobile ? 'w-4 h-4' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />
                </button>
              </div>
            </div>
          )}

          {/* Video Container */}
          <div className="relative bg-gray-900">
            {/* Video Player */}
            <div className={`relative w-full group ${
              isMobile ? 'h-[100vh]' : 
              isTablet ? 'min-h-[400px] h-[calc(100vw*0.4)]' : 
              isDesktop ? 'min-h-[500px] h-[calc(100vh*0.6)]' : 'min-h-[300px] h-[calc(100vw*0.5625)]'
            }`}>
              <video
                ref={videoRef}
                src="/videos/ScreenRecording_mobile.mp4"
                muted={isMuted}
                className="w-full h-full object-contain rounded-none sm:rounded-lg touch-manipulation"
                poster="/images/IMG_750E9EF883FD-1.jpeg"
                playsInline
                preload="metadata"
                webkit-playsinline="true"
                x5-playsinline="true"
                x5-video-player="true"
                x5-video-player-type="h5"
                autoPlay
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onClick={handleVideoClick}
                onError={handleVideoError}
                onLoadStart={handleVideoLoadStart}
                onCanPlay={handleVideoCanPlay}
              >
                Your browser does not support the video tag.
              </video>

              {/* Loading Overlay */}
              {isLoading && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-white text-sm">Loading video...</p>
                  </div>
                </motion.div>
              )}

              {/* Error Overlay */}
              {videoError && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <X className="w-8 h-8 text-red-400" />
                    </div>
                    <p className="text-white text-sm mb-3">Failed to load video</p>
                    <Button
                      onClick={() => {
                        setVideoError(false);
                        setIsLoading(true);
                        if (videoRef.current) {
                          videoRef.current.src = '/videos/ScreenRecording_08-13-2025 18-45-18_1.MP4';
                        }
                      }}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Retry with original video
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Mobile Play Button Overlay */}
              {isMobile && !isPlaying && !isLoading && !videoError && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.button
                    onClick={handlePlayPause}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.button>
                </motion.div>
              )}

              {/* Custom Video Controls Overlay */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${
                  isMobile ? (showControls && !isLoading && !videoError ? 'opacity-100' : 'opacity-0') : 'opacity-0 hover:opacity-100 sm:group-hover:opacity-100'
                }`}
                animate={{ opacity: isMobile ? (showControls && !isLoading && !videoError ? 1 : 0) : 0 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 pointer-events-auto">
                  <div className={`flex items-center justify-center ${
                    isMobile ? 'space-x-2' : 'space-x-2 sm:space-x-4'
                  }`}>
                    {/* Play/Pause Button */}
                    <Button
                      onClick={handlePlayPause}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                      {isMobile && (
                        <span className="ml-1.5 text-xs">
                          {isPlaying ? 'Pause' : 'Play'}
                        </span>
                      )}
                    </Button>

                    {/* Mute Button */}
                    <Button
                      onClick={handleMute}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                      {isMobile && (
                        <span className="ml-1.5 text-xs">
                          {isMuted ? 'Unmute' : 'Mute'}
                        </span>
                      )}
                    </Button>

                    {/* Restart Button */}
                    <Button
                      onClick={handleRestart}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base"
                      title="Restart video"
                    >
                      <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isMobile && (
                        <span className="ml-1.5 text-xs">Restart</span>
                      )}
                    </Button>

                    {/* Fullscreen Button */}
                    <Button
                      onClick={handleFullscreen}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base"
                      title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    >
                      {isFullscreen ? (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white rounded-sm"></div>
                        </div>
                      ) : (
                        <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                      {isMobile && (
                        <span className="ml-1.5 text-xs">
                          {isFullscreen ? 'Exit' : 'Fullscreen'}
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
