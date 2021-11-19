import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnvalidatedComponent } from './list-unvalidated.component';

describe('ListUnvalidatedComponent', () => {
  let component: ListUnvalidatedComponent;
  let fixture: ComponentFixture<ListUnvalidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUnvalidatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnvalidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
