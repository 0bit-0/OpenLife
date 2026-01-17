import React from 'react'

// TypingIndicator Component
const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fadeIn">
      <div className="flex gap-3 max-w-[85%]">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-300 to-indigo-400 flex items-center justify-center shadow-[0_12px_24px_rgba(16,185,129,0.35)] text-slate-950">
          <span className="text-xs font-bold">AI</span>
        </div>
        <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 shadow-md">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-emerald-200/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-emerald-200/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-emerald-200/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TypingIndicator
