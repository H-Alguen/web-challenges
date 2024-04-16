import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL);

  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    //try {
    //const response = await fetch(URL);

    console.log("SWR", data);
    if (data) {
      //const data = await response.json();
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }
    if (error) return <div>{error.message}</div>;
    if (isLoading) return <div>loading...</div>;

    // } catch (error) {
    //   console.error(error);
    //  }
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
