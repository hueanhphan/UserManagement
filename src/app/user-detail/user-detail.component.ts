import { User } from './../interface/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  profileForm = this.fb.group({
    username: '',
    password: '',
    email: '',
  });
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  username!: string;
  password!: string;
  email!: string;
  id!: number;
  users: User[] = [];
  user!: User;

  handleUpdateUser() {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.userService
      .getUsersList()
      .subscribe((users) => (this.user = users.find((u) => u.id === this.id)!));
  }

  onSubmit() {
    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
  }
}
