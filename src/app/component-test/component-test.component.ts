import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public description: string | undefined;
  public nextPages: string[] | undefined;
  public fullPage: string | undefined;
  public audio = new Audio();

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
      this.description = elts[0];
      const pages: string = elts[1];
      this.nextPages = pages.split(';');
    }
  }

  public load(page: string): void{
    this.page = page;
    this.moving.emit();
      this.ngOnInit()
  }

  

  
}
