import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutGowithComponent } from './put-gowith.component';

describe('PutGowithComponent', () => {
  let component: PutGowithComponent;
  let fixture: ComponentFixture<PutGowithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutGowithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutGowithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
