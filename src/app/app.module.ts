import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'confirmation', component: ConfirmationComponent }
];

//Custom modules
import { BraintreeModule } from './braintree/braintree.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BraintreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
