import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'create', component: CreateComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
