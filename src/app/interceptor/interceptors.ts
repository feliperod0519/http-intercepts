import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptorService } from '../interceptor/https-interceptor.service';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptorService, multi: true }
];