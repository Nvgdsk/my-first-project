import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalAutorizationComponent } from './app-modal-autorization.component';

describe('AppModalAutorizationComponent', () => {
  let component: AppModalAutorizationComponent;
  let fixture: ComponentFixture<AppModalAutorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModalAutorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModalAutorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
