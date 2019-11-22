import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Transformation, Map } from '../models/transformation';
import { User } from '../models/user';

@Injectable()
export class MapinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>
  {
    if (!req.url.includes("comments")) {
      return next.handle(req);
    }
    return next.handle(req).pipe(
                                  map((r: HttpEvent<any>)=>{ 
                                                              if (r instanceof HttpResponse){
                                                                let m:  Map<string> = this.encodeUser(r.body);
                                                                let t: Transformation= new Transformation();
                                                                let newValue = t.doTransformation(m,"name",(x:string)=>{return x.toUpperCase();});
                                                                m.add("name",newValue)
                                                                console.log(m.get("name"));
                                                              }
                                                              return r;
                                                           })
                                );
  }

  encodeUser(jsonUser: string): Map<string> {
    let keys: string[] = Object.keys(jsonUser);
    let values: string[] = Object.values(jsonUser);
    let m = new Map<string>();
    let n = 0;
    keys.forEach(element => {
      m.add(element,values[n]);
      console.log(`${element}:${values[n]}`);
      n++;      
    });
    return m;
  }
  
  
}

/*

interface MyObj {
    myString: string;
    myNumber: number;
}

let obj: MyObj = JSON.parse('{ "myString": "feli", "myNumber": 4 }');
console.log(obj.myString);
console.log(obj.myNumber);

*/


/*

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
          const modEvent = event.clone({ body: camelCaseObject });

          return modEvent;
        }
      })
    );
  }
}



*/