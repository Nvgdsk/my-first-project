import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemsNewsComponent } from './content-items-news.component';

describe('ContentItemsNewsComponent', () => {
  let component: ContentItemsNewsComponent;
  let fixture: ComponentFixture<ContentItemsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentItemsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
