import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

import {AuthService} from '../auth.service';
import {CustomValidators} from 'ng2-validation';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required])],
      password: password,
      confirmPassword: confirmPassword
    });
  }

    onSubmit() {
      const postData = {
        username: this.form.value.uname,
        email: this.form.value.email,
        mobile: this.form.value.phone,
        password: this.form.value.confirmPassword
      }
      console.log('@component postData :: ', JSON.stringify(postData));
      this.authService.signup(postData).subscribe(data => {
        console.log(`this.data :: ${JSON.stringify(data)}`);
        this.router.navigate(['/account/signin']);
      });
  }
}
