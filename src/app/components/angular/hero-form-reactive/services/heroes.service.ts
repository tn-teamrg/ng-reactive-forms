import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/internal/operators/delay';
const ALTER_EGOS = ['Eric'];

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  isAlterEgoTaken(alterEgo: string): Observable<boolean>{
    const isTaken = ALTER_EGOS.includes(alterEgo);
    return of(isTaken).pipe(delay(400));
  }
}
