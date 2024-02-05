import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserDetails extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        {user && (
          <div>
            <img src={user.avatar_url} alt='Avatar' />
            <h2>{user.name}</h2>
            <p>Location: {user.location}</p>
            <p>Details: {user.bio}</p>
            <h3>Repo:</h3>
            <ul>{user.repos && user.repos.map(repo => <li key={repo.id}>{repo.name}</li>)}</ul>
          </div>
        )}
      </div>
    )
  }
}

UserDetails.propTypes = {
  user: PropTypes.object,
}

export default UserDetails
