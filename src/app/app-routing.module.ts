import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeInComponent } from './Pages/trade-in/trade-in.component';
import { ThanksComponent } from './Pages/thanks/thanks.component';
import { SiteMapComponent } from './Pages/site-map/site-map.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'trade-in', pathMatch: 'full'
  },
  {
    path: 'trade-in', component: TradeInComponent
  },
  {
    path: 'thank-you', component: ThanksComponent
  },
  {
    path: 'sitemap', component: SiteMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
