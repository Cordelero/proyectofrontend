import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterportfolioComponent } from './footerportfolio.component';

describe('FooterportfolioComponent', () => {
  let component: FooterportfolioComponent;
  let fixture: ComponentFixture<FooterportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterportfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
