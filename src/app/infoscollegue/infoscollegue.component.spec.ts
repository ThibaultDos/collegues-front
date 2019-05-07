import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoscollegueComponent } from './infoscollegue.component';

describe('InfoscollegueComponent', () => {
  let component: InfoscollegueComponent;
  let fixture: ComponentFixture<InfoscollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoscollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoscollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
