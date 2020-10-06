import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteInRouteComponent } from './route-in-route.component';

describe('RouteInRouteComponent', () => {
  let component: RouteInRouteComponent;
  let fixture: ComponentFixture<RouteInRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteInRouteComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteInRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
