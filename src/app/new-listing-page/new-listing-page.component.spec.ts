import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListingPageComponent } from './new-listing-page.component';

describe('NewListingPageComponent', () => {
  let component: NewListingPageComponent;
  let fixture: ComponentFixture<NewListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewListingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
