import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodisenoComponent } from './infodiseno.component';

describe('InfodisenoComponent', () => {
  let component: InfodisenoComponent;
  let fixture: ComponentFixture<InfodisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodisenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfodisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
