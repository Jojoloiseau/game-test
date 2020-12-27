import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FightData } from './../component-test.component'

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class FightComponent implements OnInit {

  @Input()
  public fightData: FightData | undefined;

  @Input() public strenght: number;
  @Input() public magic: number;
  @Input() public heart: number;
  @Input() public energy: number;
  @Input() public energyMax: number;
  @Input() public bolt: number;

  @Output() hit = new EventEmitter<number>();
  @Output() endOfFight = new EventEmitter<void>();

  public life?: number;
  public maxLife?: number;
  public skills?: number;
  public isFightOver: boolean;

  constructor() {
  this.strenght = 1;
  this.magic = 1;
  this.heart = 1;
  this.energy = 20;
  this.bolt = 5;
  this.energyMax = 20;
  this.isFightOver = false;
  }

  ngOnInit(): void {
  this.getAttributes();
  }

  public getPictureUrl(): string | undefined {
    return this.fightData?.picture ? '/assets/img/' + this.fightData?.picture + '.jpg' : undefined;
  }

  public getAttributes(): void {
    this.maxLife = this.fightData?.life? this.fightData?.life : this.maxLife;
    this.skills = this.fightData?.skills? this.fightData?.skills : this.skills;
    this.life = this.maxLife;
  }


  public attack(): void {
    if (this.life && this.strenght && this.energy && this.skills){
      const enemyLoss = this.getRandomInt(this.strenght);
      this.life = this.life - enemyLoss;
      console.log(this.life);
      const heroLoss = this.getRandomInt(this.skills);
      this.energy = this.energy - heroLoss;
      this.hit.emit(heroLoss);
      console.log(this.energy);
      if(enemyLoss>heroLoss){
        this.playAudio('goodShot');
      } else if(enemyLoss === heroLoss && heroLoss !== 0) {
        this.playAudio('fairShot');
      } else if(heroLoss === 0) {
        this.playAudio('miss');
      } else {
        this.playAudio('argh');
      }
      if(this.life < 1) {
        this.isFightOver = true;
        this.endOfFight.emit();
      }
    }
  }

  public flee(): void {

  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public playAudio(sound: string): void{
    this.getRandomInt(3);
    let audio = new Audio();
    audio.src = "../../../../assets/audio/" + sound +".mp3";
    audio.load();
    audio.play();
  }

}
