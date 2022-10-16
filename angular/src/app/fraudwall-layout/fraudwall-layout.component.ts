
import { AuthService, CurrentUserDto, ConfigStateService, NAVIGATE_TO_MANAGE_PROFILE } from '@abp/ng.core';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'abp-fraudwall-layout',
  templateUrl: './fraudwall-layout.component.html',
})
export class FraudwallLayoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private configState: ConfigStateService,
    @Inject(NAVIGATE_TO_MANAGE_PROFILE) public navigateToManageProfile
    ){}

  showSideBar$ = false;

  ngOnInit(): void {}
  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');

  login() {
    this.authService.navigateToLogin();
  }

  logout() {
    this.authService.logout().subscribe();
  }

  showSideBar(){
    this.showSideBar$ = !this.showSideBar$
  }
  handleSideBarEvent(event: boolean){
    this.showSideBar$ = event;
  }
}