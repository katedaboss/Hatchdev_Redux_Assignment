import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <aside className="sidebar">
      <a className="brand" href="#overview" aria-label="Stateboard home">
        <span className="brand-mark">S</span>
        <span>stateboard</span>
      </a>
      <div className="sidebar-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        <a className="side-nav-link is-active" href="#overview">
          <span className="nav-indicator" />Overview
        </a>
        <a className="side-nav-link" href="#account">
          <span className="nav-indicator nav-indicator-muted" />Account
        </a>
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-label">CURRENT SESSION</div>
        <UserProfile />
        <button className="logout-button" onClick={() => dispatch(logoutUser())}>
          <span aria-hidden="true">&#8599;</span> Sign out
        </button>
      </div>
    </aside>
  )
}

export default Sidebar