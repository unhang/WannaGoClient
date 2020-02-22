import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroAppComponent } from './intro-app.component';

describe('IntroAppComponent', () => {
  let component: IntroAppComponent;
  let fixture: ComponentFixture<IntroAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAppComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
