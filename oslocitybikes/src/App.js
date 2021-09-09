import React, { useState, useEffect } from "react";
import { Container, DataContainer, Header } from "./styles";
import { fetchStations, fetchStationStatus } from "./api";

function App() {
  const [stations, setStations] = useState([]);
  const [stationStatus, setStationStatus] = useState([]);
  useEffect(() => {
    fetchStations().then((stations) => setStations(stations));
    fetchStationStatus().then((stationStatus) =>
      setStationStatus(stationStatus)
    );
  }, []);
  console.log(stations);

  const calculateFreeSpots = (index) => {
    return stations[index].capacity - stationStatus[index].num_bikes_available;
  };

  const stationData = () => {
    return (
      <>
        <DataContainer>
          {stations.map((station, index) => (
            <div key={index} className="card">
              <span>Navn: {station.name} </span>
              <br />
              <span>Adresse: {station.address} </span>
              <br />
              <span>Kapasitet: {station.capacity} </span>
              <br />
              <span>
                Tilgjengelig: {stationStatus[index].num_bikes_available}{" "}
              </span>
              <span>Ledig: {calculateFreeSpots(index)}</span>
            </div>
          ))}
        </DataContainer>
      </>
    );
  };

  return (
    <Container>
      <Header>
        <span className="header-text">Oslo Bysykkel</span>
      </Header>
      {stations[0] && stationStatus[0] ? stationData() : null}
    </Container>
  );
}

export default App;
