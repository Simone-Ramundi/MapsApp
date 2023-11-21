import {User} from "./User";
import {Company} from "./Company";

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

}
