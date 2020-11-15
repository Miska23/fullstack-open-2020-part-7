import React from 'react'

import {
  Link
} from 'react-router-dom'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div style={{ padding: '1rem 0rem' }}>
      <Link style={padding} to='/anecdotes'>
        anecdotes
      </Link>
      <Link style={padding} to='/create'>
         create new
      </Link>
      <Link style={padding} to='/about'>
         about
      </Link>
    </div>
  )
}

export default Menu