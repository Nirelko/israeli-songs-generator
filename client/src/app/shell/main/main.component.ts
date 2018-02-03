import {Component, EventEmitter} from '@angular/core';
import {ArtistsService} from '../../services/artists.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showLoading: boolean;
  generatedSong: any;

  constructor(private artistService: ArtistsService) {
  }

  onArtistSelect (artist) {
    this.showLoading = true;
    this.generatedSong = null;

    return this.artistService.generateSong(artist)
      .then(words => {
        debugger;
        words = words.split('\n').join('<br />');
        this.showLoading = false;
        this.generatedSong = {
          artist,
          words
        }
      });
  }
}

export default  MainComponent;
