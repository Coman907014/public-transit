import React, { FunctionComponent, useCallback, useState } from "react"
import ReactDOM from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import connectionsApi, { StationConnections } from "../../api/connectionsApi";
import markerService from "../../util/markerService";
import { Station } from "../../model/Station";
import Map from "./Map";
import timeService from "../../util/timeService";
import TimeTableContainer from "../timeTable/TimeTableContainer";
import stationsService from "../../util/stationsService";

interface MapContainerProps {
  mapLocations: Station[]
}

const MapContainer: FunctionComponent<MapContainerProps> = ({ mapLocations }) => {
  const root = document.getElementById('root');
  const [stationConnections, setStationConnections] = useState<StationConnections>()
  const [isBackdropVisible, setIsBackdropVisible] = useState<boolean>(false);

  const handleOnClick = useCallback((stationId: string) => {
    connectionsApi
      .getFromStation(stationId)
      .then(response => {
        setIsBackdropVisible(true);
        setStationConnections(response)
      })
      .catch(() => setIsBackdropVisible(false));
  }, []);

  const handleBackdropClose = useCallback(() => {
    setIsBackdropVisible(false);
  }, []);

  const render = useCallback((status: Status) => {
    switch(status) {
      case Status.LOADING:
        return <div>Loading the map...</div>;
      case Status.FAILURE:
          return <div>Failed loading the map...</div>
      case Status.SUCCESS:
        return <Map markers={markerService.stationToMarkerMapper(mapLocations)} handleOnClick={ handleOnClick }/>;
    }
  }, [mapLocations, handleOnClick]);
  console.log('stationConnections?.stationboard', stationConnections?.stationboard)
  return (
    <>
      <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY as string} render={render} />
        {
          ReactDOM.createPortal(
            <TimeTableContainer
              tableBody={ stationsService.mapForTable(stationConnections?.stationboard) }
              handleBackdropClose={ handleBackdropClose }
              shouldShow={ isBackdropVisible }
              title={ stationConnections?.station.name }
              subtitle1={ timeService.getDate() }
              subtitle2={ timeService.getHourAndMinute() }
            />,
            root as Element
          )
        }
    </>
    )
}

export default MapContainer;