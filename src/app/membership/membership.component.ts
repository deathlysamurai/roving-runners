import { Component, OnInit } from '@angular/core';

interface Table {
  tier: string;
  price: string;
  extras: string[];
  numExtras: number;
  freeRaces: number;
}

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  extras: string[] = ["", "", "", "", "", ""]
  table: Table[] = [
    {tier: "Community", price: "Free", extras: [], numExtras: 2, freeRaces: 0},
    {tier: "Amateur", price: "$50", extras: [], numExtras: 4, freeRaces: 2},
    {tier: "Professional", price: "$100", extras: [], numExtras: 5, freeRaces: 5},
    {tier: "Olympian", price: "$150", extras: [], numExtras: 6, freeRaces: 10}
  ];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.table.length; i++) {
      let raceNumber = this.table[i].freeRaces;
      this.extras = ["Community Emails", "Weekly Fun Runs", "Free Merch", 
                          "Choice of " + raceNumber + " Free Races", "Discounts on all Races",
                          "All Races in your Local Area are Free"];

      this.table[i].extras = this.extras.slice(0, this.table[i].numExtras);

      while (this.table[i].extras.length != this.extras.length) {
        this.table[i].extras.push("-----");
      }
    }
  }

}
