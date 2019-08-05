import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressorasComponent } from './impressoras.component';

describe('ImpressorasComponent', () => {
  let component: ImpressorasComponent;
  let fixture: ComponentFixture<ImpressorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
