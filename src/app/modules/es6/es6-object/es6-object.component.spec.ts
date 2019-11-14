import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es6ObjectComponent } from './es6-object.component';

describe('Es6ObjectComponent', () => {
  let component: Es6ObjectComponent;
  let fixture: ComponentFixture<Es6ObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es6ObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6ObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
