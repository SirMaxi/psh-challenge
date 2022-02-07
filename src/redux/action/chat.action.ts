export const setUsers = (payload) => ({
  payload,
  type: 'SET_USERS',
})

export const setConversations = (payload) => ({
  payload,
  type: 'SET_CONVERSATIONS',
})

export const setActiveChat = (payload) => ({
  payload,
  type: 'SET_ACTIVE_CHAT',
})

export const createMessage = (payload) => ({
  payload,
  type: 'CREATE_MESSAGE',
})
