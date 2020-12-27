import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { AppStartComponent } from './app-start/app-start.component';
import { FailureComponent } from './failure/failure.component';
import { FightComponent } from './component-test/fight/fight.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    AppStartComponent,
    FailureComponent,
    FightComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
