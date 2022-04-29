export interface Station {
  coordinate: StationsCoordinates;
  distance: number;
  icon: "train" | "bus" | "tram";
  id: string;
  name: string;
  score: any
}

interface StationsCoordinates {
  type: string;
  x: string;
  y: string;
}