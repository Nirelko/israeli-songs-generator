import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import Artist from './artist/artist';
import {ArtistsService} from '../../../services/artists.service';

@Component({
  selector: 'artist-selector',
  templateUrl: './artist-selector.component.html',
  styleUrls: ['./artist-selector.component.scss']
})
export class ArtistSelector implements OnInit {
  artists: [Artist];
  @Output() onSelect: EventEmitter<Artist>;

  constructor(private artistService: ArtistsService) {
    this.onSelect = new EventEmitter<Artist>();
  }

  ngOnInit() {
    this.artistService.get()
      .then((artists: [Artist]) => this.artists = artists);
  }

  selectArtist(artist) {
    this.onSelect.emit(artist);
  }
}

export default {
  component: ArtistSelector
};
