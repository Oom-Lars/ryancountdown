'use client'

import { useState } from 'react'
import { CheckCircle2, Circle, Target, Sparkles } from 'lucide-react'

export default function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Sushi Date 🍣', completed: false, description: 'Try all the different rolls and find our favorites together' },
    { id: 2, text: 'Watch Alien vs Predator Franchise 🎬', completed: false, description: 'Epic movie marathon with snacks and cuddles' },
    { id: 3, text: 'Complete Stardew Valley Together 🌾', completed: false, description: 'Build our perfect farm and achieve perfection!' },
  ])

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ))
  }

  const completedCount = goals.filter(g => g.completed).length

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="romantic-card p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-4xl">🌸</span>
            <h2 className="font-serif text-4xl text-white">Our December Goals</h2>
            <span className="text-4xl">🌸</span>
          </div>
          <p className="text-purple-300 italic mb-4">Adventures waiting for us on December 20th</p>
          <p className="text-purple-400 text-sm italic">"We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another."</p>
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full">
            <span className="text-white font-semibold">
              {completedCount} of {goals.length} completed
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`love-note-card cursor-pointer transition-all duration-300 ${
                goal.completed ? 'opacity-75 bg-gradient-to-br from-green-900/20 to-purple-900/20' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {goal.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  ) : (
                    <Circle className="w-6 h-6 text-purple-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-lg mb-2 ${
                    goal.completed ? 'text-green-300 line-through' : 'text-white'
                  }`}>
                    {goal.text}
                  </h3>
                  <p className="text-purple-200 text-sm">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 quote-card">
          <p className="text-purple-200 italic text-center">
            "The fault, dear Brutus, is not in our stars, but in ourselves." <br />
            <span className="text-sm text-purple-400">- But our stars aligned perfectly to bring us together 🌸</span>
          </p>
        </div>
      </div>
    </div>
  )
}
