import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { DetailOneArticleComponent } from './nouvel-article.component';

describe('NouvelArticleComponent', () => {
  let component: DetailOneArticleComponent;
  let fixture: ComponentFixture<DetailOneArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOneArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOneArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
