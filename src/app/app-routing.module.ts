/**
 * 傳案名稱：Angular Develop
 * 子專案名稱：Coffee-Shop
 * 檔案說明： App Router
 * @CREATE 2018/10/15 20:43
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { OwnReviewsComponent } from './own-reviews/own-reviews.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AllReviewsComponent },
  { path: 'all-reviews', component: AllReviewsComponent },
  { path: 'own-reviews', component: OwnReviewsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
