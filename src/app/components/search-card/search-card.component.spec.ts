import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoSearchCard } from './search-card.component';

describe('SearchCardComponent', () => {
  let component: GoSearchCard;
  let fixture: ComponentFixture<GoSearchCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoSearchCard ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoSearchCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
