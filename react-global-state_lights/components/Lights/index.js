import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, onToggle }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.name}>
          <Light
            name={light.name}
            onToggle={onToggle}
            isOn={light.isOn}
            id={light.id}
          />
        </li>
      ))}
    </StyledLights>
  );
}
