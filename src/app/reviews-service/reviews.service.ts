/**
 * 傳案名稱：Angular Develop
 * 子專案名稱：Coffee-Shop
 * 檔案說明： Reviews Service
 * @CREATE 2018/10/15 20:43
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reviews } from './reviews.enum';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  /**
   * @method getReviews 取得所有評論
   * @returns Observable<@enum Reviews[]> 回傳一個觀察者
   */
  getReviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>('http://localhost:3000/api/reviews');
  }
}
