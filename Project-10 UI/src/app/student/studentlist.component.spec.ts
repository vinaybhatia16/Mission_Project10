import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttlistComponent } from './studentlist.component';

describe('StudenttlistComponent', () => {
  let component: StudenttlistComponent;
  let fixture: ComponentFixture<StudenttlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenttlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
