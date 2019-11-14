import { Component, OnInit } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE } from 'src/app/core/modals/frted-model';

@Component({
  selector: 'app-es6-functions',
  templateUrl: './es6-functions.component.html',
  styleUrls: ['./es6-functions.component.css']
})
export class Es6FunctionsComponent implements OnInit {

  constructor(
    private menuServie: EvmenuService
  ) {
    this.menuServie.setProgress(MENU_CODE.ES2015);
  }

  ngOnInit() {
  }

}
