import React, { useState } from 'react'
import FloatingButton from './FloatingButton.jsx'
import ChatWindow from './ChatWindow.jsx'

// Main Chatbot Component
const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <>
      <FloatingButton isOpen={isChatOpen} onClick={toggleChat} />
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.45);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.65);
        }
      `}} />
    </>
  )
}

export default Chatbot
