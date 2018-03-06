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
  selectedArtist: any;

  constructor(private artistService: ArtistsService) {
  }

  onArtistSelect (artist) {
    this.showLoading = true;
    this.generatedSong = null;
    this.selectedArtist = artist;

    return this.artistService.generateSong(artist)
      .then((words: string) => {
        words = words.split('~').join('<br />').split('¶').join('<br /><br />').split('№§').join('');
        this.showLoading = false;
        this.generatedSong = {
          artist,
          words
        }
      });
  }

  generateNew() {
    this.onArtistSelect(this.selectedArtist);
  }
}

export default  MainComponent;
