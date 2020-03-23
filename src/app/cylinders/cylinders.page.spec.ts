import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CylindersPage } from './cylinders.page';

describe('CylindersPage', () => {
  let component: CylindersPage;
  let fixture: ComponentFixture<CylindersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylindersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CylindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
