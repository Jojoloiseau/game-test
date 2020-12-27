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
  audio = new Audio();

  public start(event: string): void {
  console.log(event);
    this.name = event;
    this.page = '0';
    this.playAudio();
  }

  public onMove(): void {
    
    this.energy--;
    if(this.energy === 0){
      this.page = 'bad-end';
      this.stopAudio();
      //this.init();
    }
  }

  public init(): void {
    this.title = 'Test Game';
    this.page = 'Intro';
    this.name = '';
    this.strenght = 1;
    this.magic = 1;
    this.heart = 1;
    this.energy = 20;
    this.money = 5;
    this.energyMax = 20;
  }

  public playAudio(): void{
    //let audio = new Audio();
      this.audio.src = "../../../assets/audio/test2.mp3";
      this.audio.load();
      this.audio.play();
  }
  public stopAudio(): void{
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  

}
