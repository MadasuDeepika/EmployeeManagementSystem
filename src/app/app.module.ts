import { TuiRootModule, TuiSvgModule, TuiButtonModule, TuiNotificationModule, TuiTextfieldControllerModule, TUI_BUTTON_OPTIONS } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAppBarModule } from "@taiga-ui/addon-mobile";
import { TuiInputModule, TuiInputPasswordModule } from "@taiga-ui/kit";
import { LoginComponent } from './components/login/login.component';
import {  ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiSvgModule,
      TuiButtonModule,
      TuiAppBarModule,
      TuiNotificationModule,
      TuiInputModule,
      TuiInputPasswordModule,
      TuiTextfieldControllerModule
],
providers: [
  {
    provide: TUI_BUTTON_OPTIONS,
    useValue: {
      appearance: 'primary',
      size: 'm',
    },
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
