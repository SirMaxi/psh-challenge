export interface LastConversation {
  contactId: string
  conversationId: string
}

export const lastConversationMock: LastConversation[] = [
  {
    contactId: '2',
    conversationId: '111',
  },
  {
    contactId: '3',
    conversationId: '222',
  },
  {
    contactId: '4',
    conversationId: '333',
  },
]
