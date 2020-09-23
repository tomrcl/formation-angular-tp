import {TicketComponent} from './list-tickets/shared/components/ticket/ticket.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {ListTicketsComponent} from './list-tickets/list-tickets.component';
import { LoginComponent } from './login/login.component';
import { UneLettreSurDeuxMajPipe } from './une-lettre-sur-deux-maj.pipe';


@NgModule({
    declarations: [
        AppComponent,
        ListTicketsComponent,
        TicketComponent,
        LoginComponent,
        UneLettreSurDeuxMajPipe,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
