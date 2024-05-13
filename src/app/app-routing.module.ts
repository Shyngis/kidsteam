import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientComponent } from './client/client.component';
import { MainComponent } from './client/pages/main/main.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/signin', pathMatch: 'full'
  },
  { path: 'signin', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'client', component:ClientComponent},
  { path: 'client/main', component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
