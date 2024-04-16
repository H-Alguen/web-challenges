import Link from "next/link";
import { cities } from "../../lib/data";
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
`;

const StyledText = styled.p`
  background-color: royalblue;
  padding: 0.7rem;
  text-align: center;
  border-radius: 12px;
`;

function CitiesPage() {
  console.log(cities);
  return (
    <>
      <Container>
        <h1>CITY PAGE</h1>
        <h3>See all the cities</h3>
        <div>
          {cities.map((city) => (
            <StyledLink href={"/cities/" + city.slug} key={city.name}>
              <StyledText>{city.name}</StyledText>
            </StyledLink>
          ))}
        </div>
      </Container>
    </>
  );
}

export default CitiesPage;
