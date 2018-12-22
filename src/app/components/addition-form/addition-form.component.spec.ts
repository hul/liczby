import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionFormComponent } from './operation-form.component';

describe('AdditionFormComponent', () => {
  let component: AdditionFormComponent;
  let fixture: ComponentFixture<AdditionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
