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


@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ComponentTestComponent implements OnInit {

  @Input()
  public page: string | undefined;
  @Output() moving = new EventEmitter<void>();
  @Output() characsChanging = new EventEmitter<ChangeCharacs>();

  constructor(private http: HttpClient) {
  }

  public title: string | undefined;
  public type: string | undefined; // I introduction ; F fight ; E explore ; N negociate ; C character ; R restore
  public description: string | undefined;
  public nextPages: Page[] | undefined;
  public fullPage: string | undefined;
  public changeCharacs: ChangeCharacs | undefined;
  
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
      this.type = elts[1]
      this.description = elts[2];
      const pages: string = elts[3];
      const nextPages = pages.split(';');
      this.nextPages = nextPages.map((elt) => {
        return {
          page: elt.split('-')[0],
          description: elt.split('-')[1]
        };
      });
      this.changeCharacs = {
        charac : elts[4]?.split(';')[0],
        change : parseInt(elts[4]?.split(';')[1])
      };
      console.log(this.changeCharacs);
      this.characsChanging.emit(this.changeCharacs);
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

  

  
}
