import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server';
import InfoContainer from "../InfoContainer/InfoContainer";
import { MapMarkerProps } from "../MapMarker";

interface InfoWindowProps extends MapMarkerProps {
  marker: any;
};

var infoWindowObj: any = {};
var infoWindowOpenObj: any = {};

const InfoWindow: FunctionComponent<InfoWindowProps> = (options) => {
  const { id, onClick, iconName, name, marker, map } = options;

  const InfoWindowContent = () => (
    <InfoContainer
      id={ id }
      onClick={ onClick }
      icon={ iconName || 'bus' }
      name={ name } />
  )

  // @TODO: Named function so it's not fired twice on click.
  const handleOnTableClick = useCallback(() => {
    onClick(id)
  }, [id, onClick]);

  const handleOnMarkerClick = () => {

    infoWindowObj[id].open(map, marker)
    Object.keys(infoWindowObj).forEach(key => {
      if(key !== id) {
        infoWindowOpenObj[key] = false;
        infoWindowObj[key]?.close();
      }
    })
    
    infoWindowOpenObj[id] = true
    infoWindowObj[id]?.open(map, marker)
    setTimeout(() => {
      // @TODO: Native google.maps.event.addListener(newInfoWindow, 'click', () => { });
      // Does not work for some reason. Should be investigated
      // Adding a native document listener and pushing it to the back of the stack
      // to give time to the element to render.
      document.getElementById(id)?.addEventListener('click', handleOnTableClick);
    }, 50)

  }

  const generateNewInfoWindow = () => {
    setTimeout((infoObj, infoObjOpen) => {

      const newInfoWindow =
      new google.maps.InfoWindow({
        content: ReactDOMServer.renderToString(
          <InfoContainer
          id={ id }
          onClick={ onClick }
          icon={ iconName || 'bus' }
          name={ name } />)
      })
  
      infoObj[id] = newInfoWindow;
      infoObjOpen[id] = false;
  
      google.maps.event.addListener(newInfoWindow, 'closeclick', () => {
          infoObjOpen[id] = false
          infoObj[id].close()
      });
    }, 1, infoWindowObj, infoWindowOpenObj)
  }

  useEffect(() => {

    generateNewInfoWindow();

    return () => {

      if(infoWindowObj[id]) {
        infoWindowObj[id].close()
      }
    };
  }, [document, infoWindowObj, infoWindowOpenObj, InfoWindowContent, options.id])

    
  options.marker &&
  google.maps.event.addListener(options.marker, 'click', handleOnMarkerClick);

  useEffect(() => {
    Object.keys(infoWindowObj).forEach(key => {
      infoWindowObj[key]?.close()
    })
  }, [infoWindowObj])

  return null;
}

export default InfoWindow;