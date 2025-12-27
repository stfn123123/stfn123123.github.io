import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGame } from './about-game';

describe('AboutGame', () => {
  let component: AboutGame;
  let fixture: ComponentFixture<AboutGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
