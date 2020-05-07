import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  uri: any= '';
  uriArr: any []= [];

  constructor(private activateRoute: ActivatedRoute, private _spotify: SpotifyService) {
    this.loading = true;
    this.activateRoute.params.subscribe(data => {
      this.getArtist(data['id']);
      this.getTopTracks(data['id']);
    })
  }

  getArtist(id: string) {
    this._spotify.getArtist(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    })
  }

  getTopTracks(id: string) {
    this._spotify.getTopTracks(id).subscribe(data => {
      this.topTracks = data;

      for (const iterator of data) {
        this.uri = iterator.uri;
        this.uri = this.uri.substring(14);
        this.uriArr.push(this.uri)
      }
    })
  }

}
