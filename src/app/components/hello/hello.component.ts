import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() title = '';
  @Input() title2 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
