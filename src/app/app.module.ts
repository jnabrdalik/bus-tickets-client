import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ResultsComponent } from './results/results.component';
import { MaterialModule } from './material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { TokenInterceptor } from './token-interceptor';
import { TicketPurchasedComponent } from './ticket-purchased/ticket-purchased.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ResultsComponent,
    BuyTicketComponent,
    ToolbarComponent,
    MyTicketsComponent,
    TicketPurchasedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'pl-PL'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
