import { Conversation } from 'mock/conversations'
import { User } from 'mock/users'

const chatReducer = (
  state: { users: User[]; conversations: Conversation[] } = {
    users: [],
    conversations: [],
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
    default:
      return state
  }
}

export default chatReducer
