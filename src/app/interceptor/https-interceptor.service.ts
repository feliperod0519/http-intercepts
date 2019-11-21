import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { Observable, of } from "rxjs";

@Injectable()
export class HttpsInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (!req.url.includes("todos/1")) {
      return next.handle(req);
    }
    console.warn("HttpsInterceptor");
    const httpsReq = req.clone({
      url: req.url.replace("http://", "https://")
    });

    return next.handle(httpsReq);

  }
}
