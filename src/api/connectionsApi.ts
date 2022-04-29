import { Station } from "../model/Station"
import { StationBoard } from "../model/StationBoard"
import httpClient from "./httpClient"

export interface StationConnections {
  station: Station
  stationboard: StationBoard[];
}

const connectionsApi = {
  getFromStation(stationId: string): Promise<StationConnections> {
    return httpClient
      .get(`/stationboard?station=${stationId}`)
      .then(response => response.data as StationConnections);
  },
}

export default connectionsApi;