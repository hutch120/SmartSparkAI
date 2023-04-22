import Cookies from 'js-cookie'
import { TOKEN_COOKIE_NAME } from '../constants'
import { API_SERVER_NAME } from '../config'

export interface FetchAPIResponse {
  success: boolean
  message?: string
  statusCode?: number
  contentType?: string // If this is set data should be a base64 string. E.g. image/png
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any
  error?: string
  logId?: string
}

interface GetProps {
  pathname: string
}

// Wrapper for fetch GET
export async function Get({ pathname }: GetProps): Promise<FetchAPIResponse> {
  if (pathname === '') return failed({ error: 'Invalid url' })
  const url = `${API_SERVER_NAME}${pathname}`
  try {
    const response = await window.fetch(url)
    return await response.json()
  } catch (err) {
    console.error('Failed to fetch data')
  }
  return failed({ error: 'Fetch get failed' })
}

// Interface for fetch POST to the API
interface PostAPIProps {
  pathname: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

// Wrapper for fetch POST with auth
export async function PostAPI({ pathname, data }: PostAPIProps): Promise<FetchAPIResponse> {
  if (pathname === '') return failed({ error: 'PostAPI: Invalid url' })
  const url = `${API_SERVER_NAME}${pathname}`
  try {
    let body = '{}'
    if (data) {
      body = JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: ''
      },
      body
    }
    const token = Cookies.get(TOKEN_COOKIE_NAME) ?? ''
    if (token && token !== '') {
      const tokenBearer = 'Bearer ' + token
      options.headers.Authorization = tokenBearer
    }

    const response = await window.fetch(url, options)
    const result = await response.json() // parses JSON response into native JavaScript objects
    return result
  } catch (err) {
    console.error('Fetch error', err)
  }
  return failed({ error: 'PostAPI: Fetch post failed' })
}

// Interface for fetch POST to the API
interface PostProps {
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}
// Wrapper for fetch POST to the API without auth
export async function Post({ url, data }: PostProps): Promise<FetchAPIResponse> {
  if (url === '') return failed({ error: 'Post: Invalid url' })
  try {
    let body = '{}'
    if (data) {
      body = JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    }
    const response = await window.fetch(url, options)
    const result = await response.json() // parses JSON response into native JavaScript objects
    return result
  } catch (err) {
    console.error('Fetch error', err)
  }
  return failed({ error: 'Post: Fetch post failed' })
}

interface FailedProps {
  error: string
}

function failed({ error }: FailedProps): FetchAPIResponse {
  return { success: false, error, message: 'Error occurred', data: {} }
}
