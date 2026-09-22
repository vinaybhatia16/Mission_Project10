import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksheetmeritlistComponent } from './marksheetmeritlist.component';

describe('MarksheetmeritlistComponent', () => {
  let component: MarksheetmeritlistComponent;
  let fixture: ComponentFixture<MarksheetmeritlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksheetmeritlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksheetmeritlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
