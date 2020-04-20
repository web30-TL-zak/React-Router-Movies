import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'

const SavedList = props => {
  const history = useHistory()

  function homeRoute () {
    history.push('/')
  }

  return (
    <div className='saved-list'>
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          <span className='saved-movie'>{movie.title}</span>
        </NavLink>
      ))}
      <div className='home-button' onClick={homeRoute}>
        Home
      </div>
    </div>
  )
}

export default SavedList
