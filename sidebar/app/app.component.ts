import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
    isOpen: boolean = false;
    adjustMainView(event: boolean) {
      this.isOpen = event;
    }
 }
