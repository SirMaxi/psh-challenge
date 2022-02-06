import React from 'react'
import './sidebar.scss'
import Header from './Header/Header'
import Conversations from './Conversations/Conversations'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar d-flex flex-column overflow-auto flex-grow-1">
      <Header />
      <Conversations />
      <div className="fs-2 create-new">+ Create New</div>
    </div>
  )
}

export default Sidebar
