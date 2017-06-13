import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-full',
  templateUrl: 'modal-full.component.html',
  styleUrls: ['modal-full.component.scss']
})
export class ModalFullComponent implements OnInit {
  @Input() title: string;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    
  }

  hide() {
    this.close.emit(true);
  }
  
}