import Link from "../components/Link";

export default function HomePage({ lights, sumLightsCount }) {
  console.log(lights);
  return (
    <div>
      <h1>Home</h1>
      <p>{sumLightsCount} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
