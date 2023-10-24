import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGameComponent } from './second-game.component';

describe('SecondGameComponent', () => {
  let component: SecondGameComponent;
  let fixture: ComponentFixture<SecondGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondGameComponent]
    });
    fixture = TestBed.createComponent(SecondGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
