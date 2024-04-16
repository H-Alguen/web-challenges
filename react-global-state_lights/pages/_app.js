import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  function handleSetLights(id) {
    const mutatedLights = lights.map((light) => {
      if (light.id !== id) {
        return light;
      }

      return {
        ...light,
        isOn: !light.isOn,
      };
    });

    setLights(mutatedLights);
  }

  const lightsCountSum = lights.filter(({ isOn }) => isOn).length;

  // const lightsCountSum = lights.reduce((acc, currentCounter) => {
  //   const newAcc = acc + currentCounter.count;
  //   return newAcc;
  // }, 0);

  function handleTurnAllLightsOff() {
    const mutatedLights = lights.map((light) => {
      return {
        ...light,
        isOn: true,
      };
    });
  }

  function handleTurnAllLightsOff() {
    const mutatedLights = lights.map((light) => {
      return {
        ...light,
        isOn: false,
      };
    });
    setLights(mutatedLights);
  }

  function handleTurnAllLightsOn() {
    const mutatedLights = lights.map((light) => {
      return {
        ...light,
        isOn: true,
      };
    });
    setLights(mutatedLights);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        sumLightsCount={lightsCountSum}
        toggleLight={handleSetLights}
        turnAllLightsOn={handleTurnAllLightsOn}
        turnAllLightsOff={handleTurnAllLightsOff}
      />
    </Layout>
  );
}
