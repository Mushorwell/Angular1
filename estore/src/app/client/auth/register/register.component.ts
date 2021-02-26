import { Router } from '@angular/router';
import { StoreUser } from './../../../server/data/classes/store-user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { EstoreService } from 'src/app/server/services/estore.service';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmControl = c.get('confirmPassword');

  if (passwordControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserForm: FormGroup;
  address: FormGroup;
  item: FormGroup;
  user = new StoreUser();
  passwordMessage: string;
  errorMessage: string;

  get addresses(): FormArray {
    return this.registerUserForm.get('addresses') as FormArray;
  }

  get items(): FormArray {
    return this.registerUserForm.get('items') as FormArray;
  }

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder, private storeUserService: EstoreService, private router: Router) { }

   ngOnInit(): void {
    (localStorage.getItem('userProfile'))? this.router.navigateByUrl('/'):'';
    this.registerUserForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      nickName: ['', [Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
      }, { validator: passwordMatcher }),
      phone: ['',[Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      userType: 'Buyer',
      addresses: this.fb.array([this.buildAddress()]),
      // items: this.fb.array([this.buildItem()])
    });

    // this.registerUserForm.get('userType').valueChanges.subscribe(
    //   value => this.setUserType(value)
    // );

    const passwordControl = this.registerUserForm.get('passwordGroup.password');
    passwordControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(passwordControl)
    );
   }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: ['', ],
      street2: '',
      streetNumber: '',
      area: '',
      city: ['', ],
      province: ['', ],
      postalCode: ['', ],
    });
  }

  addItem(): void {
    this.items.push(this.buildItem());
  }

  buildItem(): FormGroup {
    return this.fb.group({
      productCategory: 'Electronics',
      productName: ['', ],
      productDescription: ['', ],
      productQuantity: ['', ],
      productPrice: ['', ]
    });
  }

  save(): void {
    // console.log(this.registerUserForm);
    if (this.registerUserForm.valid){
      if (this.registerUserForm.dirty){
        this.storeUserService.createStoreUser(this.registerUserForm.value)
        .subscribe({
          next: () => {
            console.log('Saved: ' + JSON.stringify(this.registerUserForm.value));
            localStorage.setItem('userProfile', JSON.stringify(this.registerUserForm.value));
            this.onSaveComplete();
          },
          error: err => this.errorMessage = err
        });
      }else {
        this.onSaveComplete();
      }
    }else{
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  setMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
    // this.emailMessage = '';
    // if ((c.touched || c.dirty) && c.errors) {
    //   this.emailMessage = Object.keys(c.errors).map(
    //     key => this.validationMessages[key]).join(' ');
    // }
  }

  setUserType(notifyVia: string): void {
    const phoneControl = this.registerUserForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.registerUserForm.reset();
    this.router.navigate(['/products']);
  }

}
