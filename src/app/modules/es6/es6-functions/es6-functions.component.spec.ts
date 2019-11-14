import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es6FunctionsComponent } from './es6-functions.component';

describe('Es6FunctionsComponent', () => {
  let component: Es6FunctionsComponent;
  let fixture: ComponentFixture<Es6FunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es6FunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6FunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
