import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GowithDetailsComponent } from './gowith-details.component';

describe('GowithDetailsComponent', () => {
  let component: GowithDetailsComponent;
  let fixture: ComponentFixture<GowithDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GowithDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GowithDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
