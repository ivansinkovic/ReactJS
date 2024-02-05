import React, { useState } from 'react'
import axios from 'axios'
import UserForm from './components/UserForm'
import UserDetails from './components/UserDetails'

function App() {
  const [user, setUser] = useState(null)

  const handleSubmit = username => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        setUser(response.data)
        return axios.get(`https://api.github.com/users/${username}/repos`)
      })
      .then(response => {
        setUser(prevState => ({
          ...prevState,
          repos: response.data,
        }))
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  const handleReset = () => {
    setUser(null)
  }

  return (
    <div>
      {!user ? (
        <UserForm onSubmit={handleSubmit} />
      ) : (
        <div>
          <UserDetails user={user} />
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  )
}

export default App
