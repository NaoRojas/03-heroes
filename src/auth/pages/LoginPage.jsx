import './login.css'

export const LoginPage = () => {
  return (
    <div className="card">
      <form>
        <h2 className="title">Login</h2>
        <span className="card-subtitle">
          Welcome back! Please login to your account
        </span>

        <div className="email-login" style={{ marginTop: '32px' }}>
          <label> Email</label>
          <input type="text" name="uname" required />
          <label>Password</label>
          <input type="password" name="psw" required />
        </div>
        <button className="cta-btn primary-red" style={{ marginTop: '20px' }}>
          Login
        </button>
      </form>
    </div>
  )
}
