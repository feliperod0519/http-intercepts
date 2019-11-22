import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptorService } from '../interceptor/https-interceptor.service';
import { LoaderInterceptorService } from '../interceptor/loader-interceptor.service';
import { MapinterceptorService } from '../interceptor/mapinterceptor.service';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: MapinterceptorService, multi: true }
];