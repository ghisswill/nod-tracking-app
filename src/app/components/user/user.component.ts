import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user/user.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, ButtonModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [DialogService]
})
export class UserComponent implements OnInit {

  users: User[] = [];
  isEdited: boolean = false;
  userSaved: User = localStorage.getItem("userConnected") || '' != '' ? JSON.parse(localStorage.getItem("userConnected") || '') : undefined;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private dialoService: DialogService
  ) { }

  ngOnInit(): void {
    this.getAllUser();
    this.isEdited = this.userSaved.type?.includes("admin") ? true : false;
  }

  getAllUser() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  editUser(user: User) {
    const ref = this.dialoService.open(RegisterComponent, {
      data: {user: user}
    })
  }

  deleteUser(user: User) {
    if (user.id)
      this.userService.delete(user.id).subscribe({
        next: () => {
          this.getAllUser();
        }
      })
  }

  showPopup() {
    const ref = this.dialoService.open(RegisterComponent, {
      data: {user: null}
    }
    );
  }
}
