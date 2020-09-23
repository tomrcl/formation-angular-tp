import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTicketsComponent } from './list-tickets.component';

const routes: Routes = [
    {
        path: '',
        component: ListTicketsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListTicketsRoutingModule { }