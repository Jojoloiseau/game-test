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
  oldPlace = '';
  newPlace = '';
  endingText = '';

  public start(event: string): void {
    this.name = event;
    this.page = '0';
    this.playAudio('intro');
    this.oldPlace='intro';
  }

  public onMove(): void {
    
    this.energy--;
    if(this.energy === 0){
      this.badEnding();
    }
  }

  private badEnding(): void {
    this.page = 'bad-end';
    this.stopAudio();
    this.playAudio('fail');
  }

  public init(): void {
    this.stopAudio();
    this.title = 'Test Game';
    this.page = 'Intro';
    this.name = '';
    this.strenght = 1;
    this.magic = 1;
    this.heart = 1;
    this.energy = 20;
    this.bolt = 5;
    this.energyMax = 20;
    this.endingText = '';
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

  public changeMusic(event: string): void {
    this.newPlace = event;
    if (this.newPlace !== this.oldPlace) {
      this.stopAudio();
      this.playAudio(this.newPlace);
      this.oldPlace = event;
    }
  }

  public onCharacChanging(event: ChangeCharacs): void {
  console.log(event);
    if(event.charac === 'S'){
      if (this.strenght + event.change < 1){
        this.strenght = 1;
      } else {
        this.strenght = this.strenght + event.change;
      }
    } else if (event.charac === 'M') {
      if (this.magic + event.change < 1){
        this.magic = 1;
      } else {
        this.magic = this.magic + event.change;
      }
    } else if (event.charac === 'H') {
      if (this.heart + event.change < 1){
        this.heart = 1;
      } else {
        this.heart = this.heart + event.change;
      }
    } else if (event.charac === 'E') {
      if (this.energy + event.change < 0){
        this.energy = 0;
      } else {
        this.energy = this.energy + event.change;
        if (this.energy > this.energyMax) {
          this.energy = this.energyMax;
        }
      } 
    } else if (event.charac === 'B') {
      if (this.bolt + event.change < 0){
        this.bolt = 0;
      } else {
        this.bolt = this.bolt + event.change;
      }
    } else if (event.charac === 'EM') {
      this.energyMax = this.energyMax + event.change;
      if (event.change > 0) {
        this.energy = this.energy + event.change;
      } else {
        if(this.energy > this.energyMax) {
          this.energy = this.energyMax;
        }
        if (this.energy < 0) {
          this.energy = 0;
        }
      }
    }
  }

  public gotHit(event: number): void{
    this.energy = this.energy - event;
    if(this.energy < 1){
      this.badEnding();
    }
  }

  public changeEndingText(event: string): void {
    this.endingText = event;
  }

  public failure(): void {
    this.badEnding();
  }

}
