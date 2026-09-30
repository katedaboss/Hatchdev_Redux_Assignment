import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.trim() && email.trim()) dispatch(setUser({ name: name.trim(), email: email.trim() }))
  }


  return (
    <section className="account-section" id="account">
      <div className="section-heading">
        <div>
          <div className="section-kicker">ACCOUNT ACCESS</div>
          <h2>Make it yours</h2>
        </div>
        <span className="section-count">{name || 'NEW SESSION'}</span>
      </div>
      <div className="login-panel">
        <div className="login-panel-copy">
          <span className="login-symbol" aria-hidden="true">&#8627;</span>
          <div>
            <h3>Start a session</h3>
            <p>Enter your details to update the user state.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field-group" htmlFor="name">
            <span>FULL NAME</span>
            <input id="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required placeholder="e.g. Alex Morgan" autoComplete="name" />
          </label>
          <label className="field-group" htmlFor="email">
            <span>EMAIL ADDRESS</span>
            <input id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="alex@example.com" autoComplete="email" />
          </label>
          <button className="submit-button" type="submit">Update user state <span aria-hidden="true">&#8599;</span></button>
        </form>
      </div>
    </section>
  )
}

export default Login