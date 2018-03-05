import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'generated-song',
  templateUrl: './generated-song.component.html',
  styleUrls: ['./generated-song.component.scss']
})
export class GeneratedSong {
  @Input() showLoading: boolean;
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
  component: GeneratedSong
};
