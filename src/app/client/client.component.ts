import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {NzDrawerPlacement} from "ng-zorro-antd/drawer";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
   userInfo: any;
  isHidden!: boolean;
  isMobile!: boolean;
  visible = false;
  placement: NzDrawerPlacement = 'top';
  constructor(
    // private storage: StorageService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    // this.storage.setIsGuest();
    // this.userInfo = this.storage.getUserInfo();

    if (this.isMobile) this.isHidden = true;
  }

  close(): void {
    this.visible = false;
  }

  openDrawer() {
    this.visible = true;
  }

  isGuestMode() {
    // return this.storage.isGuest();
  }

  onClickMenuMobile() {
    if (this.isMobile) {
      this.visible = false;
    }
  }

  logOut() {
    // this.storage.logOut();
  }

  isSubjectCourseRoute() {
    return this.router.url.includes('subject-courses');
  }

}
