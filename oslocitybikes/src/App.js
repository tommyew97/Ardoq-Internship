import React, { useState, useEffect } from "react";
import { Container, DataContainer, Header } from "./styles";
import { fetchStations, fetchStationStatus } from "./api";

function App() {
  const [stations, setStations] = useState([]);
  const [stationStatus, setStationStatus] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const [filteredStations, setFilteredStations] = useState([]);
  useEffect(() => {
    fetchStations().then((stations) => setStations(stations));
    fetchStationStatus().then((stationStatus) =>
      setStationStatus(stationStatus)
    );
  }, []);

  useEffect(() => {
    if (stations.length < 1 || stationStatus.length < 1) return;
    setFilteredStations(stations);
    let allStations = stations;
    let allStatus = stationStatus;
    let pair;
    for (var i = 0; i < allStations.length; i++) {
      allStations[i].num_bikes_available = allStatus[i].num_bikes_available;
      allStations[i].num_docks_available = allStatus[i].num_docks_available;
    }
    setStations(allStations);
    setDataReady(true);
  }, [stations, stationStatus]);

  const stationData = () => {
    return (
      <>
        <DataContainer>
          {filteredStations.map((station, index) => (
            <div key={index} className="card">
              <span className="text">Navn: {station.name} </span>
              <br />
              <span>Adresse: {station.address} </span>
              <br />
              <span>Kapasitet: {station.capacity} </span>
              <br />
              <span>Ledige plasser: {station.num_bikes_available} </span>
              <br />
              <span>Ledige sykler: {station.num_docks_available}</span>
            </div>
          ))}
        </DataContainer>
      </>
    );
  };

  const filterData = (searchValue) => {
    let filteredData = [];
    filteredData = stations.filter(
      (el) => el.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
    setFilteredStations(filteredData);
  };

  return (
    <Container>
      <Header>
        <span className="header-text">Oslo Bysykkel</span>
      </Header>
      <input onChange={(event) => filterData(event.target.value)}></input>
      {dataReady ? stationData() : null}
    </Container>
  );
}

export default App;
