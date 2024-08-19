import { draftMode } from "next/headers";
import { getUserId } from "../lib/auth";

export default async function Home() {
  const user = await getUserId();

  const time = await fetch("http://localhost:3000/api/time", {
    cache: !!user ? "no-store" : "default",
  }).then((res) => res.json());

  return (
    <>
      <p>draft mode is: {draftMode().isEnabled.toString()}</p>
      <p>fetch response: {time.currentTime}</p>
    </>
  );
}
