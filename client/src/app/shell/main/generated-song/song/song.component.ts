import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class Song {
  @Input() generatedSong: boolean;
  @Output() generateNew: EventEmitter<void>;

  constructor() {
    this.generateNew = new EventEmitter<void>();
  }

  onGenerateNew() {
    this.generateNew.emit();
  }
}

export default {
  component: Song
};
