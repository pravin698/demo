import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './Components/shared/sidenav/sidenav.component';
import { SidenavModule } from './Components/shared/sidenav/sidenav/sidenav.module';


const routes: Routes = [
  
  { path: 'sidenavpath', component: SidenavComponent,},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
