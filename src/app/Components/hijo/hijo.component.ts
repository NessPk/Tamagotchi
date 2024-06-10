import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() show: boolean | undefined; 
  @Input() imageUrl: string | undefined;

  @Output() toggleImage = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  toggleVisibility() {
    this.show = !this.show;
    this.toggleImage.emit(this.show);
  }
}