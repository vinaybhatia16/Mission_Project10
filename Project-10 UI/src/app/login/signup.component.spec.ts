import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from './signup.component';
import { HttpServiceService } from '../http-service.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let httpService: jasmine.SpyObj<HttpServiceService>;

  beforeEach(async () => {
    httpService = jasmine.createSpyObj('HttpServiceService', ['post']);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: HttpServiceService, useValue: httpService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit signup when required fields are empty', () => {
    component.form.data = {};

    component.signUp();

    expect(httpService.post).not.toHaveBeenCalled();
    expect(component.form.error).toBeTrue();
    expect(component.form.message).toContain('Please fill');
  });
});
