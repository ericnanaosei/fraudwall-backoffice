
import { ListService, PagedResultDto } from '@abp/ng.core';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportInvestigationService, InvestigationReportDto, statusOptions} from '@proxy/investigation';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  providers: [ListService],
})
export class InvestigationComponent implements OnInit {
  investigations = { items: [], totalCount: 0 } as PagedResultDto<InvestigationReportDto>;
  page: number = 0;
  isModalOpen = false;
  investigationForm: FormGroup;
  investigationStatusOptions = statusOptions;
  selectedInvestigation = {} as InvestigationReportDto

  constructor(
    public readonly list: ListService, 
    private readonly investigationService: ReportInvestigationService,
    private readonly formBuilder: FormBuilder,
    private readonly confirmation: ConfirmationService
    ) {}

  ngOnInit() {
    this.getInvestigation();
  }
  
  // get Investigation
  getInvestigation():any{
    const investigationStreamCreator = (query) => this.investigationService.getList(query);

    return this.list.hookToQuery(investigationStreamCreator).subscribe((response) => {
      this.investigations = response;
    });
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.investigations = this.getInvestigation();
  }

  // create Investigation
  createInvestigation(){
    this.selectedInvestigation = {} as InvestigationReportDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editInvestigation(id: string) {
    this.investigationService.get(id).subscribe((investigation) => {
      this.selectedInvestigation = investigation;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  // build form
  buildForm(){
    this.investigationForm = this.formBuilder.group({
      reportId: [this.selectedInvestigation.reportId ||'', Validators.required],
      investigationStatus: [this.selectedInvestigation.investigationStatus || null, Validators.required],
      assignedUserId: [this.selectedInvestigation.assignedUserId || null,Validators.nullValidator]
    });
  }

  // save investigation
  save() {
    if (this.investigationForm.invalid) {
      return;
    }
    const request = this.selectedInvestigation.id?
      this.investigationService.update(this.selectedInvestigation.id, this.investigationForm.value)
      :this.investigationService.create(this.investigationForm.value);
    request.subscribe(()=>{
      this.isModalOpen = false;
      this.investigationForm.reset();
    })
  }


  // delete investigation
  deleteInvestigation(id: string) {
    this.confirmation.warn('::Are you sure you want to delete this Investigation?', '::Confirm Delete').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.investigationService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
