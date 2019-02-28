import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarComponent } from './incrementar.component';

describe('IncrementarComponent', () => {
  let component: IncrementarComponent;
  let fixture: ComponentFixture<IncrementarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
