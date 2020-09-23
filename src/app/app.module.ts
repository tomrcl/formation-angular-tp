import { AddeditComponent } from './home/addedit/addedit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListTicketsComponent } from './home/list-tickets/list-tickets.component';
import { TicketComponent } from './home/list-tickets/shared/components/ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HomeComponent,
    TicketComponent,
    ListTicketsComponent,
    AddeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
