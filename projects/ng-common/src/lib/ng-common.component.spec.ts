import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCommonComponent } from './ng-common.component';

describe('NgCommonComponent', () => {
  let component: NgCommonComponent;
  let fixture: ComponentFixture<NgCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
