import {Component, Input} from '@angular/core';
import Artist from './artist';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  @Input() artist: Artist;
}
