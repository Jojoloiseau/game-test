import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

interface Page{
  page: string;
  description: string;
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

  constructor(private http: HttpClient) {
  }

  public title: string | undefined;
  public description: string | undefined;
  public nextPages: Page[] | undefined;
  public fullPage: string | undefined;

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
      this.description = elts[1];
      const pages: string = elts[2];
      const nextPages = pages.split(';');
      this.nextPages = nextPages.map((elt) => {
        return {
          page: elt.split('-')[0],
          description: elt.split('-')[1]
        };
      });
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
