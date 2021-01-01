import React from 'react'

import { NavLink } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = ({ handleLogout, loginState }) => {

  return (
    <Row>
      <Col xs={8}>
        <Nav justify variant="tabs" >
          <Nav.Item>
            <Nav.Link as={NavLink} to='/home' eventKey='link-1'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink}  to="/blogs" eventKey='link-2'>Blogs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink}  to="/users" eventKey='link-3'>Users</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs={4} style={{ display: 'flex', alignItems: 'center', padding: '.5rem 1rem' }}>
        <p style={{ margin: 0 }}>
          {loginState.user ? loginState.user.name : null} is logged in
        </p>
        <Button variant='outline-secondary' size='sm' onClick={handleLogout} style={{ marginLeft: '1rem' }}>
            Logout
        </Button>
      </Col>
    </Row>
  )
}


export default Header