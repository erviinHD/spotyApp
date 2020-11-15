import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpCliente: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDhg-JaH1tWZbq-dh9RKdw0l9Jnh3FGJZtFjHCz2PJ8VXs5_UKX-LeWsYbnnt0COyzp5nhCY_btLbCr588'
    });

    return this.httpCliente.get(url, { headers });
  }


  getNewRelases() {
    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  getArtist(idArtist: any) {
    return this.getQuery(`artists/${idArtist}`);
  }

  getTopTracks(idArtist: any) {
    return this.getQuery(`artists/${idArtist}/top-tracks?country=Es`)
    .pipe(map(data=>{
      return data['tracks']
    }))
  }
}
