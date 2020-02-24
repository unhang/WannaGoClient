import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneHundredComponent } from './one-hundred.component';

describe('OneHundredComponent', () => {
  let component: OneHundredComponent;
  let fixture: ComponentFixture<OneHundredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneHundredComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneHundredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
