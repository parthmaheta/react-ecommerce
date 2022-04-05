import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LOGIN_SUCCESS } from "../../Store/constants"
import { Navigate } from "react-router-dom"
import "./login.css"
import { InputPassword, InputUserName, SubmitButton } from "./Input"

export default function Login() {
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




