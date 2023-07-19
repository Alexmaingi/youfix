import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { User } from '../Interface';
import { Observable } from 'rxjs';
import * as actions from '../State/Actions/userAction';
import { AppState } from '../State/appState';
import { getUsers } from '../State/Reducers/userReducer';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;
  users: User[] = [];
  // users!: Observable<User[]>;
  constructor(
    private router: Router,
    private store: Store<{ users: User[] }>,
    private userService: UserService
  ) {}

  isAdmin() {
    const admin = this.router.url === '/admin/adminusers';
    console.log(admin);
    return admin;
  }

  ngOnInit() {
    // console.log('Before dispatching getUsers');
    // this.store.dispatch(actions.getUsers());
    // console.log('After dispatching getUsers');

    // this.users = this.store.select(getUser);

    // this.store.subscribe((state) => {
    //   console.log('Current state:', state);
    // });

    // this.users.subscribe((users) => {
    //   console.log('Inside users subscription:', users);
    // });
    this.store.dispatch(actions.getUsers());
    this.store.select(getUsers).subscribe(
      (res) => {
        if (res) {
          console.log('firsts');
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );

    // this.users$.subscribe((users) => {
    //   console.log('users', users);
    // });
    // this.userService.getUsers().subscribe(
    //   (users) => {
    //     this.users = users;
    //     console.log('Fetched users:', users);
    //   },
    //   (error) => {
    //     console.error('Failed to fetch users:', error);
    //   }
    // );
  }
}
