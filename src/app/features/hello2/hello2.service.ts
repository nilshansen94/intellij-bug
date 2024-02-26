import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Hello2Service {

  abcTwo$ = of('abc');

  constructor() { }
}
