import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlipayMainComponent } from './alipay-main.component';

describe('AlipayMainComponent', () => {
  let component: AlipayMainComponent;
  let fixture: ComponentFixture<AlipayMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlipayMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlipayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
