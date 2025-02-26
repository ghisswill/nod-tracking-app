import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }
  deleteUser(user: User) {
    if (user.userId)
      this.userService.delete(user.userId)
  }

}
