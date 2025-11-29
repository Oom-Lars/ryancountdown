'use client'

import { useState, useEffect } from 'react'
import { Heart, Sparkles, X } from 'lucide-react'

const loveMessages = [
  "Sangvoeltjie, I love how you always ask about my day 💜",
  "You make me feel so special and loved, my Sangvoeltjie ✨",
  "I can't wait to build our future together, beautiful Sangvoeltjie 🏡",
  "Thank you for always being interested in how I feel, Robyn 💕",
  "My Sangvoeltjie, you're my favorite person to talk to 🌟",
  "I love planning our adventures together, my Sangvoeltjie 🗺️",
  "You make long distance worth every moment, Sangvoeltjie 💜",
  "I love how we met online and found each other, my Sangvoeltjie 💻",
  "Gaming with you is my favorite thing, my beautiful Sangvoeltjie 🎮",
  "I can't wait for our sushi date, Sangvoeltjie! 🍣",
  "Movie marathons with you will be perfect, my Sangvoeltjie 🎬",
  "Let's complete Stardew Valley together, my little bird! 🌾",
  "You're my best friend and my love, my precious Sangvoeltjie 💑",
  "Sangvoeltjie, I love talking about our future with you 💭",
  "You make me believe in forever, my beautiful Sangvoeltjie 💍"
]

export default function LoveReminders() {
  const [currentMessage, setCurrentMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const showReminder = () => {
      setCurrentMessage(loveMessages[messageIndex])
      setShowMessage(true)
      setMessageIndex((prev) => (prev + 1) % loveMessages.length)
      
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }

    const initialTimer = setTimeout(showReminder, 3000)
    const interval = setInterval(showReminder, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [messageIndex])

  if (!showMessage) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-up max-w-sm">
      <div className="romantic-card p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
              <span className="font-serif text-purple-300 text-sm font-semibold">Love Reminder</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              {currentMessage}
            </p>
          </div>
          <button 
            onClick={() => setShowMessage(false)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
