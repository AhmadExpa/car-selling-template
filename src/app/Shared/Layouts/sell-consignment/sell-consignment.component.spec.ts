import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellConsignmentComponent } from './sell-consignment.component';

describe('SellConsignmentComponent', () => {
  let component: SellConsignmentComponent;
  let fixture: ComponentFixture<SellConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellConsignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
