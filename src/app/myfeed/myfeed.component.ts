import { Component } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarConfig,
  MatTableDataSource,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition} from '@angular/material';

import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import { COLORS, COLORSINVERT } from '../core';
import { single, multi, generateData } from '../charts/data';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';


@Component({
  selector: 'app-myfeed',
  templateUrl: './myfeed.component.html',
  styleUrls: ['./myfeed.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class MyfeedComponent {
  message = '';

  constructor(public snackBar: MatSnackBar) {
  }

  messages: any[] = [
    {
      from: 'Hanson',
      subject: 'Brunch?',
      message: 'Did you want to go on Sunday? I was thinking that might work.',
      image: '//www.gravatar.com/avatar/51d4780a028c7182c5cc4d78462808c0?s=200&r=pg&d=mm'
    },
    {
      from: 'Ayisi',
      subject: 'Summer BBQ',
      message: 'Wish I could come, but I have some prior obligations.',
      image: '//www.gravatar.com/avatar/e619f5dad40ff1c5845c70bf407a16f7?s=200&r=pg&d=mm'
    },
    {
      from: 'Info',
      subject: 'Oui oui',
      message: 'Do you have Paris reservations for the 15th? I just booked!',
      image: '//www.gravatar.com/avatar/b47216dfe3624c644aec3111e2d83bed?s=200&r=pg&d=mm'
    }
  ];

}

