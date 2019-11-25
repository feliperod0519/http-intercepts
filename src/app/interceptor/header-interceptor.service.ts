import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    if (!req.url.includes("header")) {
      return next.handle(req);
    }
    const modified = req.clone({ setHeaders: { "X-Man": "Wolverine" } });
    return next.handle(modified);
  }
}
