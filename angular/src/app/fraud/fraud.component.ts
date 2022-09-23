import { ListService, PagedResultDto } from '@abp/ng.core';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FraudService, FraudNumberDto, riskTypeOptions, CreateFraudNumberDto, ValiatePhoneNumberDto } from '@proxy/fraud';

@Component({
  selector: 'app-fraud',
  templateUrl: './fraud.component.html',
  providers: [ListService],
})
export class FraudComponent implements OnInit {
  fraudNumbers = { items: [], totalCount: 0 } as PagedResultDto<FraudNumberDto>;
  page: number = 0;
  isModalOpen = false;
  fraudNumberForm: FormGroup;
  riskType = riskTypeOptions;
  selectedFraudNumber = {} as FraudNumberDto
  searchTextEntered = "";

  constructor(
    public readonly list: ListService, 
    private readonly fraudService: FraudService,
    private readonly formBuilder: FormBuilder,
    private readonly confirmation: ConfirmationService
    ) {}

  ngOnInit() {
    this.getFraudNumbers();
  }
  
  // get Investigation
  getFraudNumbers():any{
    const fraudStreamCreator = (query) => this.fraudService.getList(query);

    return this.list.hookToQuery(fraudStreamCreator).subscribe((response) => {
      this.fraudNumbers= response;
    });
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.fraudNumbers = this.getFraudNumbers();
  }

  // create Investigation
  createFraudNumber(){
    this.selectedFraudNumber = {} as FraudNumberDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editFraudNumber(id: string) {
    this.fraudService.get(id).subscribe((fraudNumber) => {
      this.selectedFraudNumber = fraudNumber;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  // build form
  buildForm(){
    this.fraudNumberForm = this.formBuilder.group({
      phoneNumber: [this.selectedFraudNumber.phoneNumber ||'', Validators.required],
      reportCount: [this.selectedFraudNumber.reportCount || null, Validators.required],
      rating: [this.selectedFraudNumber.rating || null,Validators.required],
      riskLevel: [this.selectedFraudNumber.riskLevel || null, Validators.required]
    });
  }

  // save fraudNumber
  save() {
    if (this.fraudNumberForm.invalid) {
      return;
    }
    const request = this.selectedFraudNumber.id?
      this.fraudService.update(this.selectedFraudNumber.id, this.fraudNumberForm.value)
      :this.fraudService.create(this.fraudNumberForm.value);
    request.subscribe(()=>{
      this.isModalOpen = false;
      this.fraudNumberForm.reset();
    })
  }


  // delete fraud Number
  deleteFraudNumber(id: string) {
    this.confirmation.warn('::Are you sure you want to delete this Number?', '::Confirm Delete').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.fraudService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // search text custom event called
  onSearchedText(searchedText:string){
    this.searchTextEntered = searchedText;
    console.log(this.searchTextEntered);
  }
}
