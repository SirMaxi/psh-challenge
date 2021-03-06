import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import './chatBubble.scss'

interface ChatBubbleProps {
  imageURL: string
  date: string
  text: string
  userId: string
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  imageURL,
  text,
  userId,
  date,
}) => {
  const activeUser = useSelector((state: RootState) => state.chat.activeUser)

  return (
    <div
      className={`bubble-container ${
        userId === activeUser ? 'bubble-direction-reverse' : ''
      }`}
    >
      <img className="img-circle" src={imageURL} alt="avatar" />

      <div>
        <span
          className={`d-flex time ${
            userId === activeUser
              ? 'justify-content-start'
              : 'justify-content-end'
          }`}
        >
          {date}
        </span>
        <div className={`bubble ${userId === activeUser ? 'me' : 'you'}`}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
