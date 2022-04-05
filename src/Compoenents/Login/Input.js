import React from "react"

export function SubmitButton({ handleSubmit }) {
  return (
    <div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export function InputUserName({ username, setUsername, error, setError }) {
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

export function InputPassword({ password, setPassword, error, setError }) {
  const setValue = (e) => {
    if (error.passError)
      setError((state) => {
        return { ...state, passError: false }
      })

    setPassword(e.currentTarget.value)
  }

  return (
    <div>
      <Label label="password" />
      <input type="password" value={password} onChange={setValue} />
      <br />
      {error.passError && <ShowError error={error.passError} />}
    </div>
  )
}

export function Label({ label }) {
  return <label>{label}</label>
}

export function ShowError({ error }) {
  return <span className="error">{error}</span>
}
