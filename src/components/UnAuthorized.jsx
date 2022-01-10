import React from 'react'
import { Link } from 'react-router-dom'

function UnAuthorized() {
  return (
    <div>
      <h1>Unauthorized access!</h1>
      <div>Please <Link to="/login">login</Link></div>
    </div>
  )
}

export default UnAuthorized
