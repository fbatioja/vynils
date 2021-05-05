import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectorDetail } from './collectordetail';
import { environment } from '../../environments/environment';
import { CollectorAlbum } from './collectoralbum';
import { PerfomerDetail } from '../performer/performerdetail';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  private apiUrl: string = environment.baseUrl + '/collectors';

  constructor(private http: HttpClient) { }

  getCollectors(): Observable<CollectorDetail[]> {
    return this.http.get<CollectorDetail[]>(this.apiUrl);
  }

  getCollectorAlbums(id: number): Observable<CollectorAlbum[]> {
    return this.http.get<CollectorAlbum[]>(`${this.apiUrl}/${id}/albums`);
  }

  getCollectorPerformers(id: number): Observable<PerfomerDetail[]> {
    return this.http.get<PerfomerDetail[]>(`${this.apiUrl}/${id}/performers`);
  }
}
