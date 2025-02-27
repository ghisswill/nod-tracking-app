import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUserUrl = 'http://localhost:3000/users';
  users: User[] = [];

  constructor(private http: HttpClient) { }

  create(item: User): Observable<User> {
    return this.http.post<User>(`${this.apiUserUrl}`, item);
  }

  getuser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUserUrl}/${id}`)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUserUrl}`);
  }

  update(updateUser: User): Observable<User> {
    return this.http.put<User>(`${this.apiUserUrl}/${updateUser.id}`, updateUser);
  }

  delete(id: number): Observable<User|undefined> {
    return this.http.delete<User>(`${this.apiUserUrl}/${id}`);
  }
}
