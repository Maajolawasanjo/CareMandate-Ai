import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get('admin_token')?.value

  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!adminToken) {
      // Redirect to login page if no token
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  // Optional: Redirect logged-in admin away from login page
  if (request.nextUrl.pathname === '/login') {
    if (adminToken) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/login'
  ]
}
