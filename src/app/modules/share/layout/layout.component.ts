import { Component, OnInit } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE } from 'src/app/core/modals/frted-model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  /**
   * 当前菜单项
   */
  curMenu: MENU_CODE = MENU_CODE.ES2015;

  constructor(
    private menuService: EvmenuService
  ) {
    this.menuService.menuChanged.subscribe(m => {
      this.curMenu = m;
    });
  }

  ngOnInit() {

  }


}
