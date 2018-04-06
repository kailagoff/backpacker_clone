import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoradoDetailComponent } from './colorado-detail.component';

describe('ColoradoDetailComponent', () => {
  let component: ColoradoDetailComponent;
  let fixture: ComponentFixture<ColoradoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoradoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoradoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
