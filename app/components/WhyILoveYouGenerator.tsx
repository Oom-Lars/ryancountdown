'use client'

import { useState } from 'react'
import { Heart, RefreshCw } from 'lucide-react'

export default function WhyILoveYouGenerator() {
  const [currentReason, setCurrentReason] = useState(0)


  const reasons = [
    "Your smile lights up my entire world 🌟",
    "The way you listen when I talk about my day 💬",
    "How excited you get about things you love 🎮",
    "Your kindness and caring heart 💕",
    "The way you make me laugh even on hard days 😊",
    "How you always ask how I'm feeling 💭",
    "Your passion for the things you care about 🔥",
    "The way you support my dreams ✨",
    "How comfortable I feel being myself with you 🌸",
    "Your beautiful eyes that I can't wait to see in person 👀",
    "The way you make distance feel like nothing 💜",
    "How you remember little things I tell you 📝",
    "Your laugh - it's my favorite sound 🎵",
    "The way you plan our future with me 🏡",
    "How you make every conversation interesting 💫",
    "Your intelligence and the way you think 🧠",
    "The way you care about my feelings 💝",
    "How you make me want to be a better person 🌱",
    "Your patience and understanding 🤗",
    "The way you love me for who I am 💍"
  ]

  const getNewReason = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * reasons.length)
    } while (newIndex === currentReason)
    setCurrentReason(newIndex)
  }



  return (
    <div className="romantic-card p-8">
      <div className="text-center mb-6">
        <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-pulse" />
        <h3 className="font-serif text-2xl text-white mb-2">Why I Love You</h3>
        <p className="text-purple-300 text-sm italic">Click for a random reason 💜</p>
      </div>

      <div className="love-note-card mb-6 min-h-[120px] flex items-center justify-center">
        <p className="text-purple-100 text-xl text-center leading-relaxed font-serif">
          {reasons[currentReason]}
        </p>
      </div>

      <button
        onClick={getNewReason}
        className="elegant-button w-full flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Another Reason
      </button>

      <p className="text-purple-400 text-xs text-center mt-4 italic">
        {reasons.length} reasons and counting... 🌸
      </p>
    </div>
  )
}
