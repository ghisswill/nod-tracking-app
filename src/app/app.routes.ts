import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [authGuard]},
    {path: 'users', component: UserComponent, canActivate: [authGuard]},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];