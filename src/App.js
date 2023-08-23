import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { viewport } from "@popperjs/core";

function App() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic2NhcmVkbWFqb3I3MzAiLCJhIjoiY2xsbXFudmF1MW1sZzNkbGlhYmFvb2F5biJ9.e1HHUFkW6OJjl0BFyU2Cww"
      initialViewState={{
        longitude: 78.0421,
        latitude: 27.1751,
        zoom: 1,
      }}
      style={{ width: "75vw", height: "55vw" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={78.0421} latitude={27.1751} anchor="bottom">
        <LocationOnIcon style={{ fontSize: viewport.zoom*7, color: "slateblue"}}/>
      </Marker>
    </Map>
  );
}
export default App;
