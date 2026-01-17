import React from 'react'

// Message Component
const Message = ({ message }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div 
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
    >
      <div className={`flex gap-3 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
          message.type === 'bot' 
            ? 'bg-gradient-to-br from-emerald-300 to-indigo-400 shadow-[0_12px_24px_rgba(16,185,129,0.35)] text-slate-950' 
            : 'bg-white/10 border border-white/20 text-emerald-200'
        }`}>
          <span className="text-xs font-bold">
            {message.type === 'bot' ? 'AI' : 'U'}
          </span>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className={`px-4 py-3 rounded-2xl shadow-md ${
            message.type === 'bot'
              ? 'bg-white/5 text-slate-100 rounded-tl-none border border-white/10'
              : 'bg-emerald-300/15 text-emerald-100 rounded-tr-none border border-emerald-300/30'
          }`}>
            <p className="text-sm leading-relaxed">{message.text}</p>
          </div>
          <span className={`text-xs text-slate-500 px-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Message
