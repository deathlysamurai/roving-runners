import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Race } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  url = 'assets/races.txt';
  name: string = '';

  constructor(private http: HttpClient) { }

  getRaces() {
      return this.http.get<Race[]>(this.url);
  }

  getCurrentRace() {
    this.name = JSON.parse(localStorage.getItem('race') || "{}");
    return this.name;
  }

  setCurrentRace(race: string) {
    localStorage.setItem('race', JSON.stringify(race));
  }
}
