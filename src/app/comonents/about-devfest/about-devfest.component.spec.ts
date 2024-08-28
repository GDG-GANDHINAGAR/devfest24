import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevfestComponent } from './about-devfest.component';

describe('AboutDevfestComponent', () => {
  let component: AboutDevfestComponent;
  let fixture: ComponentFixture<AboutDevfestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDevfestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDevfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
