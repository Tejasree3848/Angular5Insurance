import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbranchComponent } from './showbranch.component';

describe('ShowbranchComponent', () => {
  let component: ShowbranchComponent;
  let fixture: ComponentFixture<ShowbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
