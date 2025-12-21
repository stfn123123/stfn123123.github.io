import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barrierefreiheitserklaerung } from './barrierefreiheitserklaerung';

describe('Barrierefreiheitserklaerung', () => {
  let component: Barrierefreiheitserklaerung;
  let fixture: ComponentFixture<Barrierefreiheitserklaerung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barrierefreiheitserklaerung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barrierefreiheitserklaerung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
