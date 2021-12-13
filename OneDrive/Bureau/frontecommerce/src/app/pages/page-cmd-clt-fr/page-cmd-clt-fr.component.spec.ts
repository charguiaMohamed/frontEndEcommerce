import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdCltFrComponent } from './page-cmd-clt-fr.component';

describe('PageCmdCltFrComponent', () => {
  let component: PageCmdCltFrComponent;
  let fixture: ComponentFixture<PageCmdCltFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCmdCltFrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCmdCltFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
