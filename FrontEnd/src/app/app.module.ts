import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { initializer } from './services/initializer.service';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Select2Module } from 'ng2-select2';
import { PipesModule } from './modules/pipes/pipes.module';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoaderComponent } from './base/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    Select2Module,
    PipesModule,
    RxReactiveFormsModule,
    CKEditorModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    },
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializer, 
      deps: [ KeycloakService ], 
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
