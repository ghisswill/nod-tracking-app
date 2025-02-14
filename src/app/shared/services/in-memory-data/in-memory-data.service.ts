import { RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../../models/mock/user.data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  data = UserData.users;

  constructor() {
  }

  // Auth
  addLogin(reqInfo: RequestInfo): Observable<any> {
    const user = reqInfo.utils.getJsonBody(reqInfo.req);
    const userFound = this.data.find(item => item.user.username === user.username && item.user.password === user.password);
    return reqInfo.utils.createResponse$(() => ({
      body: userFound,
      status: 200
    }));
  }

  // CRUD methods

  // GET all users
  getAllUsers(reqInfo: any): Observable<any> {
    const users = this.data;
    return reqInfo.utils.createResponse$(() => ({
      body: users,
      status: 200
    }));
  }

  // GET users by id
  getUserById(reqInfo: any): Observable<any> {
    const userId = reqInfo.id;
    const user = this.data.find((item: any) => item.id === userId);
    return reqInfo.utils.createResponse$(() => ({
      body: user,
      status: user ? 200 : 404
    }));
  }

  // POST new user
  addNewUser(reqInfo: RequestInfo): Observable<any> {
    const newUser = reqInfo.utils.getJsonBody(reqInfo.req);
    newUser.id = this.data.length + 1;
    this.data.push(newUser);
    return reqInfo.utils.createResponse$(() => ({
      body: newUser,
      status: 201
    }))
  }

  // PUT update user
  updateUser(reqInfo: RequestInfo): Observable<any> {
    const id = reqInfo.id;
    const updateUser = reqInfo.utils.getJsonBody(reqInfo.req);
    const index = this.data.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.data[index] = {...this.data[index], ...updateUser};
      return reqInfo.utils.createResponse$(() => ({
        body: updateUser,
        status: 200
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: {error: 'User not found'},
        status: 404
      }));
    }
  }

  // DELETE delete user by id
  deleteUser(reqInfo: RequestInfo): Observable<any> {
    const id = reqInfo.id;
    const index = this.data.findIndex((item: any) => item.id === id);
    if(index !== -1) {
      const deleteUser = this.data.splice(index, 1)[0];
      return reqInfo.utils.createResponse$(() => ({
        body: deleteUser,
        status: 200
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: {error: 'user not found'},
        status: 404
      }));
    }
  }
}
