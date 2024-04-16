import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: 800px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  text-align: left;
  word-wrap: break-word;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

const StyledText = styled.p`
  font-size: 1.1rem;
  word-wrap: break-word;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const StyledLi = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  background-color: grey;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLink href="/volumes">
          <Image
            src="/assets/chevron-left.svg"
            alt="arrow-left"
            width={25}
            height={30}
          />
          All Volumes
        </StyledLink>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{description}</StyledText>
      </StyledHeader>
      <StyledSection>
        <StyledUL>
          {books.map(({ ordinal, title }) => (
            <StyledLi key={title}>
              {ordinal}: <strong>{title}</strong>
            </StyledLi>
          ))}
        </StyledUL>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledSection>
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </StyledContainer>
  );
}
