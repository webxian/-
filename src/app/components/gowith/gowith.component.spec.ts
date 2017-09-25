import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GowithComponent } from './gowith.component';

describe('GowithComponent', () => {
  let component: GowithComponent;
  let fixture: ComponentFixture<GowithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GowithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GowithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
