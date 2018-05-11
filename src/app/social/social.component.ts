import {Component, OnInit} from '@angular/core';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';
import {Profile} from "./profile.model";
import {ProfileService} from "./profile.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class SocialComponent implements OnInit{
  profile;
  people;
  images: any[] = [];
  num = 1;
  token: any;
  pieChartColors: any[] = [{
    backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
  }];

  pieOptions: any = {
    responsive: true,
    legend: {position: 'right'}
  };

  pieChartLabels: string[] = ['MS Word', 'Typing', 'Sage Pastel'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType = 'pie';

  constructor(private profileService: ProfileService, private router: ActivatedRoute) {
    for (this.num; this.num <= 9; this.num += 1) {
      this.images.push(this.num);
    }

  }

  ngOnInit(){
    this.getStaffProfile();
  }

  getPeopleById (){
    this.router.params.subscribe((params) => {
      // let id = params['id'];
      let id = 3;

      this.profileService.getPeople(id)
        .subscribe(res=>this.profile = res );
    })
  }

  getAllPeople () {
    console.log('getAllPeople response =', this.people);
    this.profileService.getPeoples()
      .subscribe(res => this.people = res);
  }

  getStaffProfile () {
    console.log('getStaffProfile = ', this.profile)
    this.profileService.getUerProfile()
      .subscribe(res => {
        this.profile = res;
        console.log('get user profile response ~~',this.profile)
      })
  }
}
