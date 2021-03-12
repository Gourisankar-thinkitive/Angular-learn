import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MycustompipePipe } from './mycustompipe.pipe';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MycustompipePipe,
    NavbarComponent,
    LoginComponent,
    AdminNavComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
