import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volumes() {
  return (
    <div>
      <Link href="/">Back to Homepage</Link>
      <h1>Lord if the Ring</h1>
      <p>Overview of all Volumes</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <h3>{volume.title}</h3>
              <Link href={"/volumes/" + volume.slug}>More Details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
