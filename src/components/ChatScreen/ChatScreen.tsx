import React, { useEffect } from 'react'
import Sidebar from 'components/Sidebar'
import { conversationsMock } from 'mock/conversations'
import { usersMock } from 'mock/users'
import { useDispatch } from 'react-redux'
import { setConversations, setUsers } from 'redux/action/chat.action'
import './chatScreen.scss'

const ChatScreen: React.FC = () => {
  const dispatch = useDispatch()

  const initChatScreen = () => {
    dispatch(setConversations(conversationsMock))
    dispatch(setUsers(usersMock))
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
