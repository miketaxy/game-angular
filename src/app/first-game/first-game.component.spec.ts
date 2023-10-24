import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGameComponent } from './first-game.component';

describe('FirstGameComponent', () => {
  let component: FirstGameComponent;
  let fixture: ComponentFixture<FirstGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstGameComponent]
    });
    fixture = TestBed.createComponent(FirstGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
