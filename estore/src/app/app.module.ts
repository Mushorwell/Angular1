import { AppData } from './app-data';
import { EstoreData } from './server/data/estore-data';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './client/welcome/welcome.component';
import { LoginComponent } from './client/auth/login/login.component';
import { RegisterComponent } from './client/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './client/product-list/product-list.component';
import { ProductEditComponent } from './client/product-edit/product-edit.component';
import { NavbarComponent } from './client/Navbar/navbar/navbar.component';
import { ProductComponent } from './client/product/product.component';
import { RegisterGuard } from './client/product-edit/register.guard';
import { ProductEditGuard } from './client/product-edit/product-edit.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'register',
    canDeactivate: [RegisterGuard],
    component: RegisterComponent,
  },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/0', component: ProductEditComponent},
  {path: 'products/:id', component: ProductComponent},
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    canDeactivate: [ProductEditGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductEditComponent,
    NavbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
