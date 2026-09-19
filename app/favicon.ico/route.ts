export function GET(request: Request) {
  return Response.redirect(new URL("/site-icon.webp", request.url), 307);
}
