import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoService } from './go-service.component';

describe('GoService', () => {
  let component: GoService;
  let fixture: ComponentFixture<GoService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoService ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
