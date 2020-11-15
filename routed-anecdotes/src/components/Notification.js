import React from 'react'

const Notification = ({ notification }) => (
  <div style={{ border: '1px solid green', whiteSpace: 'pre-wrap' }}>
    {notification}
  </div>
)

export default Notification