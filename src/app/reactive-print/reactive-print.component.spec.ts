import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePrintComponent } from './reactive-print.component';

describe('ReactivePrintComponent', () => {
  let component: ReactivePrintComponent;
  let fixture: ComponentFixture<ReactivePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
