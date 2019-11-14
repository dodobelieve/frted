import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MENU_CODE } from '../modals/frted-model';

@Injectable({
  providedIn: 'root'
})
export class EvmenuService {

  constructor() { }

  /**
   * 观察菜单
   */
  private watchedMenu = new Subject<MENU_CODE>();
  /**
   * 菜单改变观察者
   */
  menuChanged: Observable<MENU_CODE> = this.watchedMenu.asObservable();

  /**
 * 设置当前菜单
 * @param menu 菜单编号
 */
  setProgress(menu: MENU_CODE) {
    this.watchedMenu.next(menu);
  }
}
