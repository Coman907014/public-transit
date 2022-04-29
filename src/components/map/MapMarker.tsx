import { FunctionComponent, useCallback, useEffect, useState } from "react";
import InfoWindow from "./InfoWindow/InfoWindow";

export interface MapMarkerProps extends google.maps.MarkerOptions {
  id: string;
  onClick: (pinId: string) => void;
  name: string;
  iconName: "train" | "bus" | "tram";
}

const MapMarker: FunctionComponent<MapMarkerProps> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  // @TODO: Each click opens a new infoWindow w/o closing the last one
  // Their state should be on a higher level and have a centralized business logic for all Markers.
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }

    };
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      google.maps.event.addListener(marker, 'click', () => setIsInfoWindowOpen(true));
    }

  }, [marker, options]);

  const handleWindowClose = useCallback(() => {
    setIsInfoWindowOpen(false);
  }, []);

  return (
    <InfoWindow
      { ...options }
      isInfoWindowOpen={ isInfoWindowOpen }
      marker={ marker }
      onWindowClose={ handleWindowClose }
    />);
};

export default MapMarker;