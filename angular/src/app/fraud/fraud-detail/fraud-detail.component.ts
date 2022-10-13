import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FraudNumber } from '../interface/fraud-number.interface';
import { FraudService } from '../fraud.service';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-fraud-detail',
  templateUrl: './fraud-detail.component.html'
})
export class FraudDetailComponent implements OnInit {
  fraudNumber: FraudNumber = {
    fraudNumberId: "",
    fraudNumber: "",
    totalReport: null,
    visibility: null,
    risk_Level: null,
    createdAt: null,
    modifiedAt: null,
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fraudNumberService: FraudService,
    private readonly confirmation: ConfirmationService
  ) { }

  ngOnInit(): void {
    var fraudNumberId = this.route.snapshot.paramMap.get("fraudNumberId");
    this.getFraudNumberById(fraudNumberId);

  }

  getFraudNumberById(phoneNumber: string){
    this.fraudNumberService.getFraudNumberById(phoneNumber).subscribe(fraudnumber =>{
      this.fraudNumber = fraudnumber;
    });
  }

    // change visibility status
    changeVisibilityStatus(phoneNumber: string){
      this.confirmation.warn('::Are you sure you want to Update Visibility?', '::Confirm Action').subscribe((status) => {
        if (status === Confirmation.Status.confirm) {
          this.fraudNumberService.updateFraudNumberVisibility(phoneNumber).subscribe( (fraudNumber)=>{
            this.getFraudNumberById(fraudNumber.fraudNumberId)
          })
        }
      })
    }
}
