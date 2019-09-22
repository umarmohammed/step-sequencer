import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSequenceComponent } from './channel-sequence.component';

describe('ChannelSequenceComponent', () => {
  let component: ChannelSequenceComponent;
  let fixture: ComponentFixture<ChannelSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
