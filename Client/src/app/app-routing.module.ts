import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculationComponent } from './components/calculation/calculation.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'calculation',
    component: CalculationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
