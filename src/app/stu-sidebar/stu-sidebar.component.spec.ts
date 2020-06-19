import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuSidebarComponent } from './stu-sidebar.component';

describe('StuSidebarComponent', () => {
  let component: StuSidebarComponent;
  let fixture: ComponentFixture<StuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
