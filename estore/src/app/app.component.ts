import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estore';

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  refreshNavbar(refreshNav){
    this.ngOnInit();
  }

}
