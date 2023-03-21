import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEngineerComponent } from './del-engineer.component';

describe('DelEngineerComponent', () => {
  let component: DelEngineerComponent;
  let fixture: ComponentFixture<DelEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
