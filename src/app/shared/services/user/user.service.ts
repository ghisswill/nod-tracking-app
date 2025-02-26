import { userMock } from './../../models/mock/user-mock.data';
import { Injectable } from '@angular/core';
import { UserData } from '../../models/mock/user.data';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = UserData.users;
  userMock?: userMock;

  constructor() { }

  create(item: User): Observable<User> {
    const currentUser = {token: '', user: Object.assign(new User(),item)};
    currentUser.user.userId = this.users.length + 1;
    this.users.push({token: '', user: currentUser.user});
    return of(currentUser['user']);
  }

  getuser(id: number): Observable<User|undefined> {
    const user = this.users.find(item => item.user.userId === id)?.user;
    return of(user);
  }

  getUsers(): Observable<User[]> {
    const users: User[] = [];
    this.users.map(item => {
      users.push(item.user);
    })
    return of(users);
  }

  update(updateUser: User): Observable<User> {
    this.userMock = this.users.find(item => item.user.userId === updateUser.userId);
    //this.userMock.user = this.userMock?.user ? updateUser : null;
    return of(updateUser);
  }

  delete(id: number): Observable<User|undefined> {
    const index = this.users.findIndex(item => item.user.userId === 1);
    const user = this.users.find(item => item.user.userId === id)?.user;
    this.users.splice(index, 1);
    return of(user);
  }
}
