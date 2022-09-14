import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardInfo } from './Interface/ICardInfo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() public cardInfo: ICardInfo[] = [
    {
      title : "",
      icon :"",
      total : 0,
      color: "",
      url: ""
    }
  ]
  constructor(private readonly router: Router) { }

  navigateTo(path: string){
    this.router.navigateByUrl(path);
  }

}
