import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostDetailsComponent } from './show-post-details.component';

describe('ShowPostDetailsComponent', () => {
  let component: ShowPostDetailsComponent;
  let fixture: ComponentFixture<ShowPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPostDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
