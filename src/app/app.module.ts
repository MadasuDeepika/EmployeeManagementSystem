import {
  TuiRootModule,
  TuiSvgModule,
  TuiButtonModule,
  TuiNotificationModule,
  TuiTextfieldControllerModule,
  TUI_BUTTON_OPTIONS,
  TuiDialogModule,
  TuiAlertModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiLoaderModule,
  TuiLinkModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAppBarModule, TuiSidebarModule } from '@taiga-ui/addon-mobile';
import {
  TuiAccordionModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiActiveZoneModule, TuiItemModule } from '@taiga-ui/cdk';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, PagenotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiDropdownModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiItemModule,
    TuiAppBarModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiNotificationModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiLoaderModule,
    TuiAccordionModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    MatTooltipModule,
    MatSelectModule
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
  bootstrap: [AppComponent],
})
export class AppModule {}
