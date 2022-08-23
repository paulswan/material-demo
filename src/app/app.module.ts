import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddressFormComponent } from './address-form/address-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { ColorsComponent } from './colors/colors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { MaterialModule } from './material/material.module';
import { BottomSheetExampleComponent, DialogExampleComponent, OtherComponent } from './other/other.component';
import { ProgressComponent } from './progress/progress.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TabStepperComponent } from './tab-stepper/tab-stepper.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { TypographyComponent } from './typography/typography.component';

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
    SlidersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
