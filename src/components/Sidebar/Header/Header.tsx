import React from 'react'
import { Card } from 'react-bootstrap'
import './header.scss'
import logo from 'assets/psh_logo.svg'

const Header: React.FC = () => {
  return (
    <div>
      <Card>
        <div className="header">
          <Card.Img variant="top" src={logo} className="ms-5" />
          <Card.Title className="header-title fs-2 ms-3">React Chat</Card.Title>
        </div>
      </Card>
    </div>
  )
}

export default Header
