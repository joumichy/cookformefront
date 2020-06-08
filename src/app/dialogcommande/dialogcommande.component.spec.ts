import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcommandeComponent } from './dialogcommande.component';

describe('DialogcommandeComponent', () => {
  let component: DialogcommandeComponent;
  let fixture: ComponentFixture<DialogcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
