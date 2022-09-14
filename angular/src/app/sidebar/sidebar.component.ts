import { CurrentUserDto } from '@abp/ng.core';
import { Component,Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  @Input() showSideBar$: boolean;
  @Input()currentUser$: Observable<CurrentUserDto>

  constructor() { }

  ngOnInit(): void {
  }
}
