import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenjataPage } from './senjata.page';

describe('SenjataPage', () => {
  let component: SenjataPage;
  let fixture: ComponentFixture<SenjataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenjataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenjataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
