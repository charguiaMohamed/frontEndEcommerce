import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtstckComponent } from './mvtstck.component';

describe('MvtstckComponent', () => {
  let component: MvtstckComponent;
  let fixture: ComponentFixture<MvtstckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtstckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtstckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
