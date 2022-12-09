import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



