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
  strenght = 1;
  magic = 1;
  heart = 1;
  energy = 20;
  money = 5;
  energyMax = 20;

  public start(event: string): void {
  console.log(event);
    this.name = event;
    this.page = '0';
  }

  public onMove(): void {
    this.energy--;
  }

}
