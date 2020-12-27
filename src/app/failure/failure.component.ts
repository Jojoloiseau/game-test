import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./../app.component.scss']
})
export class FailureComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.restart.emit();
  }

}
