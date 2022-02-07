import { User } from 'mock/users'
import React from 'react'
import './chatHeader.scss'

interface ChatHeaderProps {
  userData: User
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ userData }) => {
  const { firstname, lastname, profilePicture, rol } = userData
  return (
    <div className="header-container">
      <img src={profilePicture} alt="profile avatar" />
      <div className="names">
        <h1>{`${firstname} ${lastname}`}</h1>
        <h4>{rol}</h4>
      </div>
    </div>
  )
}

export default ChatHeader
