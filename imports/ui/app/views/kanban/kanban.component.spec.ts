import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kanban } from './kanban.component';

describe('Kanban', () => {
  let component: Kanban;
  let fixture: ComponentFixture<Kanban>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kanban ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kanban);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
