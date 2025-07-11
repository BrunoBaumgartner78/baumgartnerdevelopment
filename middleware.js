// middleware.js
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/studio/:path*'], // schützt ALLE Unterrouten von /studio
}

export function middleware(request) {
  const basicAuth = request.headers.get('authorization')
  const USER = process.env.BASIC_AUTH_USER
  const PASS = process.env.BASIC_AUTH_PASS

  if (basicAuth) {
    const [, encoded] = basicAuth.split(' ')
    const decoded = atob(encoded)
    const [user, pass] = decoded.split(':')

    if (user === USER && pass === PASS) {
      return NextResponse.next()
    }
  }

  return new Response('Zugang verweigert', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Sanity Studio"',
    },
  })
}
