import { StoreUser } from './../store-user';
import { EstoreService } from './../estore.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignatureKind } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  storeUsers: StoreUser[];
  checkUser: StoreUser[];
  user = new StoreUser();
  pageTitle = 'User Login';
  errorMessage: string;

  constructor(private storeUserService: EstoreService) { }

  ngOnInit() {

  }

  save(signInForm: NgForm) {
    console.log(signInForm.form);
    console.log('Saved: ' + JSON.stringify(signInForm.value));
    const email = signInForm.value.email.trim();
    const pass = signInForm.value.password.trim();
    this.storeUserService.getStoreUsers().subscribe({
      next: storeUsers => {
        this.storeUsers = storeUsers;
        if (!email || !pass) {
          return;
        } else if (this.storeUsers.filter(user => user.email === email)) {
          this.checkUser = this.storeUsers.filter(user => user.email === email);
          if (this.checkUser[0].password === pass) {
            console.log(`${this.checkUser[0].fullName} is signed in.`);
          } else {
            console.log('User not found');
          }
        }
      },
      error: err => this.errorMessage = err
    });
  }
}

