import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandItemsComponent } from './brand-items.component';

describe('BrandItemsComponent', () => {
  let component: BrandItemsComponent;
  let fixture: ComponentFixture<BrandItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
