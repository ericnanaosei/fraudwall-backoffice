import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  showPageModalValue: boolean;
  @Input()
  title: string;
  constructor(private readonly modalService: ModalService) { }

  ngOnInit(): void {
  }

  // create new event emitter for page modal
  @Output()
  pageModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>()


  onChangedModalEvent(){
    this.pageModalEvent.emit(this.showPageModalValue = this.modalService.hideModal);
  }
}
