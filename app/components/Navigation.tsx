'use client'

import { Heart, BookOpen, Target, MessageCircle, Quote, Calendar } from 'lucide-react'

type NavigationProps = {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const pages = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'lovenotes', label: 'Love Notes', icon: MessageCircle },
    { id: 'anniversaries', label: 'Anniversaries', icon: Calendar },
    { id: 'letters', label: 'Open When', icon: BookOpen },
    { id: 'goals', label: 'Our Goals', icon: Target },
    { id: 'quotes', label: 'Quotes', icon: Quote },
    { id: 'character', label: 'Our Character', icon: Heart },
  ]

  return (
    <nav className="romantic-card p-2 mb-8">
      <div className="flex flex-wrap justify-center gap-2">
        {pages.map((page) => {
          const Icon = page.icon
          return (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === page.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg'
                  : 'text-purple-200 hover:bg-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium text-sm">{page.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
