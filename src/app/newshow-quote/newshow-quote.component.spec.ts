import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewshowQuoteComponent } from './newshow-quote.component';

describe('NewshowQuoteComponent', () => {
  let component: NewshowQuoteComponent;
  let fixture: ComponentFixture<NewshowQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewshowQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewshowQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
