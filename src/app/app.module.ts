import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    //
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsComponent,
    ColorsComponent,
    TypographyComponent,
    CheckboxRadioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
