export interface Conversation {
  contactId: string
  messages: Message[]
}

export interface Message {
  userId: string
  text: string
  createdAt: string
}

export const conversations: Conversation[] = [
  {
    contactId: '2',
    messages: [
      {
        userId: '2',
        text: 'Hola John! Entre que horarios podrias hoy tener la meeting?',
        createdAt: '9.45 AM',
      },
      {
        userId: '1',
        text: 'Hola Micaela! Muy bien. Yo puedo de 10 a 17hs.',
        createdAt: '10.05 AM',
      },
      {
        userId: '2',
        text: 'Dale, agende la meeting para hoy a las 14hs.',
        createdAt: '10.15 AM',
      },
    ],
  },
]
