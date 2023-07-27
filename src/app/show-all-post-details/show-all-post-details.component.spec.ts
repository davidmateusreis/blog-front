import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPostDetailsComponent } from './show-all-post-details.component';

describe('ShowAllPostDetailsComponent', () => {
  let component: ShowAllPostDetailsComponent;
  let fixture: ComponentFixture<ShowAllPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPostDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
