import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, Validator, NG_VALIDATORS } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    username: '',
    password: '',
    email: '',
  });
  username!: string;
  password!: string;
  email!: string;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmitLogin() {
    console.log(this.profileForm.value);
    this.router.navigate(['dashboard']);
  }
}
