import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { DirectiveComponent } from './directive/directive.component';


const routes: Routes = [
  {path:'', redirectTo:'introduction',pathMatch:'full'},
  {path:'introduction',component:HomeComponent},
  {path:'databinding',component:Comp1Component},
  {path:'decorator', component:DecoratorsComponent},
  {path:'parent', component:ParentcomponentComponent},
  {path:'directive', component:DirectiveComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
