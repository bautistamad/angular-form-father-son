import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsListComponent } from './urls-list.component';

describe('UrlsListComponent', () => {
  let component: UrlsListComponent;
  let fixture: ComponentFixture<UrlsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlsListComponent]
    });
    fixture = TestBed.createComponent(UrlsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
