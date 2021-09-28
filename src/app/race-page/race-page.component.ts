import { Component, OnInit } from '@angular/core';
import { RacesService } from '../services/races.service';
import { Race } from '../models/race';

@Component({
  selector: 'app-race-page',
  templateUrl: './race-page.component.html',
  styleUrls: ['./race-page.component.css']
})
export class RacePageComponent implements OnInit {
  name: string = '';
  currentRace!: Race;
  init: boolean = false;
  date: string = '';
  time: string = '';

  constructor(private service: RacesService) { }

  ngOnInit(): void {
    this.name = this.service.getCurrentRace();


    this.service.getRaces().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name == this.name) {
          this.currentRace = data[i];
          this.date = data[i].date.substr(0, 10);
          this.time = data[i].date.substr(11, 5);
          this.init = true;
        }
      }
    }, error => {
      console.log(error);
    });
  }

}
