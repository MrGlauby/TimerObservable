import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ExampleData,
  RequestSimulatorService,
} from '@timer-obs./request-simulator-data-access';
import { Observable, tap, pipe, of } from 'rxjs';

@Component({
  selector: 'lib-request-simulator',
  imports: [CommonModule, RouterModule],
  templateUrl: './request-simulator.component.html',
  styleUrl: './request-simulator.component.css',
})
export class RequestSimulatorComponent {


  public dataService = inject(RequestSimulatorService);
  public data$ = this.dataService.getAll();  
}
