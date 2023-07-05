class Weather {
  lat: string;
  long: string;
  api: string;

  constructor(lat: string, long: string) {
    this.lat = lat;
    this.long = long;
    this.api = 'cbaf267cfada9b18d0e0c37a8801d930';
  }
}

export default Weather;
