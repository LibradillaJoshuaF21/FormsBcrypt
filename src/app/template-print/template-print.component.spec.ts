import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePrintComponent } from './template-print.component';

describe('TemplatePrintComponent', () => {
  let component: TemplatePrintComponent;
  let fixture: ComponentFixture<TemplatePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
