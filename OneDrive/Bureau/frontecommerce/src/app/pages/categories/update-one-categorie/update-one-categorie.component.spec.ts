import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneCategorieComponent } from './update-one-categorie.component';

describe('UpdateOneCategorieComponent', () => {
  let component: UpdateOneCategorieComponent;
  let fixture: ComponentFixture<UpdateOneCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOneCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOneCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
