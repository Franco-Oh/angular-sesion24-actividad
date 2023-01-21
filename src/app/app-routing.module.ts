import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
  {path:'home', component: NavegacionComponent,
    children:[
      {path:'formulario', component: FormularioComponent},
      {path:'dashboard', component: DashboardComponent}
    ]
  },
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
