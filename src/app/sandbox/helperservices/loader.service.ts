import { Injectable } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public enabled = false;

  public counter = ".";

  constructor() { }

  doShow(){this.enabled=true;}
  doHide(){this.enabled=false;}

  addCounter()
  {
    if (this.counter === "."){
      this.counter = "->";
    }
    else if (this.counter === "->"){
      this.counter = "-->"
    }
    else if (this.counter === "-->"){
      this.counter = "--->"
    }
    else{
      this.counter = ".";
    }
  }

  reset(){this.counter=".";}


}
