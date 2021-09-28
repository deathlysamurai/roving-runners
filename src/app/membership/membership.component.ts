import { Component, OnInit } from '@angular/core';

interface Table {
  tier: string;
  price: string;
  extras: string[];
  freeRaces: number;
}

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  raceNumber = 0;
  extras: string[] = ["Community Emails", "Weekly Fun Runs", "Free Merch", 
                      "Choice of " + this.raceNumber + " Free Races", "Discounts on all Races",
                      "All Races in your Local Area are Free"];
  table: Table[] = [
    {tier: "Community", price: "Free", extras: this.extras.slice(0, 2), freeRaces: 0},
    {tier: "Amateur", price: "$50", extras: this.extras.slice(0, 3), freeRaces: 2},
    {tier: "Professional", price: "$100", extras: this.extras.slice(0, 4), freeRaces: 5},
    {tier: "Olympian", price: "$150", extras: this.extras, freeRaces: 10}
  ];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.table.length; i++) {
      while (this.table[i].extras.length != this.extras.length) {
        this.table[i].extras.push("-----");
      }
    }
  }

}
