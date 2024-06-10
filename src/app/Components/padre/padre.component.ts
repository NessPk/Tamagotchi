import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
toggleImageHandler($event: boolean) {
throw new Error('Method not implemented.');
}
  show = true;
  imageUrl = './assets/Agumon.gif';
  feedImage = './assets/AgumonEating.gif';
  happyImage = './assets/AgumonHappy.gif';
  trainingImage = './assets/AgumonTraining.gif';
  danceImage = './assets/AgumonDance.gif';
  loveImage = './assets/AgumonLove.gif';

  @ViewChild('reviveAudio')
  reviveAudioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('killAudio')
  killAudioRef!: ElementRef<HTMLAudioElement>;

  constructor() {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  showImage() {
    this.show = true;
    this.imageUrl = './assets/Agumon.gif';
    this.reviveAudioRef.nativeElement.play();
  }

  showFeed() {
    this.show = true;
    this.imageUrl = this.feedImage;
  }

  showHappy() {
    this.show = true;
    this.imageUrl = this.happyImage;
  }

  showTraining() {
    this.show = true;
    this.imageUrl = this.trainingImage;
  }

  showDance() {
    this.show = true;
    this.imageUrl = this.danceImage;
  }

  showLove() {
    this.show = true;
    this.imageUrl = this.loveImage;
  }

  hideImage() {
    this.show = false;
    this.killAudioRef.nativeElement.play();
  }
}
