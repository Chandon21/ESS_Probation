import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  showDetails: boolean = false; // toggle for paragraph display
  logs: number[] = []; // array to store log numbers
  counter: number = 1; // incremental counter for clicks

  toggleDetails() {
    this.showDetails = !this.showDetails; // toggle paragraph
    this.logs.push(this.counter); // log the click
    this.counter++;
  }

  // method to check if log item should have blue background
  isBlue(index: number): boolean {
    return index >= 4; // starting from 5th item (index 4)
  }
}
