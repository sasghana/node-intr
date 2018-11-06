import { Routes } from '@angular/router';

import {LeaveappComponent} from './leaveapp.component';
import {MyfeedComponent} from '../myfeed/myfeed.component';

export const LeaveappRoutes: Routes = [{
  path: '', component: LeaveappComponent, data: {
    heading: 'leaveApp',
    css: 'view-no-padding'
  }
}];
