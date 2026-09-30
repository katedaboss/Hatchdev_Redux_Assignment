import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  const initials = user.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  return (
    <div className="profile-card">
      <div className="avatar">{initials || '?'}</div>
      <div className="profile-copy">
        <strong>{user.name || 'Guest user'}</strong>
        <span>{user.email || 'No active account'}</span>
      </div>
      <span className={`profile-presence ${user.isLoggedIn ? 'profile-presence-live' : ''}`} aria-label={user.isLoggedIn ? 'Signed in' : 'Signed out'} />
    </div>
  )
}

export default UserProfile