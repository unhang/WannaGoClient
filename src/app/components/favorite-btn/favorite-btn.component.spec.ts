import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoFavoriteBtn } from './favorite-btn.component';

describe('FavoriteBtnComponent', () => {
  let component: GoFavoriteBtn;
  let fixture: ComponentFixture<GoFavoriteBtn>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFavoriteBtn ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoFavoriteBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
