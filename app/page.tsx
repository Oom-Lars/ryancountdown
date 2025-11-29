'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import CountdownTimer from './components/CountdownTimer'
import LoveReminders from './components/LoveReminders'
import CatPets from './components/CatPets'
import Navigation from './components/Navigation'
import LoveNotes from './components/LoveNotes'
import Goals from './components/Goals'
import Quotes from './components/Quotes'

import StarryBackground from './components/StarryBackground'
import OrchidPetals from './components/OrchidPetals'
import LoadingScreen from './components/LoadingScreen'
import OpenWhenLetters from './components/OpenWhenLetters'
import DailyLoveChallenge from './components/DailyLoveChallenge'
import WhyILoveYouGenerator from './components/WhyILoveYouGenerator'
import CharacterCreator from './components/CharacterCreator'
import CountdownCelebration from './components/CountdownCelebration'
import Anniversaries from './components/Anniversaries'
import MusicPlayer from './components/MusicPlayer'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <LoadingScreen />
      <StarryBackground />
      <OrchidPetals />
      <CountdownCelebration />
      
      <div className="min-h-screen p-4 pb-32 content-wrapper">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gradient mb-4">
            Our Infinite Love Story
          </h1>
          <div className="flex justify-center items-center gap-3 text-purple-300">
            <span className="text-2xl">🌸</span>
            <p className="font-serif text-xl italic">Counting down to forever with you</p>
            <span className="text-2xl">🌸</span>
          </div>
        </div>

        {/* Navigation */}
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <div className="mt-8">
          {currentPage === 'home' && (
            <div className="space-y-8">
              <CountdownTimer />
              
              <div className="romantic-card p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl">🌸</span>
                  <h3 className="font-serif text-2xl text-white text-center">
                    Welcome to Our Love Story
                  </h3>
                  <span className="text-4xl">🌸</span>
                </div>
                <p className="text-purple-200 leading-relaxed text-center max-w-2xl mx-auto">
                  This is our special place - a countdown to the moment we've been dreaming about. 
                  Every second brings us closer to December 20th, when I can finally hold you in my arms. 
                  Explore our love notes, our goals, inspiring quotes, and fun activities we can do together. 
                  Don't forget to pet Fluffy and Kai - they're excited for us too! 🐱
                </p>
                <div className="mt-6 text-center">
                  <p className="text-purple-300 italic text-sm">"Some infinities are bigger than other infinities."</p>
                  <p className="text-purple-400 text-xs mt-1">— The Fault in Our Stars</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="love-note-card text-center">
                  <div className="text-4xl mb-3">💜</div>
                  <h4 className="text-white font-semibold mb-2">Met Online</h4>
                  <p className="text-purple-200 text-sm">Our love story started with a message</p>
                  <p className="text-purple-400 text-xs mt-2 italic">"One choice can transform you"</p>
                </div>
                <div className="love-note-card text-center">
                  <div className="text-4xl mb-3">🎮</div>
                  <h4 className="text-white font-semibold mb-2">Gaming Together</h4>
                  <p className="text-purple-200 text-sm">Building worlds and memories</p>
                  <p className="text-purple-400 text-xs mt-2 italic">"Becoming fearless isn't the point"</p>
                </div>
                <div className="love-note-card text-center">
                  <div className="text-4xl mb-3">🌸</div>
                  <h4 className="text-white font-semibold mb-2">Forever</h4>
                  <p className="text-purple-200 text-sm">Planning our future together</p>
                  <p className="text-purple-400 text-xs mt-2 italic">"I'm in love with you"</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <DailyLoveChallenge />
                <WhyILoveYouGenerator />
              </div>
            </div>
          )}

          {currentPage === 'lovenotes' && <LoveNotes />}
          {currentPage === 'anniversaries' && <Anniversaries />}
          {currentPage === 'goals' && <Goals />}
          {currentPage === 'quotes' && <Quotes />}
          {currentPage === 'letters' && <OpenWhenLetters />}
          {currentPage === 'character' && <CharacterCreator />}
        </div>
      </div>

        {/* Love Reminders - always visible */}
        <LoveReminders />
        
        {/* Cat Pets - always visible */}
        <CatPets />
        
        {/* Music Player - always visible */}
        <MusicPlayer />
      </div>
    </>
  )
}
