import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentoGridComponent } from './momento-grid.component';

describe('MomentoGridComponent', () => {
  let component: MomentoGridComponent;
  let fixture: ComponentFixture<MomentoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomentoGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MomentoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
