import { Component, Input, OnInit } from '@angular/core';
import { ICardInfo } from './Interface/ICardInfo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public cardInfo: ICardInfo[] = [
    {
      title : "",
      icon :"",
      total : 0,
      color: ""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
