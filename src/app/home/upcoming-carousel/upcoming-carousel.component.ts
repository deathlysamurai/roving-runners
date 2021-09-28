import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Race } from '../../models/race';
import { RacesService } from '../../services/races.service';

@Component({
  selector: 'app-upcoming-carousel',
  templateUrl: './upcoming-carousel.component.html',
  styleUrls: ['./upcoming-carousel.component.css']
})
export class UpcomingCarouselComponent implements OnInit {
  slides: Race[] = [];

  constructor(private service: RacesService, private router: Router) { 
    this.service.getRaces().subscribe(data => {
      for (let i = 0; i < 3; i++) {
        this.slides.push(data[i]);
        this.slides[i].date = this.slides[i].date.substr(0, 10);
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void { }

  goToRacePage(name: string) {
    this.service.setCurrentRace(name);
    this.router.navigateByUrl("/race-page");
  }

}
