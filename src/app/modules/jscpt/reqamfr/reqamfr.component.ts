import { Component, OnInit } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE } from 'src/app/core/modals/frted-model';

@Component({
  selector: 'app-reqamfr',
  templateUrl: './reqamfr.component.html',
  styleUrls: ['./reqamfr.component.css']
})
export class ReqamfrComponent implements OnInit {

  constructor(
    private menuServie: EvmenuService
  ) {
    this.menuServie.setProgress(MENU_CODE.JAVASCRIPT);
  }

  ngOnInit() {
  }

}
