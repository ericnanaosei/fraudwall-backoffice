import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  showModal: boolean = true;
  hideModal: boolean = false;
}
