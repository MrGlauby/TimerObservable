import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: '',
    redirectTo: 'timer',
    pathMatch: 'full',
  },

  {
    path: 'timer',
    loadComponent: () =>
      import('@timer-obs./timer').then((m) => m.TimerComponent),
  },

  {
    path: 'timercomponent',
    loadComponent: () =>
      import('@timer-obs./timer').then((m) => m.TimerComponent),
  },

  {
    path: 'request-simulator',
    loadComponent: () =>
      import('@timer-obs./request-simulator').then((m) => m.RequestSimulatorComponent),
  },
  

];

