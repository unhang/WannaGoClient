import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostCardComponent } from './host-card.component';

describe('HostCardComponent', () => {
  let component: HostCardComponent;
  let fixture: ComponentFixture<HostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
