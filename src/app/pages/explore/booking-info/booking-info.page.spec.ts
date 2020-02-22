import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingInfoPage } from './booking-info.page';

describe('BookingInfoPage', () => {
  let component: BookingInfoPage;
  let fixture: ComponentFixture<BookingInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
