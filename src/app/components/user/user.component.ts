import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { User } from '../../shared/models/user.model';
import { UserData } from '../../shared/models/mock/user.data';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  users: User[]= [];

  constructor(private userService: UserService) {}
ngOnInit(): void {
  this.userService.getUsers().subscribe((res: User[]) => {
    this.users = res;
  });
}
deleteUser() {
throw new Error('Method not implemented.');
}

}
