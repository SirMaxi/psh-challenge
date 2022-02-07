import React from 'react'
import Sidebar from 'components/Sidebar'
import './chatScreen.scss'
import Chat from 'components/Chat/Chat'

const ChatScreen: React.FC = () => {
  return (
    <div className="chat-container">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default ChatScreen
