import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CylinderItemComponent } from './cylinder-item.component';

describe('CylinderItemComponent', () => {
  let component: CylinderItemComponent;
  let fixture: ComponentFixture<CylinderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CylinderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
