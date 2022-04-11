import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEmployeeModalComponent } from './remove-employee-modal.component';

describe('RemoveEmployeeModalComponent', () => {
  let component: RemoveEmployeeModalComponent;
  let fixture: ComponentFixture<RemoveEmployeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveEmployeeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
