import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FraudNumber } from '../interface/fraud-number.interface';
import { FraudService } from '../fraud.service';

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
    private readonly fraudNumberService: FraudService
  ) { }

  ngOnInit(): void {
    var phoneNumber = this.route.snapshot.paramMap.get("phoneNumber");
    this.getFraudNumberBySuspectNumber(phoneNumber);

  }

  getFraudNumberBySuspectNumber(phoneNumber: string){
    this.fraudNumberService.getFraudNumberByPhone(phoneNumber).subscribe(fraudnumber =>{
      this.fraudNumber = fraudnumber;
    });
  }
}
