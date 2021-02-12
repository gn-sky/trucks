import { Component, OnInit } from '@angular/core';
import { ITruck } from '../truck';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {

  trucks: any;

  constructor(
    private TruckService: TruckService
  ) { }

  ngOnInit(): void {
    this.trucks = this.TruckService.getTrucks();
  }

}
