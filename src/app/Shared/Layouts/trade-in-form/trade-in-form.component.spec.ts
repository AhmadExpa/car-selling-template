import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeInFormComponent } from './trade-in-form.component';

describe('TradeInFormComponent', () => {
  let component: TradeInFormComponent;
  let fixture: ComponentFixture<TradeInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradeInFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
