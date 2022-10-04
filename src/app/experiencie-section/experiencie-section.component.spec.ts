import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencieSectionComponent } from './experiencie-section.component';

describe('ExperiencieSectionComponent', () => {
  let component: ExperiencieSectionComponent;
  let fixture: ComponentFixture<ExperiencieSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencieSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
