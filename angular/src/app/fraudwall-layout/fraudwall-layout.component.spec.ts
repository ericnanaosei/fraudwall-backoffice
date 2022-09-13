import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudwallLayoutComponent } from './fraudwall-layout.component';

describe('FraudwallLayoutComponent', () => {
  let component: FraudwallLayoutComponent;
  let fixture: ComponentFixture<FraudwallLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudwallLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudwallLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
