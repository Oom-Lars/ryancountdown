'use client'

import { useState, useEffect } from 'react'
import { Heart, Calendar } from 'lucide-react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-12-20T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      setTimeLeft({
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((difference % (1000 * 60)) / 1000))
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="romantic-card p-8 text-center animate-fade-in">
      <div className="flex justify-center items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-purple-400 animate-pulse" />
        <h2 className="font-serif text-4xl text-white">Until We're Together</h2>
        <Heart className="w-8 h-8 text-purple-400 animate-pulse" />
      </div>
      
      <p className="text-purple-200 text-lg mb-8 italic">
        "I fell in love the way you fall asleep: slowly, and then all at once."
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Days', value: timeLeft.days, color: 'from-purple-400 to-pink-400' },
          { label: 'Hours', value: timeLeft.hours, color: 'from-pink-400 to-purple-400' },
          { label: 'Minutes', value: timeLeft.minutes, color: 'from-purple-400 to-indigo-400' },
          { label: 'Seconds', value: timeLeft.seconds, color: 'from-indigo-400 to-purple-400' }
        ].map((item) => (
          <div key={item.label} className="love-note-card animate-float">
            <div className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-serif`}>
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-white/70 text-sm font-medium mt-2 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 text-purple-300">
        <Calendar className="w-5 h-5" />
        <p className="font-medium">December 20th, 2025</p>
      </div>
    </div>
  )
}
