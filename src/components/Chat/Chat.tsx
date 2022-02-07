import ChatHeader from 'components/ChatHeader'
import { Conversation } from 'mock/conversations'
import { User } from 'mock/users'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import ChatBubble from 'components/ChatBubble'
import ChatInput from 'components/ChatInput'
import './chat.scss'

const findConversationsById = (id: string) => (conversation: Conversation) =>
  conversation.conversationId === id

const findUserById = (id: string) => (users: User) => users.id === id

const Chat: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation>()
  const chat = useSelector((state: RootState) => state.chat)
  const [toUser, setToUSer] = useState<User>()

  useEffect(() => {
    const conversationData = chat.conversations.find(
      findConversationsById(chat.activeChat)
    )
    setConversations(conversationData)
    const user = chat.users.find(findUserById(conversationData.toUserId))
    setToUSer(user)
  }, [chat])

  return toUser && conversations ? (
    <div className="chat-screen-container">
      <ChatHeader userData={toUser} />
      <div className="chat-screen">
        {conversations.messages.map((conversation, index) => {
          return (
            <ChatBubble
              key={index}
              userId={conversation.userId}
              date={conversation.createdAt}
              text={conversation.text}
              imageURL={
                chat.users.find(findUserById(conversation.userId))
                  .profilePicture || ''
              }
            />
          )
        })}
      </div>
      <ChatInput conversationId={conversations.conversationId} />
    </div>
  ) : (
    <>Empty chat</>
  )
}

export default Chat
