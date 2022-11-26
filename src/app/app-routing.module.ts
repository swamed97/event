import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { DeletedEventsComponent } from './deleted-events/deleted-events.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'addevent',component:AddeventComponent},
  {path:'deleted-events',component:DeletedEventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
