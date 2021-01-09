import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavModeMenuComponent } from './sidenav-mode-menu.component';

describe('SidenavModeMenuComponent', () => {
  let component: SidenavModeMenuComponent;
  let fixture: ComponentFixture<SidenavModeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavModeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavModeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
