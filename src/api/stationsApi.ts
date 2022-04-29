import { Station } from "../model/Station"
import httpClient from "./httpClient"

interface StationsList {
  stations: Station[]
}

const stationsApi = {
  getAllByCity(city: string): Promise<StationsList> {
    return httpClient
      .get(`/locations?query=${city}`)
      .then(response =>  response.data as StationsList)
  },
  getAllByCoordinates(x: string, y: string): Promise<StationsList> {
    return httpClient
      .get(`/locations?x=${x}&y=${y}`)
      .then(response => response.data as StationsList)
  },
}

export default stationsApi;