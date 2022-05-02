import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplecheckboxComponent } from './multiplecheckbox.component';

describe('MultiplecheckboxComponent', () => {
  let component: MultiplecheckboxComponent;
  let fixture: ComponentFixture<MultiplecheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplecheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplecheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
