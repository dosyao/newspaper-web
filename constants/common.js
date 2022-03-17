export const endpoints = {
    smWidth: 640,
    mdWidth: 768,
    lgWidth: 1024,
    xlWidth: 1280,
    twoXlWidth: 1536
};

export const accountActions = {
    EDIT: "ACCOUNT/EDIT",
    LIST: "ACCOUNT/LIST",
    REVIEWS: "ACCOUNT/REVIEWS",
    ADD: "ACCOUNT/ADD"
};

export const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

export const USER_TOKEN = "user-token";
export const WEB_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const STRIPE_API_PREFIX = process.env.NEXT_PUBLIC_STRIPE_API_PREFIX;
export const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;
export const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;
export const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_KEY;
export const STRIPE_SECRET = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
export const SPLITER = "/#SPLITER#/";
