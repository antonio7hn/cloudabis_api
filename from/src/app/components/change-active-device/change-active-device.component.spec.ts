import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeActiveDeviceComponent } from './change-active-device.component';

describe('ChangeActiveDeviceComponent', () => {
  let component: ChangeActiveDeviceComponent;
  let fixture: ComponentFixture<ChangeActiveDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeActiveDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeActiveDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
