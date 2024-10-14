import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({
    counter: counterReducer //all the reducers here, associated at the key that will be used to call for their value in the app 
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
