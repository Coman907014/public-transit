export interface Marker {
  clickable: boolean;
  icon: {
    url: string;
    scaledSize: string;
  };
  iconName: string;
  id: string;
  label: string;
  name: string;
}