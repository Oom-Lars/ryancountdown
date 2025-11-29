'use client'

import { Quote, Heart, Sparkles } from 'lucide-react'

export default function Quotes() {
  const quotes = [
    {
      text: "I fell in love the way you fall asleep: slowly, and then all at once.",
      source: "The Fault in Our Stars",
      theme: "tfios"
    },
    {
      text: "Some infinities are bigger than other infinities.",
      source: "The Fault in Our Stars",
      theme: "tfios"
    },
    {
      text: "You don't get to choose if you get hurt in this world, but you do have some say in who hurts you.",
      source: "The Fault in Our Stars",
      theme: "tfios"
    },
    {
      text: "I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things.",
      source: "The Fault in Our Stars",
      theme: "tfios"
    },
    {
      text: "Becoming fearless isn't the point. That's impossible. It's learning how to control your fear, and how to be free from it.",
      source: "Divergent",
      theme: "divergent"
    },
    {
      text: "I might be in love with you. I'm waiting until I'm sure to tell you, though.",
      source: "Divergent",
      theme: "divergent"
    },
    {
      text: "We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.",
      source: "Divergent",
      theme: "divergent"
    },
    {
      text: "I have a theory that selflessness and bravery aren't all that different.",
      source: "Divergent",
      theme: "divergent"
    },
    {
      text: "One choice can transform you. One choice can destroy you. One choice will define you.",
      source: "Divergent",
      theme: "divergent"
    },
    {
      text: "I love you. Most ardently.",
      source: "Pride & Prejudice",
      theme: "romance"
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Quote className="w-8 h-8 text-purple-400" />
          <h2 className="font-serif text-4xl text-white">Words That Inspire Us</h2>
          <Sparkles className="w-8 h-8 text-pink-400" />
        </div>
        <p className="text-purple-300 italic">From the stories we love</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className={`quote-card animate-slide-up ${
              quote.theme === 'tfios' ? 'border-pink-400' : 
              quote.theme === 'divergent' ? 'border-purple-400' : 
              'border-indigo-400'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Quote className="w-6 h-6 text-purple-400 mb-3" />
            <p className="text-white text-lg leading-relaxed mb-4 font-serif italic">
              "{quote.text}"
            </p>
            <div className="flex items-center justify-between">
              <p className="text-purple-300 text-sm font-medium">
                — {quote.source}
              </p>
              <Heart className="w-4 h-4 text-pink-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="romantic-card p-8 text-center">
        <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-pulse" />
        <p className="text-white text-xl font-serif italic mb-2">
          "Our love story is my favorite."
        </p>
        <p className="text-purple-300">— Us 💜</p>
      </div>
    </div>
  )
}
