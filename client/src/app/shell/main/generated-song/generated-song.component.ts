import {Component, Input} from '@angular/core';

@Component({
  selector: 'generated-song',
  templateUrl: './generated-song.component.html',
  styleUrls: ['./generated-song.component.scss']
})
export class GeneratedSong {
  @Input() showLoading: boolean;
  @Input() generatedSong: boolean;
}

export default {
  component: GeneratedSong
};
