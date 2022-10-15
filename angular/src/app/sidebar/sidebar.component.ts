import { CurrentUserDto } from '@abp/ng.core';
import { Component,Input, OnInit} from '@angular/core';
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
}
