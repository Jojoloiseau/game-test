import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Game';
  page = 'Intro';
  name = '';
  force = 0;
  intelligence = 0;
  luck = 0;

  public start(event: string): void {
  console.log(event);
    this.name = event;
    this.page = '0';
  }
}
