import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvest = signal('0');
  enteredAnnualInvest = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvest(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvest(),
      expectedReturn: +this.enteredExpectedReturn(),
    });

    this.enteredInitialInvest.set('0');
    this.enteredAnnualInvest.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
