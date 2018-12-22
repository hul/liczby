import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfRoundComponent } from './end-of-round.component';

describe('EndOfRoundComponent', () => {
  let component: EndOfRoundComponent;
  let fixture: ComponentFixture<EndOfRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
