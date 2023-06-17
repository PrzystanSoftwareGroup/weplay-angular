import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFundComponent } from './page-not-fund.component';

describe('PageNotFundComponent', () => {
  let component: PageNotFundComponent;
  let fixture: ComponentFixture<PageNotFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFundComponent]
    });
    fixture = TestBed.createComponent(PageNotFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
