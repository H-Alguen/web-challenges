import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/cities">All Cities</Link>
    </div>
  );
}
