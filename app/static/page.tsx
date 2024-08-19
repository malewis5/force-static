import HomePage from "../page";

export default HomePage;

export function generateStaticParams() {
  return [];
}

export const dynamic = "force-static";
export const revalidate = 600;
