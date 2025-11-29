'use client'

import { Heart, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function Anniversaries() {
  const anniversaries = [
    {
      title: "1 Month Anniversary 💜",
      date: "Our First Month Together",
      description: "A heartfelt message from the beginning of our journey",
      type: 'pdf' as const,
      file: "/images/My beloved Robyn, my beautiful little bird.pdf"
    },
    {
      title: "2 Months Anniversary 🌸",
      date: "Two Months of Love",
      description: "Celebrating our growing bond",
      type: 'image' as const,
      image: "/images/2monthsanniversary.png"
    },
    {
      title: "3 Months Anniversary ✨",
      date: "Three Months Strong",
      description: "Our love continues to flourish",
      type: 'image' as const,
      image: "/images/3monthsanniversary.png"
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="font-serif text-4xl text-white mb-3 flex items-center justify-center gap-3">
          <Heart className="w-10 h-10 text-pink-400 animate-pulse" />
          Our Anniversary Memories
          <Heart className="w-10 h-10 text-pink-400 animate-pulse" />
        </h2>
        <p className="text-purple-300 italic">Celebrating every milestone of our love story</p>
        <p className="text-purple-400 text-sm mt-2 italic">"Every month with you feels like a beautiful beginning"</p>
      </div>

      <div className="grid gap-8">
        {anniversaries.map((anniversary, index) => (
          <div key={index} className="romantic-card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-purple-400" />
              <h3 className="font-serif text-2xl text-white font-semibold">{anniversary.title}</h3>
            </div>
            
            <p className="text-purple-300 mb-2 font-medium">{anniversary.date}</p>
            <p className="text-purple-200 mb-6 italic">{anniversary.description}</p>

            {anniversary.type === 'image' ? (
              <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                <Image
                  src={anniversary.image!}
                  alt={anniversary.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="text-center">
                <div className="love-note-card p-6 max-w-md mx-auto">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-white font-semibold mb-3">1 Month Anniversary Letter</p>
                  <p className="text-purple-200 text-sm mb-4">A special PDF message created with love</p>
                  <a
                    href={anniversary.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="elegant-button inline-flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Open Letter
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="quote-card">
        <p className="text-purple-200 italic text-center">
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          <br />
          <span className="text-sm text-purple-400">— Maya Angelou</span>
        </p>
      </div>
    </div>
  )
}