import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsRegisteredComponent } from './is-registered.component';

describe('IsRegisteredComponent', () => {
  let component: IsRegisteredComponent;
  let fixture: ComponentFixture<IsRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
