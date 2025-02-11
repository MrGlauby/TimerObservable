import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map, take } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-timer',
  imports: [CommonModule, RouterModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {


timerValue: number [] = [];

ngOnInit() {
  interval(1000)
  .pipe(
    take(10),
    map((value) => value + 1)
  )
  .subscribe({
    next: (value) => {
      this.timerValue.push(value);
    }, 
    complete: () => {
      console.log('Timer Fertsch!')
    },
  });
}


}
