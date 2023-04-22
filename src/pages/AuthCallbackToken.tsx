import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TOKEN_COOKIE_NAME, TOKEN_COOKIE_EXPIRATION } from '../constants'
import type { CookieAttributes } from 'js-cookie'
import Cookies from 'js-cookie'

export function AuthCallbackToken() {
  const [userMessage, setUserMessage] = useState('Authenticating with Token Callback...')
  const { token } = useParams<'token'>()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Set token...')

    if (!token || token === '') {
      console.log('Invalid token!')
      setUserMessage('Invalid token!')
      return
    }
    const options: CookieAttributes = {
      secure: true,
      sameSite: 'strict',
      expires: TOKEN_COOKIE_EXPIRATION
    }

    Cookies.set(TOKEN_COOKIE_NAME, token, options)

    setUserMessage('Token set...')
    // TODO: Redirect to where they came from
    navigate('/')
  }, [])

  return <div>{userMessage}</div>
}
