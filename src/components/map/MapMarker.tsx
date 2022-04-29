import { FunctionComponent, useCallback, useEffect, useState } from "react";
import InfoWindow from "./InfoWindow/InfoWindow";

export interface MapMarkerProps extends google.maps.MarkerOptions {
  id: string;
  name: string;
  markerOptions: google.maps.MarkerOptions;
  iconName: "train" | "bus" | "tram";
  onClick: (pinId: string) => void;
}

const MapMarker: FunctionComponent<MapMarkerProps> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }

    };
  }, [options, marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }

  }, [marker, options]);

  return <InfoWindow { ...options } marker={ marker }/>
};

export default MapMarker;