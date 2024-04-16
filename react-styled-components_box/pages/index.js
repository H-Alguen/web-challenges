import { StyledBox } from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <br />
      <h1>After Here we have Bixes styled with styledComponents</h1>
      <ContainerBox>
        <StyledBox />
        <StyledBox $isBlack />
      </ContainerBox>
    </div>
  );
}
