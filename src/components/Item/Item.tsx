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
    <div onClick={() => action(conversationId)} className="chatRoom">
      <img src={imageURL} alt="avatar" />
      <div className="middle-column mx-5 ">
        <div className="middle-column-name fw-bolder">{name}</div>
        <div className="grey-text">
          {message.length > 40 ? `${message.substring(0, 40)}...` : message}
        </div>
      </div>
      <span className="grey-text">{date}</span>
    </div>
  )
}

export default Item
