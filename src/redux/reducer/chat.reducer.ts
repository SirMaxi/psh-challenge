import { Conversation, conversationsMock } from 'mock/conversations'
import { User, usersMock } from 'mock/users'

const chatReducer = (
  state: {
    users: User[]
    conversations: Conversation[]
    activeChat: string
    activeUser: string
  } = {
    users: usersMock,
    conversations: conversationsMock,
    activeChat: '111',
    activeUser: '1',
  },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: state.users.concat(action.payload) }
    case 'SET_CONVERSATIONS':
      return {
        ...state,
        conversations: state.conversations.concat(action.payload),
      }
    case 'CREATE_MESSAGE':
      const { activeUser, conversationId, value, createdAt } = action.payload
      const index = state.conversations.findIndex(
        (conversation: Conversation) =>
          action.payload.conversationId === conversation.conversationId
      )
      const newMessage = {
        userId: activeUser,
        conversationId,
        text: value,
        createdAt,
      }
      state.conversations[index].messages.push(newMessage as any)
      return {
        ...state,
      }
    case 'SET_ACTIVE_CHAT':
      return {
        ...state,
        activeChat: action.payload,
      }
    default:
      return state
  }
}

export default chatReducer
