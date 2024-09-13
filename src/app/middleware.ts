import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  // Check if the request is coming from recipevault.tomatterton.com
  if (hostname === 'recipevault.tomatterton.com') {
    // Rewrite to the correct path for the Recipe Vault app
    if (url.pathname === '/') {
      url.pathname = '/recipe-vault';
    } else {
      url.pathname = `/recipe-vault${url.pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  // Proceed as usual for all other hostnames
  return NextResponse.next();
}
