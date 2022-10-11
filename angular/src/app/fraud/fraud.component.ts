import { PagedResultDto } from '@abp/ng.core';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FraudNumber } from './interface/fraud-number.interface';
import { FraudService } from './fraud.service';
import { riskLevelOptions } from './interface/fraud-number.interface';

@Component({
  selector: 'app-fraud',
  templateUrl: './fraud.component.html',
})
export class FraudComponent implements OnInit {
  fraudNumbers = { items: [], totalCount: 0 } as PagedResultDto<FraudNumber>;
  page: number = 0;
  isModalOpen = false;
  fraudNumberForm: FormGroup;
  riskType = riskLevelOptions;
  searchTextEntered = "";

  constructor(
    private readonly fraudService: FraudService,
    private readonly formBuilder: FormBuilder,
    private readonly confirmation: ConfirmationService
    ) {}

  ngOnInit() {
    this.getFraudNumbers();
  }
  
  // get fraud numbers
  getFraudNumbers(){
    this.fraudService.getFraudNumbers().subscribe(results => {
      this.fraudNumbers.items = results;
      this.fraudNumbers.totalCount = results.length;
      console.log(results);
    })
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.fraudService.getFraudNumbers().subscribe(results =>{
      this.fraudNumbers.items = results;
    });
  }

  // create Investigation
  createFraudNumber(){
    this.buildForm();
    this.isModalOpen = true;
  }

  // change visibility status
  changeVisibilityStatus(phoneNumber: string){
    this.fraudService.updateFraudNumberVisibility(phoneNumber).subscribe(()=>{
      return this.fraudService.getFraudNumbers();
    })
  }

  // build form
  buildForm(){
    this.fraudNumberForm = this.formBuilder.group({
      phoneNumber: ['Phone Number', Validators.required]
    });
  }

  // save fraudNumber
  save() {
    if (this.fraudNumberForm.invalid) {
      return;
    }

      this.fraudService.createFraudNumber(this.fraudNumberForm.value).subscribe(()=>{
      this.isModalOpen = false;
      this.fraudNumberForm.reset();
    })
  }


  // delete fraud Number
  deleteFraudNumber(fraudNumberId: string) {
    this.confirmation.warn('::Are you sure you want to delete this Number?', '::Confirm Delete').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.fraudService.deleteFraudNumberById(fraudNumberId).subscribe(() => console.log("Updated"));
      }
    });
  }

  // search text custom event called
  onSearchedText(searchedText:string){
    this.searchTextEntered = searchedText;
  }
}
