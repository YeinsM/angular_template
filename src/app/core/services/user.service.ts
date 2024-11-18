import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = environment.API_NET_Backend + 'user';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    getUserById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    createUser(user: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, user);
    }

    updateUser(id: number, user: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, user);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }

    signIn(credentials: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/signIn`, credentials);
    }
}