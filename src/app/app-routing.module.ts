import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent , canActivate:[RouteGuardService]},
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
