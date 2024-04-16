import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  max-width: 800px;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
`;

const StyledCategoryTitle = styled.h2`
  font-size: 1.7rem;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.7rem;
  padding-left: 0;
  gap: 1rem;
`;

const StyledLi = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  text-align: left;
  word-wrap: break-word;
`;

export default function Volumes() {
  return (
    <StyledContainer>
      <StyledTitle>The Lord of the Rings</StyledTitle>
      <p>{introduction}</p>
      <StyledCategoryTitle>All Volumes</StyledCategoryTitle>
      <StyledUL>
        {volumes.map((volume) => (
          <StyledLi key={volume.id}>
            <Image
              src={volume.cover}
              alt={volume.title}
              width={100}
              height={150}
            />
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUL>
    </StyledContainer>
  );
}
