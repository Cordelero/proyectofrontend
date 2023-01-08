import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprogramaComponent } from './infoprograma.component';

describe('InfoprogramaComponent', () => {
  let component: InfoprogramaComponent;
  let fixture: ComponentFixture<InfoprogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoprogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoprogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
