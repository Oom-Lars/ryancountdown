'use client'

import { useState } from 'react'
import { Users, Heart } from 'lucide-react'

export default function CharacterCreator() {
  const [stats] = useState({
    love: 100,
    communication: 98,
    gaming: 95,
    humor: 92,
    support: 100,
    adventure: 88
  })

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Users className="w-8 h-8 text-purple-400" />
          <h2 className="font-serif text-4xl text-white">Our Couple Character</h2>
          <span className="text-4xl">🌸</span>
        </div>
        <p className="text-purple-300 italic">The ultimate duo stats</p>
      </div>

      <div className="romantic-card p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👫</div>
          <h3 className="font-serif text-3xl text-white mb-2">Team R&R</h3>
          <p className="text-purple-300 italic">Class: Long Distance Legends</p>
          <p className="text-purple-400 text-sm mt-1">Faction: Dauntless Hearts 💜</p>
        </div>

        <div className="space-y-4 mb-8">
          {Object.entries(stats).map(([stat, value]) => (
            <div key={stat}>
              <div className="flex justify-between mb-2">
                <span className="text-white capitalize font-semibold">{stat}</span>
                <span className="text-purple-300">{value}/100</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="love-note-card">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span>⚔️</span> Special Abilities
            </h4>
            <ul className="text-purple-200 text-sm space-y-1">
              <li>• Infinite Patience</li>
              <li>• Master Communicators</li>
              <li>• Co-op Champions</li>
              <li>• Future Planners</li>
            </ul>
          </div>

          <div className="love-note-card">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span>🎯</span> Current Quest
            </h4>
            <ul className="text-purple-200 text-sm space-y-1">
              <li>• Countdown to December 20th</li>
              <li>• Build Stardew Farm</li>
              <li>• Plan Epic Reunion</li>
              <li>• Strengthen Bond Daily</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2 animate-pulse" />
          <p className="text-purple-300 italic text-sm">
            "We believe in ordinary acts of bravery" 💜
          </p>
        </div>
      </div>
    </div>
  )
}
