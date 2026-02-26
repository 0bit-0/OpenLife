import React, { useEffect, useRef } from 'react'
import Message from './Message'
import TypingIndicator from './TypingIndicator'

// ChatMessages Component
const ChatMessages = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  return (
    <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-white/0 via-white/0 to-black/30 custom-scrollbar">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessages
