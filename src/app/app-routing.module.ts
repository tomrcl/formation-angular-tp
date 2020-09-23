import { HOME_ROUTES } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TokenGuard } from './shared/utils/token.guard';

export const APP_ROUTES = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        //loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        component: HomeComponent,
        children: HOME_ROUTES,
        canActivate: [TokenGuard]
    },
    {
        path: '**',
        redirectTo: '/login'
    },
]

