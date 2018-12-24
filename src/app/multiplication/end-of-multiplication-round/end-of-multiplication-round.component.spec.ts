import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfMultiplicationRoundComponent } from './end-of-multiplication-round.component';

describe('EndOfMultiplicationRoundComponent', () => {
  let component: EndOfMultiplicationRoundComponent;
  let fixture: ComponentFixture<EndOfMultiplicationRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfMultiplicationRoundComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfMultiplicationRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
