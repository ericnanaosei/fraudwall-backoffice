import { CurrentUserDto } from '@abp/ng.core';
import { Component,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../fraudwall-layout/menu.interface';
import { MENU_ITEMS } from '../fraudwall-layout/menu.items';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  @Input() sideBarOpen: boolean;
  @Input()currentUser$: Observable<CurrentUserDto>

  menuItems: IMenu[] = MENU_ITEMS

  constructor() { }

  ngOnInit(): void {
  }

  @Output() closeSideBarEvent =  new EventEmitter<boolean>()

  initSideBarEvent(){
    this.closeSideBarEvent.emit(!this.sideBarOpen);
  }
  sideBarTransformation(){
    return this.sideBarOpen? 'translate-x-0': 'translate-x-full';
  }
}
