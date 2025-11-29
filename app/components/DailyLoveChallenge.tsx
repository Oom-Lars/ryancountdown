'use client'

import { useState, useEffect } from 'react'
import { Calendar, Heart, CheckCircle2 } from 'lucide-react'

export default function DailyLoveChallenge() {
  const [completed, setCompleted] = useState(false)
  const [currentChallenge, setCurrentChallenge] = useState(0)

  const challenges = [
    "Tell her 3 specific things you love about her today",
    "Share a favorite memory from this week",
    "Send her a voice message saying 'I love you'",
    "Tell her what made you think of her today",
    "Share a song that reminds you of her",
    "Describe your favorite thing about her personality",
    "Tell her about a dream you have for your future together",
    "Share what you're most grateful for about her",
    "Tell her how she makes you feel",
    "Describe a moment when you felt closest to her",
    "Share what you admire most about her",
    "Tell her about something she does that makes you smile",
    "Describe why you're excited for December 20th",
    "Share a compliment you've been meaning to give her",
    "Tell her about a quality of hers you want to learn from"
  ]

  useEffect(() => {
    const today = new Date().toDateString()
    const saved = localStorage.getItem('dailyChallenge')
    
    if (saved) {
      const data = JSON.parse(saved)
      if (data.date === today) {
        setCompleted(data.completed)
        setCurrentChallenge(data.challengeIndex)
      } else {
        const newIndex = Math.floor(Math.random() * challenges.length)
        setCurrentChallenge(newIndex)
        localStorage.setItem('dailyChallenge', JSON.stringify({
          date: today,
          completed: false,
          challengeIndex: newIndex
        }))
      }
    } else {
      const newIndex = Math.floor(Math.random() * challenges.length)
      setCurrentChallenge(newIndex)
      localStorage.setItem('dailyChallenge', JSON.stringify({
        date: today,
        completed: false,
        challengeIndex: newIndex
      }))
    }
  }, [])

  const markComplete = () => {
    const today = new Date().toDateString()
    setCompleted(true)
    localStorage.setItem('dailyChallenge', JSON.stringify({
      date: today,
      completed: true,
      challengeIndex: currentChallenge
    }))
  }

  return (
    <div className="romantic-card p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-8 h-8 text-purple-400" />
        <h3 className="font-serif text-2xl text-white">Today's Love Challenge</h3>
        <span className="text-2xl">🌸</span>
      </div>

      <div className="love-note-card mb-6">
        <p className="text-purple-100 text-lg leading-relaxed mb-4">
          {challenges[currentChallenge]}
        </p>
        
        {!completed ? (
          <button
            onClick={markComplete}
            className="elegant-button w-full flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Mark as Complete
          </button>
        ) : (
          <div className="text-center py-3 bg-green-900/30 rounded-lg border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-green-300 font-semibold">Challenge Completed! 💚</p>
            <p className="text-green-400 text-sm mt-1">Come back tomorrow for a new challenge</p>
          </div>
        )}
      </div>

      <p className="text-purple-300 text-sm text-center italic">
        "One choice can transform you" - Show your love every day 💜
      </p>
    </div>
  )
}
