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
  const [map, setMap] = useState<google.maps.Map>();

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

  useEffect(() => {

    if(!map || Boolean(markers.length < 1)) {
      return;
    }
    
    const firstViableMarker = markers.find(marker => marker.position.lat && marker.position.lng);

    if (!firstViableMarker) {
      return;
    }

    const { lat, lng } = firstViableMarker.position
    // @TODO: Even though we pass numbers, we have a console error saying that lat is not a number.
    // InvalidValueError: setPosition: not a LatLng or LatLngLiteral: in property lat: not a number
    // Should be investigated
    map.panTo({ lat: parseFloat(lat), lng: parseFloat(lng) })

  }, [map, markers])

  return (
    <>
      <div ref={ref} id="map" />
      {
        markers.length > 0 &&
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