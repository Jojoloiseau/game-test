import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ComponentTestComponent implements OnInit {

  @Input()
  public page: string | undefined;

  constructor(private http: HttpClient) { }

  public description: string | undefined;
  public nextPages: string[] | undefined;
  public fullPage: string | undefined;
  public audio = new Audio();

  ngOnInit(): void {
  this.nextPages = [];
  this.description = '';
  this.fullPage = '';
  this.playAudio();
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
      this.description = elts[0];
      const pages: string = elts[1];
      this.nextPages = pages.split(';');
    }
  }

  public load(page: string): void{
    this.audio.pause();
    this.audio.currentTime = 0;
    this.page = page;
    this.ngOnInit()
  }

  public playAudio(): void{
    //let audio = new Audio();
    this.audio.src = "../../../assets/audio/test2.mp3";
    this.audio.load();
    this.audio.play();
  }

  
}
