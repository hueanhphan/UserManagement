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
  username!: string;
  password!: string;
  email!: string;
  id!: number;
  users: User[] = [];
  user!: User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.userService
      .getUsersList()
      .subscribe((users) => (this.user = users.find((u) => u.id === this.id)!));
  }

  onSubmit(user: User) {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;

    this.userService.updateUser(user).subscribe();
  }
}
