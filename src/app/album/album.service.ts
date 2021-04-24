import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl:string = environment.baseUrl + '/albums';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

}
