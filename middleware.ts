export { default } from "next-auth/middleware";

// https://nextjs.org/docs/app/building-your-application/reouting/middleware#matcher
export const config = { matcher: ["/locked"] };
