import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Page() {
  const ringFilm = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <div>
      <Link href="/volumes">Back</Link>
      <h1>{ringFilm.title}</h1>
      <p>{ringFilm.description}</p>
      <Image
        src={ringFilm.cover}
        alt={ringFilm.title}
        width={140}
        height={230}
      />
      <ul>
        {ringFilm.books.map((book) => {
          return (
            <li key={book.title}>
              <p>{book.ordinal}</p>
              <p>{book.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
