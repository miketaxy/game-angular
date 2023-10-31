import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthGameComponent } from './fourth-game.component';

describe('FourthGameComponent', () => {
  let component: FourthGameComponent;
  let fixture: ComponentFixture<FourthGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthGameComponent]
    });
    fixture = TestBed.createComponent(FourthGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
