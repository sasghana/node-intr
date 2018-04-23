import { Component } from '@angular/core';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class SocialComponent {
  profile: any[] = [];
  username: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobile: any;
  email: string;
  department: string;
  position: string;
  bio: string;
  gravatar: any;
  following: boolean;
  status: any;
  images: any[] = [];
  num = 1;

  pieChartColors: any[] = [{
    backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
  }];

  pieOptions: any = {
    responsive: true,
    legend: {
      position: 'right'
    }
  };

  pieChartLabels: string[] = ['MS Word', 'Typing', 'Sage Pastel'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType = 'pie';

  constructor() {
    for (this.num; this.num <= 9; this.num += 1) {
      this.images.push(this.num);
    }

    this.gravatar = localStorage.getItem('image');
    this.username = localStorage.getItem('username');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.email = localStorage.getItem('email');
    this.bio = localStorage.getItem('bio');
    this.department = localStorage.getItem('department');
    this.position = localStorage.getItem('position');
    this.mobile = localStorage.getItem('mobile')
    this.status = localStorage.getItem('status')

    console.log('****************************************');
    console.log('social email >>>', this.email);
    console.log('social mobile  >>>', this.mobile);
    console.log('social status  >>>', this.status);
    console.log('****************************************');
  }
}
