import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningReviewPage } from './morning-review.page';

describe('MorningReviewPage', () => {
  let component: MorningReviewPage;
  let fixture: ComponentFixture<MorningReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
