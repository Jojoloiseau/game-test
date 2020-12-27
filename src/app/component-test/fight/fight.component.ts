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

  constructor() { }

  ngOnInit(): void {
  }

  public getPictureUrl(): string | undefined {
  console.log(this.fightData);
    return this.fightData?.picture ? '/assets/img/' + this.fightData?.picture + '.jpg' : undefined;
  }

}
