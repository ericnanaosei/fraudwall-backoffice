import { CurrentUserDto } from '@abp/ng.core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() showSideBar$: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  @Input()currentUser$: Observable<CurrentUserDto>
}
