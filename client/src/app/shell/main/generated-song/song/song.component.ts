import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class Song implements OnInit {
  sentences: string[];
  isShowedSentences: boolean[];
  @Input() generatedSong: any;
  @Output() generateNew: EventEmitter<void>;

  constructor() {
    this.generateNew = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.sentences = this.generatedSong.words.split('\n');
    this.isShowedSentences = new Array(this.sentences.length);
    this.isShowedSentences[0] = true;
  }

  showNext(currentIndex) {
    this.isShowedSentences[++currentIndex] = true;
  }

  onGenerateNew() {
    this.generateNew.emit();
  }
}

export default {
  component: Song
};
