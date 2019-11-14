import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqamfrComponent } from './reqamfr.component';

describe('ReqamfrComponent', () => {
  let component: ReqamfrComponent;
  let fixture: ComponentFixture<ReqamfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqamfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqamfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
