import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGameComponent } from './third-game.component';

describe('ThirdGameComponent', () => {
  let component: ThirdGameComponent;
  let fixture: ComponentFixture<ThirdGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdGameComponent]
    });
    fixture = TestBed.createComponent(ThirdGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
