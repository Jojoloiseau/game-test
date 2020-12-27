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


  public life?: number;
  public maxLife?: number;
  public skills?: number;

  constructor() {
  this.strenght = 1;
  this.magic = 1;
  this.heart = 1;
  this.energy = 20;
  this.bolt = 5;
  this.energyMax = 20;
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
      this.life = this.life - this.getRandomInt(this.strenght);
      console.log(this.life);
      this.energy = this.energy - this.getRandomInt(this.skills);
      console.log(this.energy);

    }
  }

  public flee(): void {

  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
