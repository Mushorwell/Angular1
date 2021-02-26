import { StoreUser } from '../../../server/data/classes/store-user';
import { EstoreService } from '../../../server/services/estore.service';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignatureKind } from 'typescript';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

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
  loggedIn: string;

  constructor(private storeUserService: EstoreService, private router: Router) { }

  ngOnInit() {
    (localStorage.getItem('userProfile'))? this.router.navigateByUrl('/'):'';
  }

  @Output() refreshNav = new EventEmitter();

  save(signInForm: NgForm) {
    // Get login form input
    // console.log(signInForm.form);
    // console.log('Saved: ' + JSON.stringify(signInForm.value));
    const email = signInForm.value.email.trim();
    const pass = signInForm.value.password.trim();

    // Load data on registered users
    this.storeUserService.getStoreUsers().subscribe({
      next: storeUsers => {
        this.storeUsers = storeUsers;
        // Check if login data matches any registered user accounts
        if (!email || !pass) {
          return;
        } else if (this.storeUsers.filter(user => user.email === email)) {
          this.checkUser = this.storeUsers.filter(user => user.email === email);
          let account: number;
          for(account = 0; account < this.checkUser.length; account++){
            // console.log(account);
            let storedPasswd = this.checkUser[account].password;
            // console.log(storedPasswd);
            if ( storedPasswd === pass) {
              // console.log(`${this.checkUser[account].firstName} is signed in.`);
              localStorage.setItem('userProfile', JSON.stringify(this.checkUser[account]));
              this.loggedIn = 'true';
              this.refreshNav.emit(this.loggedIn);
              // this.router.navigateByUrl('/products');
              // console.log(localStorage.getItem('userProfile'));
              location.reload();
              break;
            } else {
              // console.log('User not found');
            }
          }
        }
      },
      error: err => this.errorMessage = err
    });
  }
}

