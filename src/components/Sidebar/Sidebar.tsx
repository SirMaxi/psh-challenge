import React from 'react'
import './sidebar.scss'
import { Button } from 'react-bootstrap'
import Header from './Header/Header'
import Conversations from './Conversations/Conservations'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar d-flex flex-column overflow-auto flex-grow-1">
      <Header />
      <Conversations />
      <Button className="fs-2">+ Create New</Button>
    </div>
  )
}

export default Sidebar
