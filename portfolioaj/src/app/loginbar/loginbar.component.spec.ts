import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbarComponent } from './loginbar.component';

describe('LoginbarComponent', () => {
  let component: LoginbarComponent;
  let fixture: ComponentFixture<LoginbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
