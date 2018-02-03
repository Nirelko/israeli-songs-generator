import {Component, Input} from '@angular/core';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class Song {
  @Input() generatedSong: boolean;
}

export default {
  component: Song
};
