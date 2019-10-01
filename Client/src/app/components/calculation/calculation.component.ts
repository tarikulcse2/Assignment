import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalculationService } from 'src/app/services/calculation.service';
import { ICalculationViewModel } from 'src/app/ViewModel/calculationViewModel';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  public calculations: ICalculationViewModel[] = [];
  public allCalculations: ICalculationViewModel[] = [];
  public username = new FormControl();
  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
    this.calculationService.getCalculation().subscribe(res => {
      this.calculations = res as ICalculationViewModel[] || [];
      this.allCalculations = res as ICalculationViewModel[] || [];
    }
    );
  }
  searchUser(value: string) {
    this.calculations = this.allCalculations.filter(s => s.userName === value);
  }

  searchDate(sD: string, eD: string) {
    this.calculations = this.allCalculations.filter(s =>
      new Date(s.dateOfCalculation) <= new Date(sD) && new Date(s.dateOfCalculation) >= new Date(eD));
  }
}
