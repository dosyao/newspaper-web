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
    REVIEWS: "ACCOUNT/REVIEWS"
};

export const USER_TOKEN = 'user-token';
export const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;
export const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;
