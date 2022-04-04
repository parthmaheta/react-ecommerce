import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LOGIN_SUCCESS } from "../../Store/constants"
import { Navigate } from "react-router-dom"
import "./login.css"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({ userError: false, passError: false })
  const isLogged = useSelector((state) => state.login.isLogged)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (username == "hellobar") {
      if (password == "hellobar") {
        dispatch({ type: LOGIN_SUCCESS })
      } else {
        setError({ userError: false, passError: "Invalid Password" })
      }
    } else {
      setError({ userError: "Invalid Username", passError: false })
    }
  }

  if (isLogged) return <Navigate to="/products" />
  else {
    return (
      <>
        <h1 className="main-heading">Hellobar</h1>
        <div className="login card">
          <h1 className="heading">Login</h1>
          <InputUserName
            username={username}
            setUsername={setUsername}
            error={error}
            setError={setError}
          />
          <InputPassword
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
          />
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </>
    )
  }
}

export default Login

function SubmitButton({ handleSubmit }) {
  return (
    <div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

function InputUserName({ username, setUsername, error, setError }) {
  const setValue = (e) => {
    if (error.userError)
      setError((state) => {
        return { ...state, userError: false }
      })

    setUsername(e.currentTarget.value)
  }

  return (
    <div>
      <Label label="UserName" />
      <input type="text" value={username} onChange={setValue} />
      <br />
      {error.userError && <ShowError error={error.userError} />}
    </div>
  )
}

function InputPassword({ password, setPassword, error, setError }) {
  const setValue = (e) => {
    if (error.passError)
      setError((state) => {
        return { ...state, passError: false }
      })

    setPassword(e.currentTarget.value)
  }

  return (
    <div className="inputContainer">
      <Label label="password" />
      <input type="password" value={password} onChange={setValue} />
      <br />
      {error.passError && <ShowError error={error.passError} />}
    </div>
  )
}

function Label({ label }) {
  return <label>{label}</label>
}

function ShowError({ error }) {
  return <span className="error">{error}</span>
}
