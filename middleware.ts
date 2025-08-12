import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/(site)")) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.replace(/^\/\(site\)/, "");
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}


