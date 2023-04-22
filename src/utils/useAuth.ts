import { useState } from 'react'
// import { PostAPI } from '../services/API'

export interface IAuthenticatedUser {
  guidUser: string
  accountAddress: string
}

export default function useAuth() {
  const [authenticatedUser /*, setAuthenticatedUser*/] = useState<IAuthenticatedUser>({
    guidUser: '',
    accountAddress: ''
  })
  const isAuthenticated: boolean = authenticatedUser.guidUser !== ''

  /*
  async function login() {
    if (isAuthenticated) {
      console.log('Already authenticated')
      return
    }

    const response = await PostAPI({
      // Endpoint is the same as /user/token, but with an extra security check against a whitelist of "admin" accounts.
      pathname: '/user/token'
    })
    if (!response.success) {
      console.log('Failed to authenticate using token', response)
      return
    }

    setAuthenticatedUser({
      guidUser: response?.data?.guidUser,
      accountAddress: response?.data?.accountAddress
    })
  }

  useEffect(() => {
    console.log('useAuth init...')
    login()
    return () => {
      console.log('useAuth cleanup...')
    }
  }, [])

  return { authenticatedUser, isAuthenticated }
  */
  return { authenticatedUser, isAuthenticated }
}
