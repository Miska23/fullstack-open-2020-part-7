import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'

const Notification = () => {

  const notification = useSelector(state => state.notification)

  if ( !notification ) {
    return null
  }

  return (
    <Card bg={notification.messageType === 'success' ? 'success' : 'warning'}>
      <Card.Body>
        <Card.Title>{notification.content}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Notification