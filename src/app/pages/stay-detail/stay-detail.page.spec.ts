import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StayDetailPage } from './stay-detail.page';

describe('StayDetailPage', () => {
  let component: StayDetailPage;
  let fixture: ComponentFixture<StayDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StayDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
