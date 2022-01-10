import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { ResultsComponent } from './results/results.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  { path: '', component: SearchBoxComponent },
  { path: 'search', component: ResultsComponent },
  { path: 'buy-ticket', component: BuyTicketComponent, canActivate: [AuthGuard] },
  { path: 'my-tickets', component: MyTicketsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
