import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Works!</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}