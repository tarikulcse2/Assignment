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

    this.username.valueChanges.subscribe(v => {
      this.calculations = this.allCalculations.filter(s => s.userName.includes(v));
      if (v == null || v === '') {
        this.calculations = this.allCalculations;
      }
    });
  }
  searchDate(sD: string, eD: string) {
    this.calculations = this.allCalculations.filter(s =>
      new Date(s.dateOfCalculation).setHours(0, 0, 0, 0) >= new Date(sD).setHours(0, 0, 0, 0) &&
      new Date(s.dateOfCalculation).setHours(0, 0, 0, 0) <= new Date(eD).setHours(0, 0, 0, 0)
      );
  }
}
