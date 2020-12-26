import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./../app.component.scss']
})
export class ComponentTestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get('assets/test.txt', {responseType: 'text'})
        .subscribe(data => console.log(data));
  }

  

}
