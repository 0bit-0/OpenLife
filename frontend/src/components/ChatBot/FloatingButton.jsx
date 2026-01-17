import React, { useState } from 'react'
import { X, MessageCircle, Sparkles } from 'lucide-react'

// FloatingButton Component
const FloatingButton = ({ isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={ `z-9999 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 fixed bottom-6 right-6 bg-gradient-to-r from-emerald-400 to-indigo-400 hover:from-emerald-300 hover:to-indigo-300 text-slate-950 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
        isOpen ? 'rotate-90 scale-90' : ''
      }`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? (
        <X className="w-7 h-7" />
      ) : (
        <>
          <div className="relative">
            <MessageCircle className="w-7 h-7" />
            {/* Sparkle effect on hover - positioned at top-right of the MessageCircle icon */}
            <Sparkles 
              className={`absolute -top-2 -right-2 w-4 h-4 text-amber-200 transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`} 
            />
          </div>
          {/* Green status dot - positioned at top-right corner of the button itself */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
        </>
      )}
    </button>
  )
}

export default FloatingButton
