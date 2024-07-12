import { Routes } from '@angular/router';
import { LoginComponent } from './budgetplanner/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './budgetplanner/home/home.component';
import { AboutComponent } from './budgetplanner/about/about.component';
import { ServicesComponent } from './budgetplanner/services/services.component';

export const routes: Routes = [
    { path: 'budgetplanner/login', component: LoginComponent },
    { path: 'budgetplanner/home', component: HomeComponent },
    { path: 'about', component:AboutComponent},
    { path: 'services', component:ServicesComponent},
    // { path: '**', component:pagenotfound}
    // {path:'budgetplanner',loadChildren:()=> import('./budgetplanner/budgetplanner.module').then(m=> m.BudgetplannerModule)}
];

