import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  if (hostname === 'recipevault.tomatterton.com') {
    if (url.pathname === '/') {
      url.pathname = '/recipe-vault'; // Route to recipe vault home
    } else {
      url.pathname = `/recipe-vault${url.pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  if (hostname === 'tomatterton.com' && url.pathname !== '/') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
