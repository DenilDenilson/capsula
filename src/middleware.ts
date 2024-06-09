/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// Este eslint es para evitar el null no validado, que en teoría, req.auth debería dar un null o un valor siempre
import { auth } from '@/auth'

export default auth((req) => {
  if (req.nextUrl.pathname.startsWith('/aula')) {
    if (!req.auth) return Response.redirect(new URL('/api/auth/signin', req.nextUrl.origin))
  }
  if (req.nextUrl.pathname === '/') {
    if (req.auth) return Response.redirect(new URL('/aula', req.nextUrl.origin))
  }
  if (req.nextUrl.pathname === '/signin') {
    if (req.auth) return Response.redirect(new URL('/aula', req.nextUrl.origin))
  }
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
