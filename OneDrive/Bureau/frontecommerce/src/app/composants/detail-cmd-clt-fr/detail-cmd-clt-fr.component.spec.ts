import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdCltFrComponent } from './detail-cmd-clt-fr.component';

describe('DetailCmdCltFrComponent', () => {
  let component: DetailCmdCltFrComponent;
  let fixture: ComponentFixture<DetailCmdCltFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdCltFrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCmdCltFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
