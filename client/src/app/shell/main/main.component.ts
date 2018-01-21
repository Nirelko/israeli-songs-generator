import {Component, OnInit} from '@angular/core';
import Artist from './artist/artist';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  artists: [Artist];

  constructor(private artistService: ArtistsService) {
  }

  ngOnInit() {
    this.artistService.get()
      .then((artists: [Artist]) => this.artists = artists);
  }

  selectArtist(artist) {
    return this.artistService.generateSong(artist)
      .then(result => {
        debugger;
      })
  }
}

export default {
  path: '',
  component: MainComponent
};
