import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatecommandComponent } from './validatecommand.component';

describe('ValidatecommandComponent', () => {
  let component: ValidatecommandComponent;
  let fixture: ComponentFixture<ValidatecommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatecommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
