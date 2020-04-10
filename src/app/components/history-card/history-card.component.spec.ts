import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoHistoryCard } from './history-card.component';

describe('HistoryCardComponent', () => {
  let component: GoHistoryCard;
  let fixture: ComponentFixture<GoHistoryCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHistoryCard ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoHistoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
