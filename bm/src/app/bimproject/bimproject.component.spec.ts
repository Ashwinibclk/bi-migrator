import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimprojectComponent } from './bimproject.component';

describe('BimprojectComponent', () => {
  let component: BimprojectComponent;
  let fixture: ComponentFixture<BimprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BimprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
