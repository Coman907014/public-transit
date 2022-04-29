import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import InfoContainer from "../InfoContainer/InfoContainer";
import { MapMarkerProps } from "../MapMarker";

interface InfoWindowProps extends MapMarkerProps {
  isInfoWindowOpen: boolean;
  onWindowClose: () => void;
  marker: any;
};

const InfoWindow: FunctionComponent<InfoWindowProps> = (options) => {
  const { isInfoWindowOpen, id, onClick, iconName, name, marker, map, onWindowClose } = options;
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>();

  const InfoWindowContent = useCallback(() => (
    <InfoContainer
      id={ id }
      onClick={ onClick }
      icon={ iconName || 'bus' }
      name={ name } />
  ), [id, onClick, name, iconName])

  // @TODO: Named function so it's not fired twice on click.
  const handleOnTableClick = useCallback(() => {
    onClick(id)
  }, [id, onClick]);

  useEffect(() => {
    isInfoWindowOpen && infoWindow?.open(map, marker)
  }, [isInfoWindowOpen, infoWindow, map, marker])
  
  useEffect(() => {

    if(!infoWindow) {
      const newInfoWindow =
        new google.maps.InfoWindow({ content: ReactDOMServer.renderToString(<InfoWindowContent />) })
        setInfoWindow(newInfoWindow);
  
      google.maps.event
        .addListener(newInfoWindow,'closeclick', () => {
          onWindowClose();
          newInfoWindow.close()
      });
    }

    return () => {
      if(infoWindow) {
        infoWindow.close()
      }
    };
  }, [infoWindow, InfoWindowContent, onWindowClose])

  setTimeout(() => {
    // @TODO: Native google.maps.event.addListener(newInfoWindow, 'click', () => { });
    // Does not work for some reason. Should be investigated
    // Adding a native document listener and pushing it to the back of the stack
    // to give time to the element to render.
    document
      .getElementById(id)
      ?.addEventListener('click', handleOnTableClick);
  })

  return null;
}

export default InfoWindow;