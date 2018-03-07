import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class Sentence implements OnInit {
  @Input() sentence: string;
  @Output() onAnimationEnd: EventEmitter<void>;

  constructor() {
    this.onAnimationEnd = new EventEmitter<void>();
  }

  ngOnInit(): void {
    if(!this.sentence) {
      this.onAnimationEnd.emit();
    }
  }

}

export default {
  component: Sentence
};
