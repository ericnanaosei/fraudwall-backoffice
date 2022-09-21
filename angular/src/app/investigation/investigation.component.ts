
import { ListService, PagedResultDto } from '@abp/ng.core';
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

  constructor(
    public readonly list: ListService, 
    private readonly investigationService: ReportInvestigationService,
    private readonly formBuilder: FormBuilder
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
    this.buildForm();
    this.isModalOpen = true;
  }

  // build form
  buildForm(){
    this.investigationForm = this.formBuilder.group({
      reportId: ['', Validators.required],
      investigationStatus: [null, Validators.required],
      assignedUserId: [null,Validators.nullValidator]
    });
  }

  // add save method
  save() {
    if (this.investigationForm.invalid) {
      return;
    }
    this.investigationService.create(this.investigationForm.value).subscribe(() => {
      console.log(this.investigationForm.value);
      this.isModalOpen = false;
      this.investigationForm.reset();
      this.list.get();
    });
  }
}
