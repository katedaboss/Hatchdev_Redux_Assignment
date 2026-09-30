import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <section className="overview" id="overview">
      <div className="eyebrow"><span className="eyebrow-line" />YOUR REDUX WORKSPACE</div>
      <div className="overview-heading-row">
        <div>
          <h1>State, in focus.</h1>
          <p className="overview-copy">A clear view of the user session held in your Redux store.</p>
        </div>
        <div className="date-stamp"><span>STORE</span><strong>01 / USER</strong></div>
      </div>
      <div className="stat-grid" aria-label="User state summary">
        <article className="stat-card stat-card-primary">
          <div className="stat-label">AUTHENTICATION</div>
          <div className="stat-value">{user.isLoggedIn ? 'Signed in' : 'Signed out'}</div>
          <div className="stat-foot"><span className={`status-dot ${user.isLoggedIn ? 'status-dot-live' : ''}`} />{user.isLoggedIn ? 'Session ready' : 'Waiting for details'}</div>
          <span className="stat-index">01</span>
        </article>
        <article className="stat-card">
          <div className="stat-label">USER NAME</div>
          <div className="stat-value stat-value-name">{user.name || '-'}</div>
          <div className="stat-foot">{user.name ? 'Stored in user.name' : 'No name in store'}</div>
          <span className="stat-index">02</span>
        </article>
        <article className="stat-card">
          <div className="stat-label">EMAIL ADDRESS</div>
          <div className="stat-value stat-value-email">{user.email || '-'}</div>
          <div className="stat-foot">{user.email ? 'Stored in user.email' : 'No email in store'}</div>
          <span className="stat-index">03</span>
        </article>
      </div>
      <div className="state-note">
        <span className="state-note-mark">i</span>
        <p><strong>Live store values</strong><br />This overview updates immediately when the user state changes.</p>
        <span className="state-note-arrow" aria-hidden="true">&#8600;</span>
      </div>
    </section>
  )
}

export default UserPage