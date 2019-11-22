import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Observable } from 'rxjs';
import { finalize, delay, tap } from "rxjs/operators";

import { LoaderService } from '../sandbox/helperservices/loader.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (!request.url.includes("albums")) {
      return next.handle(request);
    }
    const loaderService = this.injector.get(LoaderService);
    loaderService.doShow();
    return next.handle(request).pipe(
                                      tap(()=>{loaderService.addCounter()}),
                                      delay(1000),
                                      tap(()=>{loaderService.addCounter()}),
                                      delay(1000), 
                                      tap(()=>{loaderService.addCounter()}),
                                      delay(1000),
                                      tap(()=>{loaderService.addCounter()}),
                                      delay(1000),                               
                                      finalize(() => loaderService.doHide())
                                    );
  }
}

