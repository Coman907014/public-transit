import { InfoWindowObj, InfoWindowObjState } from "../components/map/InfoWindow/InfoWindow";

const googleMapsService = {
  closeAllInfoWindows (
    infoWObj: InfoWindowObj,
    infoWObjState: InfoWindowObjState,
    currentInfoWindowID?: string) : void {

    Object.keys(infoWObj).forEach(key => {
      if(currentInfoWindowID && key !== currentInfoWindowID) {
        this.closeCurrentInfoWindow(infoWObj, infoWObjState, key)
      }
    })

  },

  closeCurrentInfoWindow(infoWObj: InfoWindowObj, infoWObjState: InfoWindowObjState, id: string) {
      infoWObjState[id] = false;
      infoWObj[id]?.close();
  },

  openCurrentInfoWindow (
    infoWObj: InfoWindowObj,
    infoWObjState: InfoWindowObjState,
    id: string,
    map: google.maps.Map | google.maps.StreetViewPanorama | null | undefined,
    marker: google.maps.Marker) : void {

      infoWObjState[id] = true
      infoWObj[id]?.open(map, marker)

  },

  listenTo(element: any, event: string, callback: () => void): void {

    if(!window.google?.maps) {
      return console.error(`[googleMapsService]: Couldn't find maps`)
    }

    google.maps.event.addListener(element, event, callback);
  }
}

export default googleMapsService;