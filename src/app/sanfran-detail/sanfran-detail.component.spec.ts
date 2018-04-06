import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanfranDetailComponent } from './sanfran-detail.component';

describe('SanfranDetailComponent', () => {
  let component: SanfranDetailComponent;
  let fixture: ComponentFixture<SanfranDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanfranDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanfranDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
