import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcep } from './formcep';

describe('Formcep', () => {
  let component: Formcep;
  let fixture: ComponentFixture<Formcep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formcep],
    }).compileComponents();

    fixture = TestBed.createComponent(Formcep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
