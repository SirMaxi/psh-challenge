import React from 'react'
import './item.scss'

interface ItemProp {
  conversationId: string
  name: string
  imageURL: string
  date: string
  message: string
  action: any
}

const Item: React.FC<ItemProp> = ({
  conversationId,
  name,
  imageURL,
  date,
  message,
  action,
}) => {
  return (
    <div
      onClick={() => action(conversationId)}
      className="d-flex chatRoom justify-content-between"
    >
      <img src={imageURL} alt="avatar" />
      <div className="middle-column mx-5 ">
        <span className="middle-column-name fw-bolder">{name}</span>
        <span className="grey-text">{message}</span>
      </div>
      <span className="grey-text">{date}</span>
    </div>
  )
}

export default Item
