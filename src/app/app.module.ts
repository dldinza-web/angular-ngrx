import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { CustomerReducer } from './store/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/customer.effects';
import { environment } from 'src/environments/environment';
import { ListComponent } from './components/customers/containers/list.component';
import { TableComponent } from './components/customers/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ applicationState: CustomerReducer }),
    EffectsModule.forRoot([CustomerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
