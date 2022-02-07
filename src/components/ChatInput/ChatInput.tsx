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

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      createMessage({
        value,
        activeUser,
        conversationId,
        createdAt: '10:15 AM',
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
      />
      <input className="chat-input-button" type="submit" value="Submit" />
    </form>
  )
}

export default ChatInput
