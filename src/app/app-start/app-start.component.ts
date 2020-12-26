import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./../app.component.scss']
})
export class AppStartComponent implements OnInit {

  @Output() start: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.start.emit();
  }

}
