'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0) setIsMuted(false)
  }

  return (
    <div className={`fixed top-4 left-4 z-40 transition-all duration-300 ${isMinimized ? 'w-16' : 'w-80'}`}>
      <div className="romantic-card p-4">
        <audio
          ref={audioRef}
          src="/audio/🎶 __Title_ Forever and Always__.mp3"
          loop
          onEnded={() => setIsPlaying(false)}
        />
        
        {!isMinimized ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold text-sm">Our Song</span>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-purple-300 hover:text-white text-xs"
              >
                ─
              </button>
            </div>
            
            <p className="text-purple-200 text-xs mb-3 italic">Forever and Always</p>
            
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center hover:from-purple-500 hover:to-purple-700 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </button>
              
              <div className="flex-1 flex items-center gap-2">
                <button onClick={toggleMute} className="text-purple-300 hover:text-white">
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-purple-900 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center hover:from-purple-500 hover:to-purple-700 transition-colors">
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Music className="w-5 h-5 text-white" />
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  )
}