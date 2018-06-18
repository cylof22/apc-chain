import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHChainComponent } from './chain.component';

describe('ChainComponent', () => {
  let component: CHChainComponent;
  let fixture: ComponentFixture<CHChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
