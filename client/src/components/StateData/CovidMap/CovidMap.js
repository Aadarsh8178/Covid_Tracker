import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styled from "styled-components";
import {
  convertToIndianNumberSystem,
  stateGeoCoordinates,
} from "../../../utilities";
import MarkerImg from "../../../public/marker.svg";

const MapWrapper = styled.div`
  margin: 2rem auto;
  & .mapboxgl-popup-close-button {
    display: none;
  }
  & .map {
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 10px;
  }
`;
const StyledPopup = styled(Popup)`
  border-radius: 5px;
  padding: 1rem;
  text-align: left;
  & .mapboxgl-popup-content {
    background: #2e2e2e;
  }
`;

const CovidMap = React.memo(({ data }) => {
  const [selectedmark, setSelectedMark] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 20.8764,
    longitude: 78.9629,
    zoom: 3.5,
    width: "100%",
    height: "600px",
  });

  return (
    <MapWrapper className="w-100">
      <ReactMapGL
        className="map"
        {...viewport}
        mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
        mapStyle="mapbox://styles/baapchi/ckslv2ohl0uc717lzoc0c994q"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {stateGeoCoordinates.map((mark) => (
          <Marker
            anchor="top"
            key={mark.name}
            latitude={mark.lat}
            longitude={mark.lng}
          >
            <MarkerImg
              width="15px"
              color="red"
              className="marker"
              onClick={() => setSelectedMark(mark)}
              onMouseOver={() => setSelectedMark(mark)}
              onMouseOut={() => setSelectedMark(null)}
            />
          </Marker>
        ))}
        {selectedmark && (
          <StyledPopup latitude={selectedmark.lat} longitude={selectedmark.lng}>
            <h5>{selectedmark.name}</h5>
            {data[selectedmark.name] && (
              <div>
                <p>
                  Active :{" "}
                  {convertToIndianNumberSystem(data[selectedmark.name].active)}
                </p>
                <p>
                  Recovered :{" "}
                  {convertToIndianNumberSystem(
                    data[selectedmark.name].recovered
                  )}
                </p>
                <p>
                  Deaths :{" "}
                  {convertToIndianNumberSystem(data[selectedmark.name].deaths)}
                </p>
              </div>
            )}
          </StyledPopup>
        )}
      </ReactMapGL>
    </MapWrapper>
  );
});

export default CovidMap;
