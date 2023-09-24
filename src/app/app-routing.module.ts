import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'databinding',component:Comp1Component},
  {path:'decorator', component:DecoratorsComponent},
  {path:'parent', component:ParentcomponentComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
