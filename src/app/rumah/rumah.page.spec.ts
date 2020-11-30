import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RumahPage } from './rumah.page';

describe('RumahPage', () => {
  let component: RumahPage;
  let fixture: ComponentFixture<RumahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RumahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
