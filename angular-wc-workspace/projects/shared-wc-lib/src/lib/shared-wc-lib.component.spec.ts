import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWcLibComponent } from './shared-wc-lib.component';

describe('SharedWcLibComponent', () => {
  let component: SharedWcLibComponent;
  let fixture: ComponentFixture<SharedWcLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedWcLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedWcLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
