import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoformacionComponent } from './infoformacion.component';

describe('InfoformacionComponent', () => {
  let component: InfoformacionComponent;
  let fixture: ComponentFixture<InfoformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
