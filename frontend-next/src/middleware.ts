import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { cookies, url } = request;
    const isAuthorized = !!cookies.get('rt')?.value;
    const originUrl = process.env.NEXT_PUBLIC_ORIGIN_URL

    if (request.nextUrl.pathname.startsWith('/sign') && isAuthorized) {
        console.log('sign path and authorized')
        return NextResponse.rewrite(new URL('/auth/chats', originUrl))
    }

    if (request.nextUrl.pathname.startsWith('/auth') && !isAuthorized) {
        console.log('auth path and not authorized')
        return NextResponse.rewrite(new URL('/', originUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/auth/:path*',
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
