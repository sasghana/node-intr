import {Component, OnInit, ViewChild} from '@angular/core';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';
import {LeaveappModel} from './leaveapp.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, AppService } from './app.service';


export interface Person {
  name: string;
}
export interface DemoColor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-leaveapp',
  templateUrl: './leaveapp.component.html',
  styleUrls: ['./leaveapp.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class LeaveappComponent implements OnInit {


  tabIndex = 0;
  visible = true;
  color = '';
  selectable = true;
  removable = true;
  addOnBlur = true;
  message = '';

  step = 0;

  public leaveapp;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private appService: AppService, private router: ActivatedRoute,  public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // public placeOrder() {
  //   this.horizontalStepper._steps.forEach(step => step.editable = false);
  //   this.verticalStepper._steps.forEach(step => step.editable = false);
  //   this.appService.Data.cartList.length = 0;
  // }
}
