import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headerPortfolio/header.component';
import { PersonalsbModule } from './personalsb/personalsb.module';
import { TableroppalModule } from './tableroppal/tableroppal.module';
import { FooterportfolioComponent } from './footerportfolio/footerportfolio.component';
import { LoginbarComponent } from './loginbar/loginbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterportfolioComponent,
    LoginbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalsbModule,
    TableroppalModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
