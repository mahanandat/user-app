import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserPagination } from '../types/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  standalone: false
})
export class UserListComponent implements OnInit {
  usersData!: UserPagination;
  selectedUserId: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.userService.getUserData().subscribe(
      (users: UserPagination) => {
        this.usersData = users;
        console.log('Users:', this.usersData);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
