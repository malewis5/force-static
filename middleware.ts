import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  console.log("middleware");
  let cookie = req.cookies.get("user-id");

  if (!cookie) {
    console.log("cookie not found, redirecting to static page");
    return NextResponse.rewrite(new URL("/static", req.url));
  } else {
    console.log("cookie found, continuing to route");
    return NextResponse.rewrite(new URL("/", req.url));
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
