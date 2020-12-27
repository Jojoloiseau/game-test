import { Component } from '@angular/core';
import { ChangeCharacs } from './component-test/component-test.component'

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
  bolt = 5;
  energyMax = 20;
  audio = new Audio();

  public start(event: string): void {
  console.log(event);
    this.name = event;
    this.page = '0';
    this.playAudio('test2');
  }

  public onMove(): void {
    
    this.energy--;
    if(this.energy === 0){
      this.page = 'bad-end';
      this.stopAudio();
      this.playAudio('fail');
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
    this.bolt = 5;
    this.energyMax = 20;
  }

  public playAudio(song: string): void{
    //let audio = new Audio();
      this.audio.src = "../../../assets/audio/" + song +".mp3";
      this.audio.load();
      this.audio.play();
  }
  public stopAudio(): void{
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  public onCharacChanging(event: ChangeCharacs): void {
  console.log(event);
    if(event.charac === 'S'){
      this.strenght = this.strenght + event.change;
    } else if (event.charac === 'M') {
      this.magic = this.magic + event.change;
    } else if (event.charac === 'H') {
      this.heart = this.heart + event.change;
    } else if (event.charac === 'E') {
      this.energy = this.energy + event.change;
    } else if (event.charac === 'B') {
      this.bolt = this.bolt + event.change;
    } else if (event.charac === 'S') {
      this.strenght = this.strenght + event.change;
    }
  }

}
