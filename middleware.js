import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    // authorize roles
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role;

    if (url.startsWith("/api")) {
      NextResponse.next().headers.append("Access-Control-Allow-Origin", process.env.API_URL);
      NextResponse.next().headers.append("Access-Control-Allow-Headers", process.env.API_URL);
      NextResponse.next().headers.append('Access-Control-Allow-Credentials', 'true');
    }

    if (req.method === 'OPTIONS') {
      NextResponse.next().status(200).end();
    }


    if (url?.startsWith("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/me/:path*", "/shipping", , "/api/:path*"],
};