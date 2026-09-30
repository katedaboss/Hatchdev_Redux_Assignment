import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-column">
        <Navbar />
        <div className="page-content">
          <UserPage />
          <Login />
        </div>
        <footer className="page-footer">
          <span>STATEBOARD</span>
          <span>One small app, one source of truth.</span>
        </footer>
      </main>
    </div>
  )
}

export default App