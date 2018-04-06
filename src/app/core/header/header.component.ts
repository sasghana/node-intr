import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { NotificationService } from './notification.service';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import {AuthService} from '../../account/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [NotificationService]
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    public notificationService: NotificationService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'search-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg'));
  }

  onLogout() {
    this.authService.logout()
    this.router.navigateByUrl('/account/signin');
    console.log(`fare well`);
  }
}
