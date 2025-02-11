import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestSimulatorComponent } from './request-simulator.component';

describe('RequestSimulatorComponent', () => {
  let component: RequestSimulatorComponent;
  let fixture: ComponentFixture<RequestSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestSimulatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
