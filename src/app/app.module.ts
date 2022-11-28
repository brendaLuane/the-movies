import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIdInterceptor } from './core/infra/service/app-id-interceptor';
import { ModalService } from './core/infra/service/modal.service';
import { ThemoviesService } from './themovies/infra/themovies.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AppIdInterceptor
    },
    ModalService,
    ThemoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
