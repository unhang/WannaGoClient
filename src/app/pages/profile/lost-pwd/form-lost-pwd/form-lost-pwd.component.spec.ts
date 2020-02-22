import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormLostPwdComponent } from './form-lost-pwd.component';

describe('FormLostPwdComponent', () => {
  let component: FormLostPwdComponent;
  let fixture: ComponentFixture<FormLostPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLostPwdComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormLostPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
