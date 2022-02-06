import React from 'react'

interface ItemProp {
  conversationId: string
  name: string
  imageURL: string
  date: string
  message: string
  action: any
}

const Item: React.FC<ItemProp> = (props: ItemProp) => {
  const { conversationId, name, imageURL, date, message, action } = props
  return (
    <div role="presentation" onClick={() => action(conversationId)}>
      {name} {imageURL}, {date}, {message}
    </div>
  )
}

export default Item
