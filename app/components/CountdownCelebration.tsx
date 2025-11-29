'use client'

import { useEffect, useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

export default function CountdownCelebration() {
  const [showCelebration, setShowCelebration] = useState(false)
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const targetDate = new Date('2025-12-20T00:00:00').getTime()
    const now = new Date().getTime()
    
    if (now >= targetDate) {
      setShowCelebration(true)
      const confettiArray = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2
      }))
      setConfetti(confettiArray)
    }
  }, [])

  if (!showCelebration) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute text-2xl animate-bounce"
          style={{
            left: `${c.left}%`,
            top: '-50px',
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`
          }}
        >
          {['💜', '🌸', '✨', '💕', '🎉'][Math.floor(Math.random() * 5)]}
        </div>
      ))}

      <div className="romantic-card p-12 max-w-2xl text-center animate-slide-up">
        <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
        <h1 className="font-serif text-5xl text-white mb-6">TODAY'S THE DAY! 🎉</h1>
        <Heart className="w-20 h-20 text-pink-400 mx-auto mb-6 animate-pulse" />
        <p className="text-purple-100 text-2xl mb-6 leading-relaxed">
          December 20th, 2025
        </p>
        <p className="text-purple-200 text-xl mb-8 italic">
          "I fell in love the way you fall asleep: slowly, and then all at once."
        </p>
        <div className="space-y-4 text-purple-100 text-lg">
          <p>The countdown is over.</p>
          <p>Our forever begins now. 💜</p>
          <p className="text-3xl mt-6">🌸 I LOVE YOU 🌸</p>
        </div>
      </div>
    </div>
  )
}
