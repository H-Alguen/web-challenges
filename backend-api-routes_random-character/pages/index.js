import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/character");

  if (isLoading) {
    return <h1>is loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <section>
      <h1>{`${data.firstname} ${data.lastname}`}</h1>
      <p>{data.age}</p>
      <p>{data.birthday}</p>
      <p>{data.email}</p>
      <p>{data.profession}</p>
    </section>
  );
}
