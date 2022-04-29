import { FunctionComponent, useCallback, useEffect, useState } from "react";
import stationsApi from "../../api/stationsApi";
import { Station } from "../../model/Station";
import MapContainer from "../map/MapContainer";
import SearchContainer from "../search/SearchContainer";

const MapAndSearchOrchestrator: FunctionComponent = () => {
  const [currentStations, setCurrentStations] = useState<Station[]>([]);
  const [searchResults, setSearchResults] = useState<Station[]>([])

  useEffect(() => {
    stationsApi
      .getAllByCity('Zurich')
      .then(({ stations }) => setCurrentStations(stations))
  }, []);

  const handleOnChange = useCallback((searchTerm: string) => {
    stationsApi
      .getAllByCity(searchTerm)
      .then(({ stations }) => setSearchResults(stations));
    }, []);

  const handleOnSelect = useCallback((selectedStation: Station | undefined) => {

    if(!selectedStation) {
      return console.error('[Search Input]: No station was selected')
    };

      stationsApi
        .getAllByCoordinates(selectedStation.coordinate.x, selectedStation.coordinate.y)
        .then(data => {
          setCurrentStations(data.stations);
          setSearchResults([])
        });

    }, []);

  return (
      <>
      {/* @TODO: Containers should receive no props, they are independent of their context */}
      {/* As a next iteration, Redux should be added and containers should consume info from there */}
        <SearchContainer
          results={ searchResults }
          name="Location Search"
          onChange={ handleOnChange }
          onSelect={ handleOnSelect }
        />
        <MapContainer mapLocations={ currentStations }/>
      </>
    );
}

export default MapAndSearchOrchestrator;