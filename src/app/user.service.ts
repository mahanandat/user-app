import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserPagination } from './types/users';
import { ApiConstants } from './constants/apiConstnats';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private apiConstants: ApiConstants) { }

  getUserData(): Observable<UserPagination> {
    return this.http.get<UserPagination>(`${this.apiConstants.baseUrl}/${this.apiConstants.apiUrls.urlGetUser}`);
  }

  getUserById(id: string | null): Observable<User> {
    return this.http.get<User>(`${this.apiConstants.baseUrl}/${this.apiConstants.apiUrls.urlGetUser}/${id}`);
  }

  addUser(postData: User): Observable<any> {
    return this.http.post(`${this.apiConstants.baseUrl}/${this.apiConstants.apiUrls.urlGetUser}/${this.apiConstants.apiUrls.urlAddUser}`, postData);
  }

  updatePost(id: string | null, postData:User): Observable<any> {
    return this.http.put(`${this.apiConstants.baseUrl}/${this.apiConstants.apiUrls.urlGetUser}/${id}`, postData);
  }

  // deletePost(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${id}`);
  // }
}
