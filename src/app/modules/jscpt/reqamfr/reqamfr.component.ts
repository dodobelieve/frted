import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE } from 'src/app/core/modals/frted-model';

@Component({
  selector: 'app-reqamfr',
  templateUrl: './reqamfr.component.html',
  styleUrls: ['./reqamfr.component.css']
})
export class ReqamfrComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * 通过timeout滚动的div
   */
  @ViewChild("timeout", { static: false }) timeoutEl: ElementRef;
  /**
   * 通过requestAnimationFrame滚动的div
   */
  @ViewChild("req", { static: false }) reqEl: ElementRef;
  /**
   * 通过timeout滚动的div的位置
   */
  timeoutPosition: number = 0;
  /**
   * 通过requestAnimationFrame滚动的div的位置
   */
  reqPosition: number = 0;
  /**
   * setTimeout id
   */
  timer: any;
  /**
   * 停止requestAnimationFrame标记
   */
  stopReqMark: boolean = false;

  constructor(
    private menuServie: EvmenuService
  ) {
    this.menuServie.setProgress(MENU_CODE.JAVASCRIPT);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.moveBySetTimeout();
    this.moveByRequestAnimationFrame();
  }

  ngOnDestroy(): void {
    if (this.timer)
      clearTimeout(this.timer);
    this.stopReqMark = true;
  }

  /**
   * 通过setTimeout移动div
   */
  moveBySetTimeout() {
    let self = this;
    if (self.timer)
      clearTimeout(self.timer);
    self.timer = setTimeout(() => {
      self.moveTimeoutDiv(self);
    }, 10);
  }

  /**
   * 通过requestAnimationFrame移动div
   */
  moveByRequestAnimationFrame() {
    let self = this;
    window.requestAnimationFrame(() => {
      self.moveReqDiv(self);
    });
  }

  /**
   * 设置滚动位置
   * @param self 
   */
  moveReqDiv(self: any) {
    self.reqPosition++;
    if (self.reqPosition == 350) {
      self.reqPosition = 0;
    }
    self.reqEl.nativeElement.style.marginLeft = `${self.reqPosition}px`;
    if (self.stopReqMark) return;
    //循环滚动
    window.requestAnimationFrame(() => {
      self.moveReqDiv(self);
    });
  }

  /**
   * 设置滚动位置
   * @param self 
   */
  moveTimeoutDiv(self: any) {
    self.timeoutPosition++;
    if (self.timeoutPosition == 350) {
      self.timeoutPosition = 0;
    }
    self.timeoutEl.nativeElement.style.marginLeft = `${self.timeoutPosition}px`;
    setTimeout(() => {
      self.moveTimeoutDiv(self);
    }, 10);
  }



}
