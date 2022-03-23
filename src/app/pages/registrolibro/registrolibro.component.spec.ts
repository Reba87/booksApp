import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrolibroComponent } from './registrolibro.component';

describe('RegistrolibroComponent', () => {
  let component: RegistrolibroComponent;
  let fixture: ComponentFixture<RegistrolibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrolibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
