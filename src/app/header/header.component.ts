import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMobileMenu() {
    var hamburger = document.querySelector(".hamburger");
    hamburger?.classList.toggle("is-active");

    var ul = document.querySelector("ul");
    ul?.classList.toggle("dropdown-menu");
  }

}
