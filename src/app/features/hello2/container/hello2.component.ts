import { Component, OnInit } from '@angular/core';
import {Hello2Service} from '../hello2.service';

@Component({
  selector: 'app-hello2',
  templateUrl: './hello2.component.html',
  styleUrls: ['./hello2.component.scss']
})
export class Hello2Component implements OnInit {

  constructor(public hello2Service: Hello2Service) { }

  ngOnInit(): void {
  }

}
