import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ExampleData,
  RequestSimulatorService,
} from '@timer-obs./request-simulator-data-access';
import { Observable, of, catchError, delay, finalize } from 'rxjs';

@Component({
  selector: 'lib-request-simulator',
  imports: [CommonModule, RouterModule],
  templateUrl: './request-simulator.component.html',
  styleUrl: './request-simulator.component.css',
})
export class RequestSimulatorComponent implements OnInit {
  private dataService = inject(RequestSimulatorService);

  public data$: Observable<ExampleData[]> = of([]);
  public errorMessage: string = '';

  ngOnInit() {
    this.loadData();
  }

  public isLoading = false;

  loadData() {
    this.isLoading = true;
    this.data$ = this.dataService.getAll().pipe(
      delay(2000),
      finalize(() => (this.isLoading = false)), 
      catchError((error) => {
        console.error('Fehler:', error);
        this.errorMessage = 'Fehler beim Laden!';
        return of([]);
      })
    );
  }
}



// Styling
// Pagination