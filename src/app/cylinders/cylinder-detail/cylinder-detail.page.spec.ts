import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CylinderDetailPage } from './cylinder-detail.page';

describe('CylinderDetailPage', () => {
  let component: CylinderDetailPage;
  let fixture: ComponentFixture<CylinderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CylinderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
