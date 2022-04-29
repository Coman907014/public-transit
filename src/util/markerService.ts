import { Station } from "../model/Station";

const markerService = {
  stationToMarkerMapper(stations: Station[]) {
    return stations.map(({ coordinate, id, icon, name }) => ({
      label: '',
      position: {
        lat: coordinate.x,
        lng: coordinate.y
      },
      visible: true,
      icon: {
        url: `http://maps.google.com/mapfiles/kml/paddle/blu-circle.png`,
        scaledSize: new google.maps.Size(30, 30),
      },
      iconName: icon,
      clickable: true,
      id,
      name
    }))
  }
}

export default markerService;