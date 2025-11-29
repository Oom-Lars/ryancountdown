'use client'

import { useState, useEffect } from 'react'
import { Heart, Cookie, Sparkles, Cat } from 'lucide-react'

type CatType = 'fluffy' | 'kai'

export default function CatPets() {
  const [showFluffyMessage, setShowFluffyMessage] = useState(false)
  const [showKaiMessage, setShowKaiMessage] = useState(false)
  const [fluffyMessage, setFluffyMessage] = useState('')
  const [kaiMessage, setKaiMessage] = useState('')
  const [showInteraction, setShowInteraction] = useState(false)

  const catMessages = {
    fluffy: [
      "Purr... Ryan's Sangvoeltjie and him are perfect together! 💜",
      "Fluffy wants to meet the Sangvoeltjie in December! 🐱",
      "So excited for the reunion! ✨",
      "Meow meow! Team R&R forever! 💕",
      "Kai, Ryan calls her his Sangvoeltjie! 🏐",
      "I love watching their love story! 🌸",
      "December 20th can't come fast enough! 🎄",
      "Ryan's Sangvoeltjie makes him so happy! 🎵"
    ],
    kai: [
      "Kai approves of this epic love story! 🎩",
      "Looking dapper for Team R&R! 🖤",
      "The Sangvoeltjie seems amazing, Ryan picked well! 💜",
      "Meow! This countdown is purrfect! ✨",
      "Fluffy, we're witnessing true love! 💕",
      "Can't wait to see them gaming together! 🎮",
      "Their FiveM boat date story is hilarious! 🚢",
      "Ryan's Sangvoeltjie has the sweetest voice! 🎵"
    ],
    interaction: [
      "🐱💕🐈⬛ Fluffy and Kai are discussing R&R's love story!",
      "🐱✨🐈⬛ The cats are planning December 20th celebrations!",
      "🐱🏐🐈⬛ Fluffy and Kai are practicing their welcome dance!",
      "🐱🌸🐈⬛ Both cats agree: Ryan and his Sangvoeltjie are meant to be!",
      "🐱🎵🐈⬛ The cats love hearing about Ryan's Sangvoeltjie!"
    ]
  }

  const showCatMessage = (cat: CatType) => {
    const messages = cat === 'fluffy' ? catMessages.fluffy : catMessages.kai
    const message = messages[Math.floor(Math.random() * messages.length)]
    
    if (cat === 'fluffy') {
      setFluffyMessage(message)
      setShowFluffyMessage(true)
      setTimeout(() => setShowFluffyMessage(false), 4000)
    } else {
      setKaiMessage(message)
      setShowKaiMessage(true)
      setTimeout(() => setShowKaiMessage(false), 4000)
    }
  }

  const petCat = (cat: CatType) => {
    if (cat === 'fluffy') {
      setFluffyMessage("Purrrr... that feels nice! 🥰")
      setShowFluffyMessage(true)
      setTimeout(() => setShowFluffyMessage(false), 3000)
    } else {
      setKaiMessage("Meow! I love the attention! 😸")
      setShowKaiMessage(true)
      setTimeout(() => setShowKaiMessage(false), 3000)
    }
  }

  useEffect(() => {
    const fluffyInterval = setInterval(() => {
      showCatMessage('fluffy')
    }, 50000)

    const kaiInterval = setInterval(() => {
      showCatMessage('kai')
    }, 55000)

    const interactionInterval = setInterval(() => {
      const message = catMessages.interaction[Math.floor(Math.random() * catMessages.interaction.length)]
      setFluffyMessage(message)
      setShowInteraction(true)
      setShowFluffyMessage(true)
      setTimeout(() => {
        setShowFluffyMessage(false)
        setShowInteraction(false)
      }, 5000)
    }, 120000)

    return () => {
      clearInterval(fluffyInterval)
      clearInterval(kaiInterval)
      clearInterval(interactionInterval)
    }
  }, [])

  return (
    <>
      {/* Fluffy - Grey Cat (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-30">
        {showFluffyMessage && (
          <div className={`absolute bottom-full mb-2 animate-slide-up ${showInteraction ? 'left-1/2 -translate-x-1/2 w-64' : 'left-0'}`}>
            <div className="romantic-card p-3">
              <p className="text-purple-200 text-xs font-medium">{fluffyMessage}</p>
            </div>
          </div>
        )}
        
        <div className="romantic-card p-4 text-center">
          <div 
            className="cursor-pointer hover:scale-110 transition-transform animate-float flex justify-center"
            onClick={() => petCat('fluffy')}
            title="Pet Fluffy"
          >
            <Cat className="w-16 h-16 text-gray-400" />
          </div>
          <p className="text-white font-semibold text-sm mt-2">Fluffy</p>
          <p className="text-purple-300 text-xs">Grey Cat 🌸</p>
        </div>
      </div>

      {/* Kai - Tuxedo Cat (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-30">
        {showKaiMessage && (
          <div className="absolute bottom-full right-0 mb-2 animate-slide-up">
            <div className="romantic-card p-3 max-w-xs">
              <p className="text-purple-200 text-xs font-medium">{kaiMessage}</p>
            </div>
          </div>
        )}
        
        <div className="romantic-card p-4 text-center">
          <div 
            className="cursor-pointer hover:scale-110 transition-transform animate-float flex justify-center"
            onClick={() => petCat('kai')}
            title="Pet Kai"
          >
            <Cat className="w-16 h-16 text-black" />
          </div>
          <p className="text-white font-semibold text-sm mt-2">Kai</p>
          <p className="text-purple-300 text-xs">Tuxedo Cat 🌸</p>
        </div>
      </div>
    </>
  )
}
