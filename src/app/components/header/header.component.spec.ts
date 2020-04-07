import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoHeader } from './header.component';

describe('GoHeader', () => {
  let component: GoHeader;
  let fixture: ComponentFixture<GoHeader>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHeader ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
