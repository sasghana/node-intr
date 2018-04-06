import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
// import { moveIn, fallIn } from '../../router.animation';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email;
  uname;
  password;
  public form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    if (authService.isLoggedIn()) {
      this.router.navigate(['/social']);
    }
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
      console.log(`this.data :: ${JSON.stringify(data)}`);
      localStorage.setItem('token', JSON.stringify(data));
      this.router.navigate(['/social']);
    });

  }
}
