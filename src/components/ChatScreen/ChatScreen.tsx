import React, { useEffect } from 'react'
import Sidebar from 'components/Sidebar'
import { conversationsMock } from 'mock/conversations'
import { useDispatch } from 'react-redux'
import { setConversations } from 'redux/action/chat.action'
import './chatScreen.scss'

const ChatScreen: React.FC = () => {
  const dispatch = useDispatch()

  const initChatScreen = () => {
    dispatch(setConversations(conversationsMock))
  }

  useEffect(() => {
    initChatScreen()
  }, [])

  return (
    <div className="separar">
      <Sidebar />
      <div>dd</div>
    </div>
  )
}

export default ChatScreen
