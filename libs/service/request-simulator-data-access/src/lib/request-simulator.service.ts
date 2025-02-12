import { Injectable } from '@angular/core';
import { ExampleData } from './request-simulator.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestSimulatorService {
  // public data$$ = new BehaviorSubject<ExampleData[]>([]);

  // Daten !
  public exampledata: ExampleData[] = [
    { id: 1, name: 'Thomas', lastname: 'Die kleine Lok' },
    { id: 2, name: 'Peter', lastname: 'Pan' },
    { id: 3, name: 'Kakadu', lastname: 'Der kleine' },
    { id: 4, name: 'Susi', lastname: 'Neustadt' },
    { id: 5, name: 'Marion', lastname: 'Glauby' },
    { id: 6, name: 'Rmoan', lastname: 'MakeSomeThings' },
  ];

  //   constructor() {
  //     this.data$$.next(this.exampledata);
  //   }

  // Tobi frgaen was Sinnvoller ist!
  public data$$ = new BehaviorSubject<ExampleData[]>(this.exampledata);

  // GetAll Methode! !
  public getAll(): Observable<ExampleData[]> {
    return this.data$$.asObservable();
  }
}

// 1. brauch ich unbedingt den Constructor?
// 2. ist die getALl methode richtig?
