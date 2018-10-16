/**
 * 傳案名稱：Angular Develop
 * 子專案名稱：Coffee-Shop
 * 檔案說明： App Module
 * @CREATE 2018/10/15 20:43
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { OwnReviewsComponent } from './own-reviews/own-reviews.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

import { ReviewsService } from './reviews-service/reviews.service';
import { CoffeeshopsService } from './coffeeshops-service/coffeeshops.service';

@NgModule({
  declarations: [
    AppComponent,
    AllReviewsComponent,
    OwnReviewsComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ReviewsService,
    CoffeeshopsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
