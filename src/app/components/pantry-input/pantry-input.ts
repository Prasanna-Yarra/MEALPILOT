import { Component, EventEmitter, Output , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pantry-input',
  imports: [FormsModule],
  templateUrl: './pantry-input.html',
  styleUrl: './pantry-input.css',
})
export class PantryInput {

  @Input() loading = false;

  @Output() generate = new EventEmitter<any>();

  form = {
    pantry: '',
    nutritionGoal: '',
    cuisine: '',
    budget: 300,
    cookingTime: 30,
    familySize: 2,
    userMessage: ''
  };

  onGenerate() {
    this.generate.emit(this.form);
  }

}

