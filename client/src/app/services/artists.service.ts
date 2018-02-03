import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import Artist from '../shell/main/artist-selector/artist/artist';

@Injectable()
export class ArtistsService {
  baseRoute: string = '/api/artists';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(`${this.baseRoute}`).toPromise();
  }

  generateSong({name}) {
    const params = new HttpParams().set('artistName', name);

    return this.httpClient.get(`${this.baseRoute}/generateSong`, { params }).toPromise();
  }
}


