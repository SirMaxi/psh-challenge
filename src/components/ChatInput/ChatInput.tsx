import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createMessage } from 'redux/action/chat.action'
import { RootState } from 'redux/reducer/rootReducer'
import './chatInput.scss'

interface ChatInputProp {
  conversationId: string
}

const ChatInput: React.FC<ChatInputProp> = ({ conversationId }) => {
  const [value, setValue] = useState<string>()
  const dispatch = useDispatch()

  const handleChange = (event) => setValue(event.target.value)
  const activeUser = useSelector((state: RootState) => state.chat.activeUser)

  const getTime = () => {
    const date = new Date()
    return date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      createMessage({
        value,
        activeUser,
        conversationId,
        createdAt: getTime().toUpperCase(),
      })
    )
    setValue('')
  }

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input-text-area"
        value={value}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      <input className="chat-input-button" type="submit" value="SEND" />
    </form>
  )
}

export default ChatInput
