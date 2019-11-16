import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE } from 'src/app/core/modals/frted-model';

@Component({
  selector: 'app-div-resize',
  templateUrl: './div-resize.component.html',
  styleUrls: ['./div-resize.component.css']
})
export class DivResizeComponent implements OnInit, AfterViewInit {



  /**
 * 固定宽度的div
 */
  @ViewChild("divFixed", { static: false }) fixedEl: ElementRef;
  /**
   * 伸缩宽度的div
   */
  @ViewChild("divFlex", { static: false }) flexEl: ElementRef;
  /**
   * 固定宽度div的宽度
   */
  fixedDivWidth: number = 100;

  /**
   * 伸缩宽度div的宽度
   */
  flexDivWidth: number = 300;

  constructor(
    private menuServie: EvmenuService
  ) {
    this.menuServie.setProgress(MENU_CODE.JAVASCRIPT);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.resize(this.flexEl);
    this.changeWidthByRequestAnimationFrame();
  }

  /**
   * 绑定div resize事件
   * @param el 元素Element
   */
  resize(el: ElementRef) {
    // 创建iframe标签，设置样式并插入到被监听元素中
    let self = this;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'size-watch');
    el.nativeElement.appendChild(iframe);
    iframe.contentWindow.onresize = () => {
      self.flexDivWidth = self.flexEl.nativeElement.clientWidth;
    };
  }

  /**
   * 循环设置左侧固定宽度div的宽度
   */
  changeWidthByRequestAnimationFrame() {
    let self = this;
    window.requestAnimationFrame(() => {
      self.changeFixedDivWidth(self);
    });
  }

  /**
   * 设置左侧固定宽度div的宽度
   * @param self 
   */
  changeFixedDivWidth(self: any) {
    self.fixedDivWidth++;
    if (self.fixedDivWidth >= 350) {
      self.fixedDivWidth = 100;
    }
    self.fixedEl.nativeElement.style.width = `${self.fixedDivWidth}px`;
    window.requestAnimationFrame(() => {
      self.changeFixedDivWidth(self);
    });
  }

}
