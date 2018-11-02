import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclecomponentComponent } from './lifecyclecomponent.component';

describe('LifecyclecomponentComponent', () => {
  let component: LifecyclecomponentComponent;
  let fixture: ComponentFixture<LifecyclecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyclecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
