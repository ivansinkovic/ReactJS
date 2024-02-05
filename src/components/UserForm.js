import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css' // Import CSS file

function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('')

  const handleChange = event => {
    setUsername(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(username)
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        placeholder='Enter GitHub user name'
        value={username}
        onChange={handleChange}
        className='input-field'
      />
      <button type='submit' className='submit-button'>
        GO!
      </button>
    </form>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default UserForm
