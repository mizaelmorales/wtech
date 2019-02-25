import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegistroComponent } from './login/registro.component';
import { HomeComponent } from './home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PanelComponent } from './panel/panel.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { ContactanosComponent } from './home/contactanos/contactanos.component';
import { ServiciosComponent } from './home/servicios/servicios.component';

const routes: Routes = [  
  {path:'home', component:HomeComponent, 
    children:[
      {path:'homepage', component: HomepageComponent},
      {path:'nosotros', component: NosotrosComponent},
      {path:'contactanos', component: ContactanosComponent},
      {path:'servicios', component: ServiciosComponent},
      {path:'', redirectTo:'homepage', pathMatch: 'full' }
  ]},
  {path:'panel', component:PanelComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'',  redirectTo:'dashboard', pathMatch: 'full'}
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
