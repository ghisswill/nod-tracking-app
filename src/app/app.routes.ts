import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];