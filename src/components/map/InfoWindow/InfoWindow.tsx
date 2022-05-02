import { FunctionComponent, useCallback, useEffect } from "react";
import ReactDOMServer from 'react-dom/server';
import googleMapsService from "../../../util/googleMapsService";
import InfoContainer from "../InfoContainer/InfoContainer";
import { MapMarkerProps } from "../MapMarker";

interface InfoWindowProps extends MapMarkerProps {
  marker: any;
};

export interface InfoWindowObj {
  [key: string]: google.maps.InfoWindow
}

export interface InfoWindowObjState {
  [key: string]: boolean;
}

// @TODO: We need this in order to keep track of all infoWindows created
// Might be able to find a better solution
var infoWindowObj: InfoWindowObj = {};
var infoWindowObjState: InfoWindowObjState = {};

const InfoWindow: FunctionComponent<InfoWindowProps> = (options) => {
  const { id, onClick, iconName, name, marker, map } = options;

  const InfoWindowContent = useCallback(() => (
    <InfoContainer
      id={ id }
      onClick={ onClick }
      icon={ iconName || 'bus' }
      name={ name } />
  ), [id, iconName, name, onClick])

  // @TODO: Named function so it's not fired twice on click.
  const handleOnTableClick = useCallback(() => {
    onClick(id)
  }, [id, onClick]);

  const handleOnMarkerClick = useCallback(() =>{

    googleMapsService.closeAllInfoWindows(infoWindowObj, infoWindowObjState, id);
    googleMapsService.openCurrentInfoWindow(infoWindowObj, infoWindowObjState, id, map, marker);

    setTimeout(() => {
      // @TODO: Native google.maps.event.addListener(newInfoWindow, 'click', () => { });
      // Does not work for some reason. Should be investigated
      // Adding a native document listener and pushing it to the back of the stack
      // to give time to the element to render.
      document.getElementById(id)?.addEventListener('click', handleOnTableClick);
    })

  }, [handleOnTableClick, id, map, marker] )

  const generateNewInfoWindow = useCallback(() => {
      const newInfoWindow =
      new google.maps.InfoWindow({
        content: ReactDOMServer.renderToString(
          <InfoContainer
            id={ id }
            onClick={ onClick }
            icon={ iconName || 'bus' }
            name={ name }
            />)
      })
  
      infoWindowObj[id] = newInfoWindow;
      infoWindowObjState[id] = false;

      googleMapsService.listenTo(
        newInfoWindow,
        'closeclick', () =>
        googleMapsService.closeCurrentInfoWindow(infoWindowObj, infoWindowObjState, id));

  } , [iconName, id, name, onClick])

  useEffect(() => {

    generateNewInfoWindow();

    return () => googleMapsService.closeAllInfoWindows(infoWindowObj, infoWindowObjState)
  }, [InfoWindowContent, options.id, generateNewInfoWindow, id])

    
  options.marker &&
  googleMapsService.listenTo(options.marker, 'click', handleOnMarkerClick);

  return null;
}

export default InfoWindow;