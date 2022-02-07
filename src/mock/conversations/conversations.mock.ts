export interface Conversation {
  fromUserId: string
  toUserId: string
  conversationId: string
  messages: Message[]
}

export interface Message {
  userId: string
  text: string
  createdAt: string
}

export const conversationsMock: Conversation[] = [
  {
    conversationId: '111',
    fromUserId: '1',
    toUserId: '2',
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
  {
    conversationId: '222',
    fromUserId: '1',
    toUserId: '3',
    messages: [
      {
        userId: '3',
        text: 'Hola John, como esta procediendo la task?',
        createdAt: '10.00 AM',
      },
      {
        userId: '1',
        text: 'Hola Luciana! Bien, estaria necesitando que me pasen los assets.',
        createdAt: '10.05 AM',
      },
      {
        userId: '3',
        text: 'Si tengo alguna otra novedad te comento. Gracias!',
        createdAt: '10.15 AM',
      },
    ],
  },
  {
    conversationId: '333',
    fromUserId: '1',
    toUserId: '4',
    messages: [
      {
        userId: '4',
        text: 'Hola John, como estas? podras tener una meeting a la tarde?',
        createdAt: '09.10 AM',
      },
      {
        userId: '1',
        text: 'Hola Manuel! Si, podria en cualquier momento de la tarde, gracias!',
        createdAt: '09.15 AM',
      },
      {
        userId: '4',
        text: 'Gracias a vos!',
        createdAt: '09.20 AM',
      },
    ],
  },
]
