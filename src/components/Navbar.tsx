import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const Navbar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Workspace</span><span className="breadcrumb-slash">/</span>Overview</div>
      <div className="topbar-status">
        <span className={`status-dot ${isLoggedIn ? 'status-dot-live' : ''}`} />
        {isLoggedIn ? 'Session active' : 'Guest session'}
      </div>
    </header>
  )
}

export default Navbar