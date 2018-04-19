import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import {AuthService} from '../auth.service';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class SigninComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  email;
  uname;
  password;
  config;
  profile: any;
  public form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar) {
    if (authService.isLoggedIn()) {
      this.router.navigate(['/social']);
    }

    this.config = new MatSnackBarConfig();
    this.config.verticalPosition = this.verticalPosition;
    this.config.horizontalPosition = this.horizontalPosition;
    this.config.duration = 5000;
  }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const postData = {
      username: this.form.value.uname,
      password: this.form.value.password
    }
    console.log('@component postData :: ', JSON.stringify(postData));
    this.authService.login(postData).subscribe(data => {

      localStorage.setItem('token', JSON.stringify(data));
      localStorage.setItem('role', data['role']);
      localStorage.setItem('image', data['profile'].gravatar);
      localStorage.setItem('username', data['profile'].username);

      console.log('get tokenFromStorage:: ', localStorage.getItem('token') );
      console.log('get role :: ', localStorage.getItem('role') );
      // console.log('get profile :: ', localStorage.getItem('profile') );
      // console.log('get image :: ', localStorage.getItem('image') );
      // console.log('get username :: ', localStorage.getItem('username') );

      this.snackBar.open(`Welcome ${data['profile'].username}`, '', this.config);

      this.router.navigate(['/social']);
      },
      error => {
        console.log(`Error Login :: ${JSON.stringify(error)}`);
        this.snackBar.open(`${JSON.stringify(error.error['message'])}`, '', this.config);
        this.form.reset();
      }
    );

  }
}
