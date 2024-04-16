import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const URL = "https://swapi.dev/api/people/1";

export default function Character() {
  const { data, error, isLoading } = useSWR(URL);
  console.log("StarWars:", data);

  const id = 1;

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
