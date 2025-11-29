'use client'

import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-purple-950 to-black flex items-center justify-center">
      <div className="text-center">
        <Heart className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-pulse" />
        <h2 className="font-serif text-3xl text-white mb-3">Loading Our Love Story</h2>
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  )
}
