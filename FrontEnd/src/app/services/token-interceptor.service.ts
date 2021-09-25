import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
   
  var url2=new URLSearchParams(req.url)
  var loaders=url2.get('loader');

if(loaders!='true')
{
if (req.url.indexOf('getTicketDetailById') < 0  ) {
this.loaderService.isLoading.next(true);
}
}




    
    let tokenizedReq;
    if (req.url.indexOf('sso/logOut') != -1 || req.url.indexOf('localhost:9000/print') != -1) {
      tokenizedReq = req.clone({
        setHeaders: {}
      })
    } else if (req.url.indexOf('sso/userLogin') != -1 || req.url.indexOf('/return/order/findByOrderNumberAdvance/') != -1 || req.url.indexOf('/return/order/returnReasons') != -1 || req.url.indexOf('/return/order/submitReturnOrder') != -1 || req.url.indexOf('/user/forgotPassword') != -1) {
      tokenizedReq = req.clone({
        setHeaders: {
          'device-type': 'Web',
          'ver': '1.0',
        }
      })
    } else if (req.url.indexOf('/order/getOrderTracking') != -1) {
      tokenizedReq = req.clone({
        setHeaders: {
          'device-type': 'Web',
          'ver': '1.0',
          'ApiKey': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJcdTAwMUIqXHUwMDFFI1x1MDAxQ1x1MDAxRF8mIiwiaXNzIjoiY29tLnhwZGVsLnNlcnZpY2VzIiwiaWF0IjoxNTg3MjM1MDIwLCJqdGkiOiIxMmE3MjQyMi02YWVmLTQ2YzAtYTBiYy04N2FhOWNlZWY0NTAifQ.1DR9SmXBQSuUSakll0OoeOHFB_OdCdXdpCkt4tDGMjY',
          'content-type': 'application/json'
        }
      })
    } else if (req.url.indexOf('/user/changePassword') != -1) {
      tokenizedReq = req.clone({
        setHeaders: {
          'device-type': 'Web',
          'ver': '1.0',
          'RequestToken': "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJcdTAwMUIqXHUwMDFFI1x1MDAxQ1x1MDAxRF8mIiwiaXNzIjoiY29tLnhwZGVsLnNlcnZpY2VzIiwiaWF0IjoxNTg3MjM1MDIwLCJqdGkiOiIxMmE3MjQyMi02YWVmLTQ2YzAtYTBiYy04N2FhOWNlZWY0NTAifQ.1DR9SmXBQSuUSakll0OoeOHFB_OdCdXdpCkt4tDGMjY",
          'timeout': '${30000}'
        }
      })
    } else {
      tokenizedReq = req.clone({
        setHeaders: {
          'device-type': 'Web',
          'ver': '1.0',
          'auth-token': "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJcdTAwMUIqXHUwMDFFI1x1MDAxQ1x1MDAxRF8mIiwiaXNzIjoiY29tLnhwZGVsLnNlcnZpY2VzIiwiaWF0IjoxNTg3MjM1MDIwLCJqdGkiOiIxMmE3MjQyMi02YWVmLTQ2YzAtYTBiYy04N2FhOWNlZWY0NTAifQ.1DR9SmXBQSuUSakll0OoeOHFB_OdCdXdpCkt4tDGMjY",
          'timeout': '${30000}'
        }
      })
    }
    return next.handle(tokenizedReq).pipe(
      catchError(error => {
        if (error.status == 403) {
          if (req.url.indexOf('sso/updatePassword') == -1) {
            this.router.navigate(['/']);
          }
        }
        return throwError(error);
      }),
      finalize(() => this.loaderService.isLoading.next(false))
    );
  }

}
