import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StayCardComponent } from './stay-card.component';

describe('StayCardComponent', () => {
  let component: StayCardComponent;
  let fixture: ComponentFixture<StayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
