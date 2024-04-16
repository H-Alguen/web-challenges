import { cities } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 100dvh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: royalblue;
  padding: 0.8rem;
  border-radius: 12px;
  gap: 1rem;
`;

const BottonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export default function DetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const cityIndex = cities.findIndex((city) => city.slug === slug);

  const city = cities[cityIndex];
  const nextCity = cities[cityIndex + 1];
  const prevCity = cities[cityIndex - 1];

  if (!city) {
    return null;
  }

  const { name, country, population, description } = city;

  return (
    <Container>
      <StyledLink href="/cities">Back to all cities!</StyledLink>
      <h1>{name}</h1>
      <h3>{country}</h3>
      <p>{population}</p>
      <p>{description}</p>
      <p>Tag: {city.slug}</p>
      <BottonContainer>
        {prevCity ? (
          <StyledLink href={`/cities/${prevCity.slug}`}>
            Prev: {prevCity.name}
          </StyledLink>
        ) : null}
        {nextCity ? (
          <StyledLink href={`/cities/${nextCity.slug}`}>
            Next: {nextCity.name}
          </StyledLink>
        ) : null}
      </BottonContainer>
    </Container>
  );
}
