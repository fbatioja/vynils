import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumDetail } from './albumdetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl:string = environment.baseUrl + '/albums';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumDetail[]> {
    return this.http.get<AlbumDetail[]>(this.apiUrl);
  }

  getAlbumDetail(idAlbum: number): Observable<AlbumDetail> {
    return this.http.get<AlbumDetail>(`${this.apiUrl}/${idAlbum}`);
  }

}
