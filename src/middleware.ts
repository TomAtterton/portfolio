import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers.get('host') || 'localhost:3000'; // fallback for localhost

  const isLocalhost = hostname.includes('localhost');

  // Handle localhost differently in dev
  if (isLocalhost) {
    const path = `${url.pathname}${
      url.searchParams.toString().length > 0 ? `?${url.searchParams.toString()}` : ''
    }`;

    return NextResponse.rewrite(new URL(`/home${path === '/' ? '' : path}`, req.url));
  }

  // Check for Recipe Vault subdomain
  if (hostname === `recipevault.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    let path = url.pathname === '/' ? '' : url.pathname; // handle root path case

    // if path contains recipe-vault then delete it
    if (path.includes('/recipe-vault')) {
      path = path.replace('/recipe-vault', '');
    }

    return NextResponse.rewrite(
      new URL(`https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/recipe-vault/${path}`),
    );
  }

  // Check for the base domain tomatterton.com
  if (hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
    const path = `${url.pathname}${
      url.searchParams.toString().length > 0 ? `?${url.searchParams.toString()}` : ''
    }`;
    if (path === '/') {
      // Rewrite only the root path `/` to `/home`
      return NextResponse.rewrite(new URL(`/home`, req.url));
    } else {
      // For all other paths, do not prepend `/home`
      return NextResponse.rewrite(new URL(path, req.url));
    }
  }

  // Special case for Vercel preview deployment URLs
  if (
    hostname.includes('---') &&
    hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
  ) {
    hostname = `${hostname.split('---')[0]}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
  }

  // Rewrite everything else to /[domain]/[slug] dynamic route
  const searchParams = url.searchParams.toString();
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;

  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
