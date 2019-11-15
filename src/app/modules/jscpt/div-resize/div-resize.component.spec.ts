import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivResizeComponent } from './div-resize.component';

describe('DivResizeComponent', () => {
  let component: DivResizeComponent;
  let fixture: ComponentFixture<DivResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
