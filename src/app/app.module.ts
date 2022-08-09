import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { InputsComponent } from './inputs/inputs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { CardsComponent } from './cards/cards.component';
import { BottomSheetExampleComponent, DialogExampleComponent, OtherComponent } from './other/other.component';
import { ProgressComponent } from './progress/progress.component';
import { TabStepperComponent } from './tab-stepper/tab-stepper.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    InputsComponent,
    DashboardComponent,
    TableComponent,
    AddressFormComponent,
    TreeComponent,
    DragDropComponent,
    CardsComponent,
    ProgressComponent,
    TabStepperComponent,
    OtherComponent,
    BottomSheetExampleComponent,
    DialogExampleComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
