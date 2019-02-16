import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegistroComponent } from './login/registro.component';
import { HomeComponent } from './home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [  
  {path:'home', component:HomeComponent, 
    children:[
      {path:'homepage', component: HomepageComponent},
      {path:'', redirectTo:'homepage', pathMatch: 'full' }
  ]},
  {path:'login', component:LoginComponent },
  {path:'registro', component:RegistroComponent },
  {path:'', redirectTo:'home/homepage', pathMatch: 'full' },
  {path:'**', component:NopagefoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
