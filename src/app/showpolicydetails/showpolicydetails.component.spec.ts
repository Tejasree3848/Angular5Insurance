import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpolicydetailsComponent } from './showpolicydetails.component';

describe('ShowpolicydetailsComponent', () => {
  let component: ShowpolicydetailsComponent;
  let fixture: ComponentFixture<ShowpolicydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpolicydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpolicydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
