import { Injectable } from "@angular/core";
import { ITruck } from "./truck";

@Injectable({
    providedIn: 'root'
})
export class TruckService {
    // private truckUrl = 'api/trucks/trucks.json';

    getTrucks() {
        return [
                {
                "truckId": 1,
                "truckName": "363 Joshua",
                "dispatch": "TIM",
                "city": "Pooler",
                "state": "GA",
                "when": "2/2/2021 12:00",
                "comments": "X420/BROKE DOWN"
                }
            ]        
    }
}