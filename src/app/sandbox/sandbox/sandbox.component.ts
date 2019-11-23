import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../helperservices/loader.service';

import { delay,tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  response: any;

  constructor(private http: HttpClient, private loaderService: LoaderService){}

  ngOnInit() {
  }

  request(url:string) {
    this.response = this.http.get(url);
  }

  runDelay(){
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    this.loaderService.reset();
    this.response = this.http.get(url);
  }

  runMap(){
    const url = "https://jsonplaceholder.typicode.com/comments/1";
    this.response = this.http.get(url);
  }

}


/*

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoaderService } from "../services/loader.service";

@Component({
  styleUrls: ["loader.component.css"],
  template: `
    <div>
      <button
        mat-raised-button
        color="primary"
        (click)="run()"
        [disabled]="loaderService.showLoader"
      >
        Run
      </button>
      <div>
        <h3>Response</h3>
        <pre>{{ response | json }}</pre>
        <div *ngIf="loaderService.showLoader" class="loader"></div>
      </div>
    </div>
  `
})
export class LoaderComponent {
  response;

  constructor(private http: HttpClient, public loaderService: LoaderService) {}

  run() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    this.http.get(url).subscribe(r => (this.response = r));
  }
}



*/



  