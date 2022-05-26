import { User } from './../../interface/user/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, Validator, NG_VALIDATORS } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  profileForm = this.fb.group({
    username: '',
    password: '',
    email: '',
  });
  username!: string;
  password!: string;
  email!: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profileForm.value);
    if (!this.username) {
      alert('Please add username');
      return;
    }
    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this.userService
      .addUser(newUser)
      .subscribe((user) => this.users.push(user));

    this.username = '';
    this.password = '';
    this.email = '';
  }
}
