import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Hello1Service {

  abc$ = of('abc1');
  abc = of('abc2');

  constructor() { }
}
