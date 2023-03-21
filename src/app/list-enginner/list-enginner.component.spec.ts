import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnginnerComponent } from './list-enginner.component';

describe('ListEnginnerComponent', () => {
  let component: ListEnginnerComponent;
  let fixture: ComponentFixture<ListEnginnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnginnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
