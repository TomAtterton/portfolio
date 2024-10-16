import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers.get('host') || 'localhost:3000'; // fallback for localhost

  // Detect if we are in localhost environment
  const isLocalhost = hostname.includes('localhost');

  // Determine if request is over https in production
  const protocol = req.headers.get('x-forwarded-proto') === 'https' ? 'https' : 'http';

  // Handle subdomain: For localhost, handle as "subdomain.localhost", for production, handle "subdomain.tomatterton.com"
  const subdomain = isLocalhost
    ? hostname.split('.')[0] // For localhost subdomains (e.g., sub.localhost)
    : hostname.includes('tomatterton.com') && hostname.split('.').length >= 3 // Production: detect subdomain (e.g., sub.tomatterton.com)
      ? hostname.split('.')[0]
      : null;

  if (isLocalhost || hostname.includes(process.env.NEXT_PUBLIC_ROOT_DOMAIN || '')) {
    const pathName = url.pathname;

    if (subdomain === 'recipevault') {
      // Subdomain handling for recipevault
      if (pathName === '/') {
        // Redirect to the home of the subdomain
        const recipeVaultUrl = new URL(`${protocol}://${hostname}/recipe-vault`);
        return NextResponse.rewrite(recipeVaultUrl);
      }
      if (url.pathname === '/privacy-policy') {
        const internalUrl = new URL(`/recipe-vault/privacy-policy`, req.url);
        return NextResponse.rewrite(internalUrl);
      }
      // Allow further routing on subdomain
      return NextResponse.next();
    }

    // Handle /recipe-vault on main domain
    if (pathName === '/recipe-vault') {
      const recipeVaultUrl = isLocalhost
        ? new URL(`${protocol}://recipevault.${hostname}`)
        : new URL(`${protocol}://recipevault.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

      return NextResponse.redirect(recipeVaultUrl);
    }

    if (subdomain === 'purrfectadvent') {
      if (pathName === '/') {
        // Redirect to the home of the subdomain
        const newUrl = new URL(`${protocol}://${hostname}/purrfect-advent`);
        return NextResponse.rewrite(newUrl);
      }
      if (url.pathname === '/privacy-policy') {
        const internalUrl = new URL(`/purrfect-advent/privacy-policy`, req.url);
        return NextResponse.rewrite(internalUrl);
      }
      // Allow further routing on subdomain
      return NextResponse.next();
    }

    if (pathName === '/purrfect-advent') {
      const newUrl = isLocalhost
        ? new URL(`${protocol}://purrfectadvent.${hostname}`)
        : new URL(`${protocol}://purrfectadvent.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

      return NextResponse.redirect(newUrl);
    }

    // Handle root URL on the main domain
    if (pathName === '/') {
      const homeUrl = isLocalhost
        ? new URL(`${protocol}://${hostname}/home`)
        : new URL(`${protocol}://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/home`);
      return NextResponse.rewrite(homeUrl);
    }

    return NextResponse.next();
  }
}
