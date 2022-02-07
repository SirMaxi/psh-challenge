import Item from 'components/Item/Item'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducer/rootReducer'
import { setActiveChat } from 'redux/action/chat.action'
import './conversations.scss'

const Conversations: React.FC = () => {
  const dispatch = useDispatch()

  const chat = useSelector((state: RootState) => state.chat)

  const getLastMessageInfo = (messages) => messages.findLast(() => true)

  const getUserInfo = (toUserId: string) =>
    chat.users.find((user) => user.id === toUserId)

  const setChat = (conversationId: string) =>
    dispatch(setActiveChat(conversationId))

  return (
    <div>
      {chat.conversations.map((conversation) => {
        const { conversationId, messages, toUserId } = conversation
        const { profilePicture, firstname, lastname } = getUserInfo(toUserId)
        const { text, createdAt } = getLastMessageInfo(messages)

        return (
          <div
            key={conversationId}
            className={`group ${
              chat.activeChat === conversationId
                ? 'border-active'
                : 'border-disactive'
            }`}
          >
            <Item
              conversationId={conversationId}
              name={`${firstname} ${lastname}`}
              imageURL={profilePicture}
              date={createdAt}
              message={text}
              action={setChat}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Conversations
