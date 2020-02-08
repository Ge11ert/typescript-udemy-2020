export interface Mappable {
  location: {
    lat: number,
    lng: number,
  };
  color: string;
  markerContent(): string;
}

export class Map {
  private readonly googleMap: google.maps.Map;

  constructor(mapElement: Element) {
    this.googleMap = new google.maps.Map(mapElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
