import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AppStartComponent implements OnInit {

  @Output() start = new EventEmitter<string>();
  public name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.start.emit(this.name);
  }

  public onKeyUp(event: any): void{
    if (event.key === "Enter") {
      this.onClick();
    }
  }

}
