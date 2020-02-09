import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoTab } from './tab.component';

describe('TabComponent', () => {
  let component: GoTab;
  let fixture: ComponentFixture<GoTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTab ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
