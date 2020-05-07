import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newRelases: any[] = [];
  loading: boolean;
  error:boolean;
  errorCatch: string;

  constructor(private _spotifyServices: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.getNewRelases();
    
  }

  getNewRelases() {
    this._spotifyServices.getNewRelases().subscribe(data => {
      this.newRelases = data;
      this.loading = false;
    },(error)=>{
      this.error = true;
      this.loading = false;
      this.errorCatch = error.error.error.message;
    } )
  }

}
