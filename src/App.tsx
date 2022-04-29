import { useEffect, useState } from 'react';
import stationsApi from './api/stationsApi';
import MapContainer from './components/map/MapContainer';
import { Station } from './model/Station';
import { AppWrapper } from './appStyle';

function App() {
  const [currentStations, setCurrentStations] = useState<Station[]>([]);

  // @TODO: Move this in MapContainer
  useEffect(() => {
    stationsApi
      .getAllByCity('Zurich')
      .then(({ stations }) => setCurrentStations(stations))
  }, [])

  return (
    <AppWrapper>
      <MapContainer mapLocations={ currentStations }/>
    </AppWrapper>
  );
}

export default App;
