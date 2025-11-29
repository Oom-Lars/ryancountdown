'use client'

import { Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'

type Note = {
  title: string
  content?: string
  image?: string
  type: 'text' | 'image'
}

export default function LoveNotes() {
  const notes: Note[] = [
    {
      title: "My Songbird, My Love 💜",
      image: "/images/My_Songbird_my_love.png",
      type: 'image'
    },
    {
      title: "43 Days 🌸",
      image: "/images/43_Days.png",
      type: 'image'
    },
    {
      title: "Smile for Me ✨",
      image: "/images/Smile_for_Me_3.png",
      type: 'image'
    },
    {
      title: "I Love You 💕",
      image: "/images/I_Love_you.png",
      type: 'image'
    },
    {
      title: "You're Like Rum to My Cola 🎮",
      image: "/images/Youre_like_rum_to_my_cola_sweet_smooth_and_the_reason_everything_feels_better.png",
      type: 'image'
    },
    {
      title: "Sweet Moments 🏡",
      image: "/images/Add_a_subheading_1.png",
      type: 'image'
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-serif text-4xl text-white mb-3 flex items-center justify-center gap-3">
          <span className="text-4xl">🌸</span>
          Love Notes for You
          <span className="text-4xl">🌸</span>
        </h2>
        <p className="text-purple-300 italic">Words from my heart to yours</p>
        <p className="text-purple-400 text-sm mt-2 italic">"I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things."</p>
      </div>

      <div className="grid gap-6">
        {notes.map((note, index) => (
          <div key={index} className="love-note-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-start gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <h3 className="font-serif text-xl text-white font-semibold">{note.title}</h3>
            </div>
            {note.type === 'text' ? (
              <p className="text-purple-100 leading-relaxed pl-8">
                {note.content}
              </p>
            ) : (
              <div className="pl-8">
                <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden">
                  <Image
                    src={note.image!}
                    alt={note.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
