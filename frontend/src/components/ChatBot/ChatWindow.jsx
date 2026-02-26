
import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

// ChatWindow Component
const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue('')
    
    // Simulate bot response
    setIsTyping(true)
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Thanks for your message! I'm here to assist you with any questions you might have.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div 
      className={`z-9999 fixed bottom-28 right-6 w-100 h-150 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.6)] flex flex-col transition-all duration-300 transform border border-white/10 bg-white/5 backdrop-blur-xl ${
        isOpen 
          ? 'opacity-100 translate-y-0 visible scale-100' 
          : 'opacity-0 translate-y-10 invisible scale-95'
      }`}
    >
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} isTyping={isTyping} />
      <ChatInput 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        onSend={handleSendMessage}
      />
    </div>
  )
}

export default ChatWindow
