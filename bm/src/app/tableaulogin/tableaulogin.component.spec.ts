import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauloginComponent } from './tableaulogin.component';

describe('TableauloginComponent', () => {
  let component: TableauloginComponent;
  let fixture: ComponentFixture<TableauloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
