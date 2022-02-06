import React, { useEffect } from 'react'
import Sidebar from 'components/Sidebar'
import { conversations } from 'mock/conversations'
import { useDispatch, useSelector } from 'react-redux'
import { setConversations } from 'redux/action/chat.action'

const ChatScreen: React.FC = () => {
  const dispatch = useDispatch()
  const chat = useSelector((state: any) => {
    return state.chat
  })

  console.log(chat)
  const initChatScreen = () => {
    dispatch(setConversations(conversations))
  }

  useEffect(() => {
    initChatScreen()
  }, [])

  return <Sidebar />
}

export default ChatScreen
