import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BandDetail } from './banddetail';
import { BandService } from './band.service';
import { MusicianService } from './musician.service';
import { MusicianDetail } from './musiciandetail';

@Injectable({
  providedIn: 'root'
})

export class PerformerService {

  constructor(private http: HttpClient) {}

  getMusicians(): Observable<MusicianDetail[]> {
    let service: MusicianService = new MusicianService(this.http);
    return service.getMusicians();
  }

  getBands(): Observable<BandDetail[]> {
    let service: BandService = new BandService(this.http);
    return service.getBands();
  }
}
