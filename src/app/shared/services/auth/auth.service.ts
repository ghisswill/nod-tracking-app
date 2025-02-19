import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { UserData } from '../../models/mock/user.data';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'api/users'; // URL to web api
  public user: User | undefined = new User;
  public isLoggedIn: boolean = false;

  constructor(private htpp: HttpClient) { }

  // login(credentials: Credentials): Observable<User> {
  //   return this.htpp.post<any>(this.usersUrl, credentials).pipe(
  //     tap((res) => {
  //       localStorage.setItem('token', res['token']);
  //       const user = Object.assign(new User(), res['user']);
  //       this.user = user;
  //     }),
  //     map((res: any) => {
  //       return this.user;
  //     })
  //   )
  // }



  login(credentials: Credentials): Observable<User> {
    const userData = UserData.users;
    const user = userData.find(item => item.user.username === credentials.username
      && item.user.password === credentials.password);
    localStorage.setItem('token', JSON.stringify(user?.token));
    this.user = Object.assign(new User(), user?.user);
    localStorage.setItem('userConnected', JSON.stringify(this.user));
    this.isLoggedIn = true;
    return of(this.user);
  }

  logout(): Observable<User> {
    this.user = new User();
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userConnected');
    return of(this.user);
  }
}
