import { FunctionComponent, useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";

const KappeliStation = {
  lat: 47.3851179,
  lng: 8.4927478
};

interface MapProps {
  zoom?: number
  center?: {
    lat: number,
    lng: number;
  }
  markers: any[];
  handleOnClick: (stationId: string) => void;
}

const Map: FunctionComponent<MapProps> = ({ zoom = 13, center = KappeliStation, markers, handleOnClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if(!map) {
      const newMap = new window.google.maps.Map(ref.current as HTMLDivElement, {
        center,
        zoom,
      });
      setMap(newMap);
      return;
    }

  }, [ref, map, center, zoom]);

  return (
    <>
      <div ref={ref} id="map" />
      {
        markers.map((markerOptions, index) => (
          <MapMarker
            key={ index }
            map={ map }
            onClick={ handleOnClick }
            { ...markerOptions }
          />
        ))
      }
    </>
  );
};

export default Map;