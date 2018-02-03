import {Component, OnInit} from '@angular/core';
import * as SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'wave-loading',
  templateUrl: './wave-loading.component.html',
  styleUrls: ['./wave-loading.component.scss']
})
export class WaveLoading implements OnInit{
  ngOnInit() {
    new SmoothScroll().animateScroll(document.querySelector('.loading-container'), null, {
      easing: 'easeInOutQuart',
      speed: 2000
    });
  }
}

export default {
  component: WaveLoading
};
