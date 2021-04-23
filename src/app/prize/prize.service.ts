import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PrizeDetail} from './prizedetail';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {
  private apiUrl = environment.baseUrl + '/prizes';

  constructor(private http: HttpClient) {}

  getPrizes(): Observable<PrizeDetail[]> {
    return this.http.get<PrizeDetail[]>(this.apiUrl);
  }
}
