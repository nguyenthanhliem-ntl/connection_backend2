import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {District} from '../district';
const API_URL = `${environment.apiUrl}` ;

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<District[]> {
    return this.http.get<District[]> (API_URL + '/showAll');
  }

  save(district): Observable<District> {
    return this.http.post<District>(API_URL + 'districts/create', district);
  }

  findById(id: number):Observable<District> {
    return this.http.get<District>(`${API_URL}/districts/${id}`);
  }

  update(id: number, district: District): Observable<District>{
    return this.http.put<District>(`${API_URL}/districts/${id}`,district);
  }

  delete(id: number): Observable<District>{
    return this.http.delete(`${API_URL}/districts/${id}`);
  }

}
