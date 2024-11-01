import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/Common/navbar/navbar.component';
import { FooterComponent } from './Shared/Common/footer/footer.component';
import { TradeInComponent } from './Pages/trade-in/trade-in.component';
import { FormsModule } from '@angular/forms';
import { FaqsComponent } from './Shared/Layouts/faqs/faqs.component';
import { HowItWorksComponent } from './Shared/Layouts/how-it-works/how-it-works.component';
import { SellConsignmentComponent } from './Shared/Layouts/sell-consignment/sell-consignment.component';
import { ValuePropositionComponent } from './Shared/Layouts/value-proposition/value-proposition.component';
import { DisplayCardComponent } from './Shared/Layouts/display-card/display-card.component';
import { TradeInFormComponent } from './Shared/Layouts/trade-in-form/trade-in-form.component';
import { ThanksComponent } from './Pages/thanks/thanks.component';
import { SiteMapComponent } from './Pages/site-map/site-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TradeInComponent,
    FaqsComponent,
    HowItWorksComponent,
    SellConsignmentComponent,
    ValuePropositionComponent,
    DisplayCardComponent,
    TradeInFormComponent,
    ThanksComponent,
    SiteMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
