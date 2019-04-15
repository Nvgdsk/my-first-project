import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemsNewsRightComponent } from './content-items-news-right.component';

describe('ContentItemsNewsRightComponent', () => {
  let component: ContentItemsNewsRightComponent;
  let fixture: ComponentFixture<ContentItemsNewsRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentItemsNewsRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemsNewsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
