import { StationBoard } from "../model/StationBoard";
import timeService from "./timeService";

export interface MapForTable {
  to: string;
  departure: string;
  entity: string;
}

const stationsService = {
  mapForTable(nextStations: StationBoard[] | undefined): MapForTable[] | undefined {
    if(!nextStations) {
      return;
    }

    return nextStations.map(({ to, category, number ,stop: { departure } }) => (
      {
        entity: `${category} ${number}`,
        departure: timeService.getHourAndMinute(departure),
        to,
      }))
  },
  getStationsForCurrentPage(
    stations: MapForTable[] | undefined,
    pageLength: number,
    currentPage: number): MapForTable[] | undefined {

    if(!stations) {
      return;
    }

    const startIndex: number = (currentPage - 1) * pageLength;
    const endIndex: number = (currentPage * pageLength) - 1;
    
    // Filter is supposed to always return a value and here we only return for specific cases
    // eslint-disable-next-line 
    return  stations.filter((el, i) => {
      if(i>= startIndex && i<= endIndex) {
        return el
      }
    })
  }
}

export default stationsService;