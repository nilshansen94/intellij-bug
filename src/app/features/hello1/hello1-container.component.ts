import { Component, OnInit } from '@angular/core';
import {Hello1Service} from './hello1.service';

@Component({
  selector: 'app-hello1-container',
  template: `
    <app-hello
      [title]="hello1Service.abc$ | async"
      [title2]="hello1Service.abc | async"
    ></app-hello>
  `,
  styles: [
  ]
})
export class Hello1ContainerComponent implements OnInit {

  constructor(public hello1Service: Hello1Service) { }

  ngOnInit(): void {
  }

}
