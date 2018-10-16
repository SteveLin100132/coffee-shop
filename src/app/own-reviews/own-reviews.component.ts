/**
 * 傳案名稱：Angular Develop
 * 子專案名稱：Coffee-Shop
 * 檔案說明： Own Reviews Component
 * @CREATE 2018/10/15 20:43
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ReviewsService } from './../reviews-service/reviews.service';
import { CoffeeshopsService } from '../coffeeshops-service/coffeeshops.service';

@Component({
  selector: 'app-own-reviews',
  templateUrl: './own-reviews.component.html',
  styleUrls: ['./own-reviews.component.less']
})
export class OwnReviewsComponent implements OnInit, OnDestroy {

  coffeeshops;
  review: FormGroup;
  reviewsSubscribe;
  coffeeshopsSubscribe;
  postSuccess: boolean;

  constructor(private reviewsService: ReviewsService,
              private coffeeshopsService: CoffeeshopsService) {
    
    // 建立一個FormGroup
    this.review = new FormGroup({
      rate: new FormControl('1'), // 預設rate值為1
      content: new FormControl(''), // 評論內容
      timestamp: new FormControl(new Date()), // 評論時間戳記
      coffeeshopId: new FormControl(''), // 評論的咖啡id
      reviewerId: new FormControl(1)
    });

    this.postSuccess = false; // 隱藏送出成功的提示訊息
  }

  ngOnInit() {
    this.getCoffeeShops();
  }

  ngOnDestroy() {
    if(this.reviewsSubscribe !== undefined) this.reviewsSubscribe.unsubscribe(); // 取消訂閱
  }

  /**
   * @method getCoffeeShops 取得所有咖啡館資料
   */
  getCoffeeShops(): void {
    this.coffeeshopsSubscribe = this.coffeeshopsService
      .getCoffeeShops()
      .subscribe(data => {
        this.coffeeshops = data;
        console.log(this.coffeeshops);
      });
  }

  /**
   * @method postReview 送出表單資料給ReviewsService
   * @param {object} form 取得FormGroup表單的資料
   */
  postReview(form: FormGroup): void {
    this.reviewsSubscribe = this.reviewsService
      .createReviews(form.value)
      .subscribe(data => {
        this.postSuccess = true;
      });
  }

}
