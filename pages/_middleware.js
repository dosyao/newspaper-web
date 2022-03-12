import { NextResponse } from "next/server";
import { USER_TOKEN } from "../constants/common";
import { HOME, SIGNUP } from "../constants/routes";

export function middleware(req) {
    const url = req.nextUrl.clone();
    const token = req.cookies[USER_TOKEN];

    if (!token || !url.pathname.includes(SIGNUP)) {
        return NextResponse.next();
    }

    url.pathname = HOME;

    return NextResponse.redirect(url);
}
