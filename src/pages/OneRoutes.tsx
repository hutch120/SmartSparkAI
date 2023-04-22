import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from './Landing'
import { Pricing } from './Pricing'
import { Auth } from './Auth'
import { AuthCallbackToken } from './AuthCallbackToken'
import useAuth, { IAuthenticatedUser } from '../utils/useAuth'

export interface IGlobalState {
  authenticatedUser: IAuthenticatedUser
  isAuthenticated: boolean
}

export function OneRoutes() {
  const { authenticatedUser, isAuthenticated } = useAuth()

  // Application Global State
  const gs = {
    authenticatedUser,
    isAuthenticated
  }

  return (
    <Router>
      <Routes>
        <Route path="/auth/callback/:token" element={<AuthCallbackToken />} />
        <Route path="/auth/callback" element={<AuthCallbackToken />} />
        <Route path="/" element={<Landing gs={gs} />} />
        <Route path="/pricing" element={<Pricing gs={gs} />} />
        <Route path="/auth" element={<Auth gs={gs} />} />
        <Route path="*" element={<Landing gs={gs} />} />
      </Routes>
    </Router>
  )
}
