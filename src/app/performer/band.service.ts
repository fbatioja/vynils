import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BandDetail} from './banddetail';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  private apiUrl = environment.baseUrl + '/bands';

  constructor(private http: HttpClient) {}

  getBands(): Observable<BandDetail[]> {
    return this.http.get<BandDetail[]>(this.apiUrl);
  }

  getBandDetail(id: number): Observable<BandDetail> {
    return this.http.get<BandDetail>(`${this.apiUrl}/${id}`);
  }
}
