import {Component, OnInit} from '@angular/core';
import Artist from './artist/artist';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  artists: [Artist];

  ngOnInit() {
    this.artists = [
      {name: 'Omer Adam', pictureUrl: 'https://i.scdn.co/image/8f3e48796b2e6a428563a6a333f79b0f2fc383d2'},
      {name: 'Eden Ben Zaken', pictureUrl: 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.0-8/14258229_1886242761599575_5759113442581614264_o.jpg?oh=60bd1d820250fc04c14fc1c63a0cbd1a&oe=5AD83887'},
      {name: 'Eyal Golan', pictureUrl: 'http://ashdodnet.com/dyncontent/Old/ashdodnet/dyncontent/t_post/2013/11/21/532005257708734602536.jpg'},
      {name: 'Moshe Peretz', pictureUrl: 'https://images1.calcalist.co.il/PicServer3/2017/06/24/736773/5_l.jpg'},
      {name: 'Tuna', pictureUrl: 'https://www.ynet.co.il/PicServer4/2015/07/13/6166956/7124364_7123466_rumble.jpg'}
    ];
  }
}

export default {
  path: '',
  component: MainComponent
};
