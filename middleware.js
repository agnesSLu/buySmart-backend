import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    // authorize roles
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role;

    if (url.startsWith("/api")) {
      const response = NextResponse.next();
      response.headers.append("Access-Control-Allow-Origin", process.env.API_URL);
      response.headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      response.headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
      response.headers.append('Access-Control-Allow-Credentials', 'true');

      if (req.method === 'OPTIONS') {
        response.status(200).end();
      }  

      return response;
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
  matcher: ["/admin/:path*", "/me/:path*", "/shipping", "/api/:path*"],
};