/**
 * 傳案名稱：Angular Develop
 * 子專案名稱：Coffee-Shop
 * 檔案說明： All Reviews Component
 * @CREATE 2018/10/15 20:43
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ReviewsService } from './../reviews-service/reviews.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.less']
})
export class AllReviewsComponent implements OnInit, OnDestroy {

  reviews = [];
  serviceSubscribe;

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit() {
    this.getReviews();
  }

  ngOnDestroy() {
    this.serviceSubscribe.unsubscribe();
  }

  /**
   * @method getReviews 取得所有評論
   */
  getReviews(): void {
    this.serviceSubscribe = this.reviewsService
      .getReviews()
      .subscribe(data => {
        this.reviews = data;
      });
  }

}
