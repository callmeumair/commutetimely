'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset video state and auto-fullscreen when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      setCurrentTime(0);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
      
      // Auto-fullscreen based on device type
      const autoFullscreen = async () => {
        try {
          if (isMobile || isTablet) {
            // For mobile/tablet, try to enter fullscreen after a short delay
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
            }, 500);
          } else if (isDesktop) {
            // For desktop, enter fullscreen immediately
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
          }
        } catch (error) {
          console.log('Auto-fullscreen error:', error);
        }
      };
      
      autoFullscreen();
    }
  }, [isOpen, isMobile, isTablet, isDesktop]);

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
      if (e.key === ' ') {
        e.preventDefault();
        handlePlayPause();
      }
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        handleMuteToggle();
      }
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        handleRestart();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (videoRef.current) {
          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
        }
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (videoRef.current) {
          videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
        }
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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

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
                   isFullscreen ? 'w-full h-full' : 'w-full max-w-[95vw] sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] mx-2 sm:mx-0'
                 }`}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="relative p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-gray-900 to-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-white truncate">CommuteTimely Demo</h2>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">See how it works in action</p>
                  <div className="hidden sm:flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">Space: Play/Pause</span>
                    <span className="text-xs text-gray-500">M: Mute</span>
                    <span className="text-xs text-gray-500">F: Fullscreen</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 sm:p-3 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex-shrink-0 ml-2"
                aria-label="Close demo video"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

                           {/* Video Container */}
                 <div className="relative bg-gray-900">
                   {/* Actual Video Player */}
                   <div className={`relative w-full group ${
                     isMobile ? 'min-h-[300px] h-[calc(100vw*0.5625)]' : 
                     isTablet ? 'min-h-[400px] h-[calc(100vw*0.4)]' : 
                     isDesktop ? 'min-h-[500px] h-[calc(100vh*0.6)]' : 'min-h-[300px] h-[calc(100vw*0.5625)]'
                   }`}>
                                   <video
                       ref={videoRef}
                       src="/videos/ScreenRecording_08-13-2025 18-45-18_1.MP4"
                       muted={isMuted}
                       className="w-full h-full object-contain rounded-none sm:rounded-lg touch-manipulation"
                       onTimeUpdate={handleTimeUpdate}
                       onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                       onPlay={() => setIsPlaying(true)}
                       onPause={() => setIsPlaying(false)}
                       onEnded={() => setIsPlaying(false)}
                       onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
                       poster="/images/IMG_750E9EF883FD-1.jpeg"
                       playsInline
                       preload="none"
                       webkit-playsinline="true"
                       x5-playsinline="true"
                       x5-video-player="true"
                       x5-video-player-type="h5"
                     >
                Your browser does not support the video tag.
              </video>
              
                             {/* Click to Play Overlay */}
               {!isPlaying && (
                 <div 
                   className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                   onClick={handlePlayPause}
                 >
                   <div className={`bg-white/20 backdrop-blur-sm rounded-full border border-white/30 ${
                     isMobile ? 'p-6' : 'p-4 sm:p-6'
                   }`}>
                     <Play className={`text-white ${
                       isMobile ? 'w-12 h-12' : 'w-8 h-8 sm:w-12 sm:h-12'
                     }`} />
                   </div>
                 </div>
               )}

                                 {/* Custom Video Controls Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${
                     isMobile ? 'opacity-100' : 'opacity-0 hover:opacity-100 sm:group-hover:opacity-100'
                   }`}>
                     <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 pointer-events-auto">
                       <div className={`flex items-center justify-center ${
                         isMobile ? 'space-x-3' : 'space-x-2 sm:space-x-4'
                       }`}>
                                         <Button
                       onClick={handlePlayPause}
                       className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg ${
                         isMobile ? 'px-4 py-2 text-sm min-w-[100px]' : 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm min-w-[80px] sm:min-w-[100px]'
                       }`}
                       title={isPlaying ? 'Pause video (Space)' : 'Play video (Space)'}
                     >
                       {isPlaying ? <Pause className="w-4 h-4 sm:w-4 sm:h-4" /> : <Play className="w-4 h-4 sm:w-4 sm:h-4" />}
                       <span className={`${isMobile ? 'inline' : 'hidden sm:inline'} ml-1`}>{isPlaying ? 'Pause' : 'Play'}</span>
                     </Button>
                    
                    <div className="flex items-center space-x-2 group/volume">
                      <Button
                        onClick={handleMuteToggle}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm"
                        title={isMuted ? 'Unmute video (M)' : 'Mute video (M)'}
                      >
                        {isMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </Button>
                      
                                           {/* Volume Slider */}
                     <div className={`${
                       isMobile ? 'block' : 'hidden group-hover/volume:block sm:block'
                     } w-16 sm:w-20`}>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                          title="Volume control"
                        />
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleRestart}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm"
                      title="Restart video (R)"
                    >
                      <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                    
                    <Button
                      onClick={handleFullscreen}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm"
                      title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    >
                      {isFullscreen ? (
                        <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 border border-white rounded-sm"></div>
                        </div>
                      ) : (
                        <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

                               {/* Progress Bar */}
                   <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent ${
                     isMobile ? 'p-3' : 'p-2 sm:p-4'
                   }`}>
                     <div className={`flex items-center ${
                       isMobile ? 'space-x-3' : 'space-x-2 sm:space-x-4'
                     }`}>
                       <span className={`text-white font-mono flex-shrink-0 ${
                         isMobile ? 'text-sm' : 'text-xs sm:text-sm'
                       }`}>
                         {formatTime(currentTime)}
                       </span>
                       
                       <div className="flex-1 relative min-w-0">
                         <input
                           type="range"
                           min="0"
                           max={duration || 100}
                           value={currentTime}
                           onChange={handleSeek}
                           className={`w-full rounded-lg appearance-none cursor-pointer slider ${
                             isMobile ? 'h-2' : 'h-1.5 sm:h-2'
                           } bg-white/20`}
                           style={{
                             background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / (duration || 100)) * 100}%, rgba(255,255,255,0.2) ${(currentTime / (duration || 100)) * 100}%, rgba(255,255,255,0.2) 100%)`
                           }}
                         />
                       </div>
                       
                       <span className={`text-white font-mono flex-shrink-0 ${
                         isMobile ? 'text-sm' : 'text-xs sm:text-sm'
                       }`}>
                         {formatTime(duration)}
                       </span>
                     </div>
                   </div>
          </div>


        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
