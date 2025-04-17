import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '../../models/user.model';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUserUrl = 'http://localhost:3000/users'; // URL to web api
  public userConnected!: User;
  public isLoggedIn: boolean = false;

  constructor(private htpp: HttpClient) { }

  // login(credentials: Credentials): Observable<User> {
  //   return this.htpp.get<User>(``).pipe(
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
    return this.htpp.get<User>(`${this.apiUserUrl}?username=${credentials.username}&password=${credentials.password}`).pipe(
      tap((res: any)=>{
        this.userConnected = Object.assign(new User(),res[0]);
        this.isLoggedIn = true;
        localStorage.setItem('userConnected', JSON.stringify(this.userConnected));
      }),
      map((res)=>{
        return this.userConnected;
      })
    );
  }

  logout(): Observable<User> {
    this.isLoggedIn = false;
    localStorage.removeItem('userConnected');
    return of(this.userConnected);
  }
}
