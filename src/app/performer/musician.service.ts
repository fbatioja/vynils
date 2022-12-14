import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MusicianDetail} from './musiciandetail';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  private apiUrl = environment.baseUrl + '/musicians';

  constructor(private http: HttpClient) {}

  getMusicians(): Observable<MusicianDetail[]> {
    return this.http.get<MusicianDetail[]>(this.apiUrl);
  }

  getMusicianDetail(id: number): Observable<MusicianDetail> {
    return this.http.get<MusicianDetail>(`${this.apiUrl}/${id}`);
  }
}
