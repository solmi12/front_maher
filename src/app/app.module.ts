import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from 'src/products/products.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from 'src/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientComponent,
    LoginComponent,

    HomeComponent,
    RegisterComponent,
    BoardUserComponent,
    BoardAdminComponent,
    UsersListComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,


    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
