import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic2NhcmVkbWFqb3I3MzAiLCJhIjoiY2xsbXFudmF1MW1sZzNkbGlhYmFvb2F5biJ9.e1HHUFkW6OJjl0BFyU2Cww"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;
