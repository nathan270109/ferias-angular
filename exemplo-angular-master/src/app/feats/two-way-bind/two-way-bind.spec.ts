import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBind } from './two-way-bind';

describe('TwoWayBind', () => {
  let component: TwoWayBind;
  let fixture: ComponentFixture<TwoWayBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBind],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayBind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
