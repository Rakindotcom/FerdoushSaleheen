export function GET(request: Request) {
  return Response.redirect(new URL("/icon.webp", request.url), 307);
}
