import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;
  constructor(private _spotify: SpotifyService) {
    this.loading = true;
  }


  buscarArtista(termino: string) {

    if (termino !== '') {
      this._spotify.getArtists(termino).subscribe(data => {
        this.artists = data;
        this.loading = false;
      });
    } else {
      console.log('no hay busquedas');
    }

  }

}
