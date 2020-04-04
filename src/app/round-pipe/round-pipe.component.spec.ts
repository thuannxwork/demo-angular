import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundPipeComponent } from './round-pipe.component';

describe('RoundPipeComponent', () => {
  let component: RoundPipeComponent;
  let fixture: ComponentFixture<RoundPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
