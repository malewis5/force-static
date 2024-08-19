export function GET() {
  const currentTime = new Date().toISOString();
  return Response.json({ currentTime });
}

export const dynamic = "force-dynamic";
