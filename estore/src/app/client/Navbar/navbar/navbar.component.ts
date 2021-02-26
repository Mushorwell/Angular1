import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userProfile = JSON.parse(localStorage.getItem('userProfile'));

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signOut(){
    localStorage.clear();
    this.ngOnInit();
    location.reload();
    this.router.navigateByUrl('/');
    console.log(localStorage);
  }

}
