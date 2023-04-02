import {
    destroyCookie as destroyNookie,
    parseCookies,
    setCookie as setNookie,
  } from "nookies";
  
// import { CookieSerializeOptions } from "next/dist/server/web/types";
import { COOKIE_PREFIX } from "../constants";

  
export function getCookie(key: string, ctx?: any) {
    const cookies = parseCookies(ctx);

    return cookies?.[`@${COOKIE_PREFIX}:${key}`];
}
  
export function setCookie(
    key: string,
    value: string,
    ctx?: any,
    options?: any
) {
    return setNookie(ctx, `@${COOKIE_PREFIX}:${key}`, value, options);
}
  
export function destroyCookie(key: string, ctx?: any) {
    return destroyNookie(ctx, `@${COOKIE_PREFIX}:${key}`, {
      path: "/",
    });
}
  