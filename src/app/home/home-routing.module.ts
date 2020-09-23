import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { AddeditComponent } from './addedit/addedit.component';

export const HOME_ROUTES = [
    {
        path: 'list-tickets',
        component: ListTicketsComponent
    },
    {
        path: 'add-ticket',
        //loadChildren: () => import('./addedit/add-edit.module').then(m => m.AddEditModule)
        component: AddeditComponent,
    },
    {
        path: 'edit-ticket/:idTicket',
        //loadChildren: () => import('./addedit/add-edit.module').then(m => m.AddEditModule)
        component: AddeditComponent,
    },
    {
        path: '**',
        redirectTo: 'list-tickets'
    },
]
/*
@NgModule({
    imports: [
      RouterModule.forChild(HOME_ROUTES)
    ],
    exports: [RouterModule],
    providers: []
  })
  export class HomeRoutingModule { }
  */