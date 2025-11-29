'use client'

import { useState } from 'react'
import { Mail, Heart, Sparkles, X } from 'lucide-react'

export default function OpenWhenLetters() {
  const [openLetter, setOpenLetter] = useState<number | null>(null)

  const letters = [
    {
      title: "Open When You Miss Me",
      emoji: "💜",
      content: "I miss you too, more than words can say. Close your eyes and imagine I'm right there with you, holding your hand. Remember that every day apart brings us one day closer to being together. I'm always thinking of you, always loving you. You're never alone because you carry my heart with you wherever you go. 🌸"
    },
    {
      title: "Open When You Need a Smile",
      emoji: "😊",
      content: "Remember when I asked you on a date in FiveM? You didn't answer your phone and EMS showed up and we had to take them back with the boat. Your laugh is my favorite sound in the world. Here's a reminder: You're amazing, you're beautiful, and you make my life infinitely better. I hope this brings a smile to your face, because your smile lights up my entire world. Keep shining, my love! ✨"
    },
    {
      title: "Open When You're Feeling Down",
      emoji: "🤗",
      content: "Bad days happen, but they don't last forever. You are so much stronger than you know, and I believe in you completely. Whatever you're going through, we'll face it together. I'm here for you, always. You deserve all the happiness in the world, and I'll spend every day trying to give that to you. I love you. 💕"
    },
    {
      title: "Open When You Can't Sleep",
      emoji: "🌙",
      content: "I wish I could be there to hold you until you fall asleep. Imagine my arms around you, keeping you safe and warm. Think about all our happy memories, our future plans, and know that I'm probably thinking about you right now too. Sweet dreams, my love. Dream of us, dream of December 20th, dream of our forever. 💤"
    },
    {
      title: "Open When You're Proud of Yourself",
      emoji: "🎉",
      content: "I KNEW YOU COULD DO IT! I'm so incredibly proud of you! You're amazing and talented and capable of anything you set your mind to. Celebrate this win - you deserve it! I wish I could be there to celebrate with you in person, but know that I'm cheering for you always. You're incredible! 🌟"
    },
    {
      title: "Open When You Need Motivation",
      emoji: "💪",
      content: "You've got this! Remember why you started, remember what you're working towards. You're one of the strongest people I know, and I have complete faith in you. Take it one step at a time, and know that I'm supporting you every step of the way. You're going to do amazing things. I believe in you! 🔥"
    },

    {
      title: "Open When You Want to Feel Loved",
      emoji: "💝",
      content: "You are loved. So, so loved. More than you could ever imagine. I love the way you laugh, the way you think, the way you care about others. I love your quirks, your passions, your dreams. I love everything about you. You are my favorite person, my best friend, my forever. Never forget how much you mean to me. I love you infinitely. 💜🌸"
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Mail className="w-8 h-8 text-purple-400" />
          <h2 className="font-serif text-4xl text-white">Open When Letters</h2>
          <span className="text-4xl">🌸</span>
        </div>
        <p className="text-purple-300 italic">For whenever you need me</p>
        <p className="text-purple-400 text-sm mt-2 italic">"I'm in love with you, and I know that love is just a shout into the void"</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {letters.map((letter, index) => (
          <button
            key={index}
            onClick={() => setOpenLetter(index)}
            className="love-note-card text-left hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{letter.emoji}</span>
              <h3 className="font-serif text-lg text-white font-semibold group-hover:text-purple-300 transition-colors">
                {letter.title}
              </h3>
            </div>
            <p className="text-purple-300 text-sm pl-11">Click to open 💌</p>
          </button>
        ))}
      </div>

      {openLetter !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="romantic-card p-8 max-w-2xl w-full relative animate-slide-up">
            <button
              onClick={() => setOpenLetter(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <span className="text-6xl mb-4 block">{letters[openLetter].emoji}</span>
              <h3 className="font-serif text-3xl text-white mb-2">{letters[openLetter].title}</h3>
              <Sparkles className="w-6 h-6 text-purple-400 mx-auto" />
            </div>
            
            <p className="text-purple-100 text-lg leading-relaxed text-center">
              {letters[openLetter].content}
            </p>
            
            <div className="mt-6 text-center">
              <Heart className="w-8 h-8 text-pink-400 mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
