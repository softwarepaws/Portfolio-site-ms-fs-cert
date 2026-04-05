import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adsense } from './adsense';

describe('Adsense', () => {
  let component: Adsense;
  let fixture: ComponentFixture<Adsense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adsense],
    }).compileComponents();

    fixture = TestBed.createComponent(Adsense);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
