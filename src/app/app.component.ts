import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Black vynils';
  componentActive = 'prizes';

  viewComponent(component: string): void {
    this.componentActive = component;
  }
}
