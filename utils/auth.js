// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { SignJWT, jwtVerify } from 'jose';
import { USER_TOKEN, JWT_SECRET_KEY } from '../constants/common';
import { JWT_SECRET } from '../constants/common';
import { HOME } from '../constants/routes';

export async function verifyAuth(request) {
  const token = request.cookies[USER_TOKEN]

  if (!token) {
    return NextResponse.redirect(HOME);
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET_KEY)
    )
    return verified.payload;
  } catch (err) {
    return NextResponse.redirect(HOME);
  }
}

export async function setUserCookie(request, response) {
  const cookie = request.cookies[USER_TOKEN];

  if (!cookie) {
    const token = await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(new TextEncoder().encode(JWT_SECRET))
    response.cookie(USER_TOKEN, token, { httpOnly: true });
  }

  return response;
}
