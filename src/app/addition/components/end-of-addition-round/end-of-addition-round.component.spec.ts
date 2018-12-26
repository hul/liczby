import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfAdditionRoundComponent } from './end-of-addition-round.component';

describe('EndOfAdditionRoundComponent', () => {
  let component: EndOfAdditionRoundComponent;
  let fixture: ComponentFixture<EndOfAdditionRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfAdditionRoundComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfAdditionRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
