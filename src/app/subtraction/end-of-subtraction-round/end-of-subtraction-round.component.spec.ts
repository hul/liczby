import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfSubtractionRoundComponent } from './end-of-subtraction-round.component';

describe('EndOfSubtractionRoundComponent', () => {
  let component: EndOfSubtractionRoundComponent;
  let fixture: ComponentFixture<EndOfSubtractionRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfSubtractionRoundComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfSubtractionRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
