import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReactiveFormComponent } from './app-reactive-form.component';

describe('AppReactiveFormComponent', () => {
  let component: AppReactiveFormComponent;
  let fixture: ComponentFixture<AppReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
