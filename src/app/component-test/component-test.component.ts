import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

interface Page{
  page: string;
  description: string;
}

export interface ChangeCharacs{
  charac: string;
  change: number;
}

export interface FightData{
  life?: number;
  skills?: number;
  picture?: string;
}


@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ComponentTestComponent implements OnInit {

  @Input()
  public page: string | undefined;
  @Input()
  public name: string;
  @Input() public strenght: number;
  @Input() public magic: number;
  @Input() public heart: number;
  @Input() public energy: number;
  @Input() public energyMax: number;
  @Input() public bolt: number;

  @Output() moving = new EventEmitter<void>();
  @Output() characsChanging = new EventEmitter<ChangeCharacs>();
  @Output() changeAtmosphere = new EventEmitter<string>();
  @Output() hit = new EventEmitter<number>();

  constructor(private http: HttpClient) {
  this.name = '';
  this.fightFinishedWell = false;
  this.strenght = 1;
  this.magic = 1;
  this.heart = 1;
  this.energy = 20;
  this.bolt = 5;
  this.energyMax = 20;
  }

  public title: string | undefined;
  public type: string | undefined; // I introduction ; F fight ; E explore ; N negociate ; C character ; R restore
  public ambiance: string | undefined;
  public description: string | undefined;
  public nextPages: Page[] | undefined;
  public fullPage: string | undefined;
  public changeCharacs: ChangeCharacs | undefined;
  public fightData: FightData | undefined;

  public fightFinishedWell: boolean;
  
  ngOnInit(): void {
    this.nextPages = [];
      this.description = '';
      this.fullPage = '';
      this.http.get('assets/' + this.page + '.txt', {responseType: 'text'})
          .subscribe((data) => {
          this.fullPage = data;
          console.log(data);
          this.getElements();
          });
  }

  private getElements(): void {
    if(!!this.fullPage) {
      const elts = this.fullPage.split('*');
      this.title = elts[0];
      this.ambiance = elts[1];
      this.changeAtmosphere.emit(this.ambiance);
      this.type = elts[2]
      this.description = elts[3].replace('[Name]', this.name);
      const pages: string = elts[4];
      const nextPages = pages.split(';');
      this.nextPages = nextPages.map((elt) => {
        return {
          page: elt.split('-')[0],
          description: elt.split('-')[1]
        };
      });
      this.changeCharacs = {
        charac : elts[5]?.split(';')[0],
        change : parseInt(elts[5]?.split(';')[1])
      };
      this.characsChanging.emit(this.changeCharacs);
      this.fightData = {
        life: parseInt(elts[6]?.split(';')[0]),
        skills: parseInt(elts[6]?.split(';')[1]),
        picture: elts[6]?.split(';')[2]
      }
      console.log(this.fightData);
    }
  }

  public load(page: string): void{
    this.page = page;
    this.playAudio('turning-page');
    this.moving.emit();
      this.ngOnInit()
  }

  public playAudio(song: string): void{
    let audio = new Audio();
    audio.src = "../../../assets/audio/" + song +".mp3";
    audio.load();
    audio.play();
  }

  public gotHit(event: number): void{
    this.hit.emit(event);
  }
}
