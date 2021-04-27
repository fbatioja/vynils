import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectorDetail } from './collectordetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  private apiUrl: string = environment.baseUrl + '/collectors';

  constructor(private http: HttpClient) { }

  getCollectors(): Observable<CollectorDetail[]> {
    return this.http.get<CollectorDetail[]>(this.apiUrl);
  }

}
