import { draftMode } from "next/headers";
import { getUserId } from "../lib/auth";

export default async function Home() {
  const user = await getUserId();

  const res = await fetch(
    `https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam
`,
    {
      cache: !!user ? "no-store" : "default",
    }
  )
    .then((res) => {
      if (!res.ok) {
        console.log(res);
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch(() => {
      return { datetime: "error" };
    });

  return (
    <>
      <p>draft mode is: {draftMode().isEnabled.toString()}</p>
      <p>fetch response: {res.dateTime}</p>
    </>
  );
}
