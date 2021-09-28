import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCarouselComponent } from './upcoming-carousel.component';

describe('UpcomingCarouselComponent', () => {
  let component: UpcomingCarouselComponent;
  let fixture: ComponentFixture<UpcomingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
