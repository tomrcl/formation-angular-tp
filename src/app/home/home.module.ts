import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        //HomeRoutingModule,
        RouterModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
