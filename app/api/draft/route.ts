import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

export function GET() {
  draftMode().enable();
  redirect("/");
}
