import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userFrom: FormGroup;
  result: any = {};
  constructor(private fb: FormBuilder, private calculationService: CalculationService) { }

  ngOnInit() {
    this.userFrom = this.fb.group({
      userName: ['', Validators.required],
      firstNumber: ['', Validators.required],
      secondNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userFrom.valid) {
      this.calculationService.add(this.userFrom.value).subscribe(res => {
        this.result = res || {} as any;
      });
    }
  }

}
