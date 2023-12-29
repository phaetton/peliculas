import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavideosComponent } from './listavideos.component';

describe('ListavideosComponent', () => {
  let component: ListavideosComponent;
  let fixture: ComponentFixture<ListavideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListavideosComponent]
    });
    fixture = TestBed.createComponent(ListavideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
