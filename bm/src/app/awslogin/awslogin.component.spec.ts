import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsloginComponent } from './awslogin.component';

describe('AwsloginComponent', () => {
  let component: AwsloginComponent;
  let fixture: ComponentFixture<AwsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
