import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleLogin }) => {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const login = (event) => {
    event.preventDefault()
    handleLogin(username, password)
    setPassword('')
    setUsername('')
  }
  return (
    <div>
      <form onSubmit={login}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

LoginForm.prototype = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm
