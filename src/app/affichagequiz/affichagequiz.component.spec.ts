import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagequizComponent } from './affichagequiz.component';

describe('AffichagequizComponent', () => {
  let component: AffichagequizComponent;
  let fixture: ComponentFixture<AffichagequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichagequizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichagequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
