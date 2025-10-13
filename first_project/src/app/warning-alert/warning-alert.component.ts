import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p class="warning">⚠️ Warning! Something went wrong!</p>
  `,
  styles: [`
    .warning {
      color: red;
      background-color: #ffe5e5;
      border: 1px solid red;
      padding: 10px;
      border-radius: 5px;
    }
  `]
})
export class WarningAlertComponent { }
