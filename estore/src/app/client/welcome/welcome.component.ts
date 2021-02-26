import { StoreUser } from './../../server/data/classes/store-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  activeUser: StoreUser;

  constructor() { }

  ngOnInit() {
    this.activeUser = JSON.parse(localStorage.getItem('userProfile'));
    console.log(this.activeUser);
  }

}
