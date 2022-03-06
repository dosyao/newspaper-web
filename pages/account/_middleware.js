import { NextResponse } from "next/server";
import { USER_TOKEN } from "../../constants/common";
import { HOME } from "../../constants/routes";

export function middleware(req) {
    const token = req.cookies[USER_TOKEN];
    const url = req.nextUrl.clone()
    url.pathname = HOME;

    if (!token) {
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
