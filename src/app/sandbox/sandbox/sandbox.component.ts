import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  response: Observable<any>;

  constructor(private http: HttpClient){}

  ngOnInit() {
  }

  request(url:string) {
    this.response = this.http.get(url);
  }
}




  