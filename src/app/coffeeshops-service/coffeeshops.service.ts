/**
 * 傳案名稱：Angular Develop
 * 子專案名稱：Coffee-Shop
 * 檔案說明： Coffeeshops Service
 * @CREATE 2018/10/16 13:37
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Coffeeshop } from './coffeeshop.enum';

@Injectable({
  providedIn: 'root'
})
export class CoffeeshopsService {

  constructor(private http: HttpClient) { }

  /**
   * @method getCoffeeShops 取得所有咖啡館資料
   * @returns Observable<@enum Coffeeshop[]> 回傳一個觀察者
   */
  getCoffeeShops(): Observable<Coffeeshop[]> {
    return this.http.get<Coffeeshop[]>('http://localhost:3000/api/coffeeshops');
  }

}
