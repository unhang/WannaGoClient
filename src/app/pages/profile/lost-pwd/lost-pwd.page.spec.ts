import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LostPwdPage } from './lost-pwd.page';

describe('LostPwdPage', () => {
  let component: LostPwdPage;
  let fixture: ComponentFixture<LostPwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPwdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LostPwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
