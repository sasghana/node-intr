import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatChipsModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatStepperModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {LeaveappRoutes} from './leaveapp.routing';
import { LeaveappComponent } from './leaveapp.component';

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LeaveappRoutes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LeaveappComponent
  ],
})

export class LeaveappModule {}
