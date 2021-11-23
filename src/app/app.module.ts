import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LabelstudioComponentComponent } from './labelstudio-component/labelstudio-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelstudioComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
