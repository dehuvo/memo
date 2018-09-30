import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
