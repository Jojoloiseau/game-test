import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./../app.component.scss']
})
export class FailureComponent implements OnInit {

  @Output() restart = new EventEmitter<void>();
  @Output() failure = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.failure.emit();
  }

  public onClick(): void {
    this.restart.emit();
  }

}
