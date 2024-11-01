import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeInComponent } from './Pages/trade-in/trade-in.component';

const routes: Routes = [
  {
    path: '', component: TradeInComponent
  },
  {
    path: 'trade-in', component: TradeInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
