import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFormWrapperComponent } from './img-form-wrapper.component';

describe('ImgFormWrapperComponent', () => {
  let component: ImgFormWrapperComponent;
  let fixture: ComponentFixture<ImgFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgFormWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImgFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
