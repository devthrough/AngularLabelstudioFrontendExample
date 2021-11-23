import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelstudioComponentComponent } from './labelstudio-component.component';

describe('LabelstudioComponentComponent', () => {
  let component: LabelstudioComponentComponent;
  let fixture: ComponentFixture<LabelstudioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelstudioComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelstudioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
