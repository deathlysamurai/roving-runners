import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { Race } from '../models/race';
import { RacesService } from '../services/races.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  activeDayIsOpen: boolean = false;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [];

  constructor(private service: RacesService, private modal: NgbModal, private router: Router) { 
    this.service.getRaces().subscribe(data => {
      for (let event of data) {
        this.events.push({
          start: parseISO(event.date),
          title: event.name
        })
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  goToRacePage(event: CalendarEvent) {
    this.service.setCurrentRace(event.title);
    this.router.navigateByUrl("/race-page");
  }
}
