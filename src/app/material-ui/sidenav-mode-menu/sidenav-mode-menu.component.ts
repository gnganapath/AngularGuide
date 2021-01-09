import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-sidenav-mode-menu',
  templateUrl: './sidenav-mode-menu.component.html',
  styleUrls: ['./sidenav-mode-menu.component.less']
})
export class SidenavModeMenuComponent implements OnInit {

  mode = new FormControl('over');
  shouldRun = true;
  constructor() { }

  ngOnInit(): void {
  }

}
