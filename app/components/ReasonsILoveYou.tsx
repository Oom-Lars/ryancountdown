'use client'

import { useState, useEffect } from 'react'
import { Heart, Plus, Sparkles } from 'lucide-react'

export default function ReasonsILoveYou() {
  const [reasons, setReasons] = useState<string[]>([
    "Your beautiful smile that lights up my day",
    "How you always ask about my feelings",
    "The way you get excited about our future",
    "Your passion when you talk about things you love",
    "How you make me feel heard and understood",
    "Your kindness and caring heart",
    "The way you laugh at my jokes",
    "How we can talk for hours and never get bored",
    "Your support in everything I do",
    "The way you make distance feel like nothing"
  ])
  const [newReason, setNewReason] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('loveReasons')
    if (saved) {
      setReasons(JSON.parse(saved))
    }
  }, [])

  const addReason = () => {
    if (newReason.trim()) {
      const updated = [...reasons, newReason.trim()]
      setReasons(updated)
      localStorage.setItem('loveReasons', JSON.stringify(updated))
      setNewReason('')
      setShowForm(false)
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
          <h2 className="font-serif text-4xl text-white">Reasons I Love You</h2>
          <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
        </div>
        <p className="text-purple-300 italic mb-4">An ever-growing list of everything I adore about you</p>
        <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full">
          <span className="text-white font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {reasons.length} Reasons and Counting
          </span>
        </div>
      </div>

      <div className="romantic-card p-8">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="love-note-card animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-white flex-1 pt-1">{reason}</p>
              </div>
            </div>
          ))}
        </div>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="elegant-button w-full flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Another Reason
          </button>
        ) : (
          <div className="love-note-card">
            <textarea
              value={newReason}
              onChange={(e) => setNewReason(e.target.value)}
              placeholder="Another reason I love you..."
              className="w-full bg-black/30 border border-purple-500/30 rounded-lg p-4 text-white placeholder-purple-300/50 mb-3"
              rows={3}
            />
            <div className="flex gap-3">
              <button
                onClick={addReason}
                className="elegant-button flex-1"
              >
                Add Reason
              </button>
              <button
                onClick={() => {
                  setShowForm(false)
                  setNewReason('')
                }}
                className="px-6 py-3 rounded-lg border border-purple-500/50 text-purple-300 hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="quote-card">
        <p className="text-purple-200 italic text-center">
          "I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things."
          <br />
          <span className="text-sm text-purple-400">— The Fault in Our Stars</span>
        </p>
      </div>
    </div>
  )
}
