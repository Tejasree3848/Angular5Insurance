import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbranchComponent } from './searchbranch.component';

describe('SearchbranchComponent', () => {
  let component: SearchbranchComponent;
  let fixture: ComponentFixture<SearchbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
