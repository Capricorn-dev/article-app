import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  httpData;

  ngOnInit() {
    this.http.get('https://my-json-server.typicode.com/Capricorn-dev/demo/left-content')
      .subscribe((data) => this.displayData(data));
  }

  displayData(data) {
    this.httpData = data;
  }

}
