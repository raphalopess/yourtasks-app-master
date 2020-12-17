import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FazerPage } from './fazer.page';

describe('FazerPage', () => {
  let component: FazerPage;
  let fixture: ComponentFixture<FazerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FazerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
