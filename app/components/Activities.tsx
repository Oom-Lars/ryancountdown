'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Calendar, Music, Image, Sparkles } from 'lucide-react'

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)

  const activities = [
    {
      id: 'quiz',
      title: 'How Well Do We Know Each Other?',
      icon: Heart,
      description: 'Test your knowledge about each other',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'checkin',
      title: 'Daily Check-In',
      icon: MessageCircle,
      description: 'Share how you\'re feeling today',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'memories',
      title: 'Our Memory Timeline',
      icon: Calendar,
      description: 'Important moments in our journey',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'playlist',
      title: 'Our Shared Playlist',
      icon: Music,
      description: 'Songs that remind us of each other',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'vision',
      title: 'Future Vision Board',
      icon: Image,
      description: 'Dreams and plans for our future',
      color: 'from-pink-500 to-indigo-500'
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-4xl">🌸</span>
          <h2 className="font-serif text-4xl text-white">Our Activities</h2>
          <span className="text-4xl">🌸</span>
        </div>
        <p className="text-purple-300 italic">Fun ways to stay connected</p>
        <p className="text-purple-400 text-sm mt-2 italic">"I have a theory that selflessness and bravery aren't all that different."</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <button
              key={activity.id}
              onClick={() => setSelectedActivity(activity.id)}
              className="love-note-card text-left hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl text-white mb-2 font-semibold">
                {activity.title}
              </h3>
              <p className="text-purple-200 text-sm">
                {activity.description}
              </p>
            </button>
          )
        })}
      </div>

      {selectedActivity === 'quiz' && (
        <div className="romantic-card p-8 animate-slide-up">
          <h3 className="font-serif text-2xl text-white mb-6">Couple's Quiz</h3>
          <div className="space-y-4">
            <div className="love-note-card">
              <p className="text-purple-200 mb-3 font-semibold">What's her favorite way to spend time with you?</p>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  Playing games together 🎮
                </button>
                <button className="w-full text-left px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  Talking about our future 💭
                </button>
                <button className="w-full text-left px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  Just talking about our days 💬
                </button>
              </div>
            </div>
            <p className="text-purple-300 text-sm italic text-center">
              Hint: All of these are correct! She loves all the time with you 💜
            </p>
          </div>
        </div>
      )}

      {selectedActivity === 'checkin' && (
        <div className="romantic-card p-8 animate-slide-up">
          <h3 className="font-serif text-2xl text-white mb-6">Daily Check-In</h3>
          <div className="space-y-4">
            <div className="love-note-card">
              <p className="text-purple-200 mb-3 font-semibold">How are you feeling today?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button className="px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  😊 Happy
                </button>
                <button className="px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  💜 Loved
                </button>
                <button className="px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  😴 Tired
                </button>
                <button className="px-4 py-2 rounded bg-white/5 hover:bg-purple-600 text-white transition-colors">
                  🥰 Missing You
                </button>
              </div>
            </div>
            <div className="love-note-card">
              <p className="text-purple-200 mb-3 font-semibold">What made you smile today?</p>
              <textarea 
                className="w-full bg-black/30 border border-purple-500/30 rounded-lg p-4 text-white placeholder-purple-300/50"
                placeholder="Share something that brought you joy..."
                rows={3}
              />
            </div>
            <p className="text-purple-300 text-sm italic text-center">
              Remember: I'm always here for you, no matter how you're feeling 💜
            </p>
          </div>
        </div>
      )}

      {selectedActivity === 'memories' && (
        <div className="romantic-card p-8 animate-slide-up">
          <h3 className="font-serif text-2xl text-white mb-6">Our Memory Timeline</h3>
          <div className="space-y-4">
            {[
              { date: 'The Beginning', event: 'When we first met online 💻', emoji: '✨' },
              { date: 'First "I Love You"', event: 'The moment everything changed 💜', emoji: '💕' },
              { date: 'Gaming Together', event: 'Our first game session 🎮', emoji: '🎮' },
              { date: 'Planning December', event: 'Counting down to our first meeting 🗓️', emoji: '🎄' },
            ].map((memory, index) => (
              <div key={index} className="love-note-card flex items-start gap-4">
                <div className="text-3xl">{memory.emoji}</div>
                <div>
                  <p className="text-purple-300 font-semibold mb-1">{memory.date}</p>
                  <p className="text-white">{memory.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedActivity === 'playlist' && (
        <div className="romantic-card p-8 animate-slide-up">
          <h3 className="font-serif text-2xl text-white mb-6">Our Shared Playlist</h3>
          <div className="space-y-3">
            {[
              { title: 'Our Song', artist: 'Add your special song here 💜' },
              { title: 'When I Think of You', artist: 'Songs that remind me of you ✨' },
              { title: 'Future Memories', artist: 'Songs for our adventures 🎵' },
            ].map((song, index) => (
              <div key={index} className="love-note-card flex items-center gap-4">
                <Music className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">{song.title}</p>
                  <p className="text-purple-300 text-sm">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedActivity === 'vision' && (
        <div className="romantic-card p-8 animate-slide-up">
          <h3 className="font-serif text-2xl text-white mb-6">Our Future Vision Board</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Our Home 🏡', description: 'Building our life together' },
              { title: 'Adventures 🗺️', description: 'Places we want to explore' },
              { title: 'Milestones 💍', description: 'Dreams we want to achieve' },
              { title: 'Daily Life ☕', description: 'Simple moments together' },
            ].map((vision, index) => (
              <div key={index} className="love-note-card">
                <h4 className="text-white font-semibold mb-2">{vision.title}</h4>
                <p className="text-purple-200 text-sm">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
