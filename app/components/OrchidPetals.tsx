'use client'

import { useEffect, useState } from 'react'

export default function OrchidPetals() {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; duration: number; delay: number }>>([])

  useEffect(() => {
    const initialPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10
    }))
    setPetals(initialPetals)
  }, [])

  return (
    <>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="orchid-petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`
          }}
        >
          🌸
        </div>
      ))}
    </>
  )
}
