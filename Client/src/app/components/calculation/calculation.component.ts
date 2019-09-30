import { Component, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';
import { ICalculationViewModel } from 'src/app/ViewModel/calculationViewModel';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  public calculations: ICalculationViewModel[] = [];
  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
    this.calculationService.getCalculation().subscribe(res =>
      this.calculations = res as ICalculationViewModel[] || []);
  }

}
