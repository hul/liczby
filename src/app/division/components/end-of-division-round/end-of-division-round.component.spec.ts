import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfDivisionRoundComponent } from './end-of-division-round.component';

describe('EndOfDivisionRoundComponent', () => {
  let component: EndOfDivisionRoundComponent;
  let fixture: ComponentFixture<EndOfDivisionRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfDivisionRoundComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfDivisionRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
