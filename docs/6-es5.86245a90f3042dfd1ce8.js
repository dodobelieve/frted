(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dz6L:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},b=u("pMnS"),i=u("ytf8"),o=function(){function l(l){this.menuServie=l,this.timeoutPosition=0,this.reqPosition=0,this.stopReqMark=!1,this.menuServie.setProgress(i.a.JAVASCRIPT)}return l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewInit=function(){this.moveBySetTimeout(),this.moveByRequestAnimationFrame()},l.prototype.ngOnDestroy=function(){this.timer&&clearTimeout(this.timer),this.stopReqMark=!0},l.prototype.moveBySetTimeout=function(){var l=this;l.timer&&clearTimeout(l.timer),l.timer=setTimeout((function(){l.moveTimeoutDiv(l)}),10)},l.prototype.moveByRequestAnimationFrame=function(){var l=this;window.requestAnimationFrame((function(){l.moveReqDiv(l)}))},l.prototype.moveReqDiv=function(l){l.reqPosition++,350==l.reqPosition&&(l.reqPosition=0),l.reqEl.nativeElement.style.marginLeft=l.reqPosition+"px",l.stopReqMark||window.requestAnimationFrame((function(){l.moveReqDiv(l)}))},l.prototype.moveTimeoutDiv=function(l){l.timeoutPosition++,350==l.timeoutPosition&&(l.timeoutPosition=0),l.timeoutEl.nativeElement.style.marginLeft=l.timeoutPosition+"px",setTimeout((function(){l.moveTimeoutDiv(l)}),10)},l}(),s=u("PonG"),a=t.rb({encapsulation:0,styles:[[".div-container[_ngcontent-%COMP%]{width:400px;height:60px;border:1px solid #deb887;margin:10px 0}.div-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#8a2be2;margin-top:5px}"]],data:{}});function c(l){return t.Ob(0,[t.Kb(671088640,1,{timeoutEl:0}),t.Kb(671088640,2,{reqEl:0}),(l()(),t.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["window.requestAnimationFrame() "])),(l()(),t.tb(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\u8bf7\u6c42\u52a8\u753b\u5e27\uff0c\u8be5\u65b9\u6cd5\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u56de\u8c03\u51fd\u6570\u4f1a\u5728\u6d4f\u89c8\u5668\u4e0b\u4e00\u6b21\u91cd\u7ed8\u4e4b\u524d\u6267\u884c\u3002"])),(l()(),t.tb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\u4e0esetTimeout\u533a\u522b\uff1a"])),(l()(),t.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["setTimeout\uff1a\u5728\u8bbe\u7f6e\u7684\u65f6\u95f4\u95f4\u9694\u540e\u6267\u884c\u56de\u8c03"])),(l()(),t.tb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["requestAnimationFrame\uff1a\u6d4f\u89c8\u5668\u4e0b\u6b21\u91cd\u7ed8\u524d\u6267\u884c\u56de\u8c03\uff0c\u6267\u884c\u65f6\u673a\u4e0e\u8bbe\u5907\u5237\u65b0\u9891\u7387\u76f8\u5173\u3002"])),(l()(),t.tb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,1,"span",[["class","sp-tip"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["setTimeout\u8bbe\u7f6e\u6eda\u52a8"])),(l()(),t.tb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,67,"pre",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["  "])),(l()(),t.tb(23,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,['@ViewChild("timeout", { static: false }) timeoutEl: ElementRef;'])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["timeoutPosition: number = 0;"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(29,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["timer: any;"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["moveBySetTimeout() {"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(35,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["let self = this;"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(38,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["if (self.timer)"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(41,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["clearTimeout(self.timer);"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(44,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.timer = setTimeout(() => { "])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(47,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.moveTimeoutDiv(self);"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(50,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}, 10);"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(53,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(56,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(59,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["moveTimeoutDiv(self: any) {"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(62,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.timeoutPosition++;"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(65,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["if (self.timeoutPosition == 350) {"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(68,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.timeoutPosition = 0;"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(71,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(74,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.timeoutEl.nativeElement.style.marginLeft = `${self.timeoutPosition}px`;"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(77,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.timer = setTimeout(() => { "])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(80,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.moveTimeoutDiv(self);"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(83,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}, 10);"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(86,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n"])),(l()(),t.tb(89,0,null,null,1,"div",[["class","div-container"]],null,null,null,null,null)),(l()(),t.tb(90,0,[[1,0],["timeout",1]],null,0,"div",[],null,null,null,null,null)),(l()(),t.tb(91,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(92,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(93,0,null,null,1,"span",[["class","sp-tip"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["requestAnimationFrame\u8bbe\u7f6e\u6eda\u52a8\uff1a"])),(l()(),t.tb(95,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(96,0,null,null,58,"pre",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["    "])),(l()(),t.tb(98,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,['@ViewChild("req", { static: false }) reqEl: ElementRef;'])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(101,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["reqPosition: number = 0;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(104,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["moveByRequestAnimationFrame() {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(107,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["let self = this;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(110,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["window.requestAnimationFrame(() => {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(113,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.moveReqDiv(self);"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(116,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["});"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(119,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(122,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(125,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["moveReqDiv(self: any) {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(128,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.reqPosition++;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(131,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["if (self.reqPosition == 350) {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(134,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.reqPosition = 0;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(137,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(140,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.reqEl.nativeElement.style.marginLeft = `${self.reqPosition}px`;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(143,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["window.requestAnimationFrame(() => { "])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(146,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.moveReqDiv(self);"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(149,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["});"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(152,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n  "])),(l()(),t.tb(155,0,null,null,1,"div",[["class","div-container"]],null,null,null,null,null)),(l()(),t.tb(156,0,[[2,0],["req",1]],null,0,"div",[],null,null,null,null,null)),(l()(),t.tb(157,0,null,null,1,"span",[["class","sp-tip"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\u5bf9\u6bd4\u53ef\u660e\u663e\u611f\u89c9\u91c7\u7528requestAnimationFrame\u65b9\u5f0f\u7684\u6eda\u52a8\u6548\u679c\u66f4\u5e73\u6ed1\uff0c\u800c\u91c7\u7528setTimeout\u65b9\u5f0f\u6709\u8df3\u5e27\u7684\u73b0\u8c61\u3002"])),(l()(),t.tb(159,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}var d=t.pb("app-reqamfr",o,(function(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-reqamfr",[],null,null,null,c,a)),t.sb(1,4440064,null,0,o,[s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=function(){function l(l){this.menuServie=l,this.fixedDivWidth=100,this.flexDivWidth=300,this.menuServie.setProgress(i.a.JAVASCRIPT)}return l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewInit=function(){this.resize(this.flexEl),this.changeWidthByRequestAnimationFrame()},l.prototype.resize=function(l){var n=this,u=document.createElement("iframe");u.setAttribute("class","size-watch"),l.nativeElement.appendChild(u),u.contentWindow.onresize=function(){n.flexDivWidth=n.flexEl.nativeElement.clientWidth}},l.prototype.changeWidthByRequestAnimationFrame=function(){var l=this;window.requestAnimationFrame((function(){l.changeFixedDivWidth(l)}))},l.prototype.changeFixedDivWidth=function(l){l.fixedDivWidth++,l.fixedDivWidth>=350&&(l.fixedDivWidth=100),l.fixedEl.nativeElement.style.width=l.fixedDivWidth+"px",window.requestAnimationFrame((function(){l.changeFixedDivWidth(l)}))},l}(),r=t.rb({encapsulation:0,styles:[[".div-container[_ngcontent-%COMP%]{width:400px;height:200px;border:1px solid #deb887;margin:10px 0;display:flex}.div-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:200px}.div-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:100px;background-color:#8a2be2}.div-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{flex:1;width:100px;background-color:brown}  .size-watch{width:100%;height:100%;position:relative;visibility:hidden;margin:0;padding:0;border:0}"]],data:{}});function m(l){return t.Ob(0,[t.Kb(671088640,1,{fixedEl:0}),t.Kb(671088640,2,{flexEl:0}),(l()(),t.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["div \u7ed1\u5b9a resize \u4e8b\u4ef6 "])),(l()(),t.tb(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["div\u5e76\u4e0d\u652f\u6301resize\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u91c7\u7528\u7684\u65b9\u5f0f\u662f\u5728div\u5185\u90e8\u6dfb\u52a0\u4e00\u4e2a\u5c3a\u5bf8100%\u7684iframe\uff0c\u901a\u8fc7\u76d1\u542ciframe\u7684resize\u4e8b\u4ef6\u6765\u54cd\u5e94div\u7684resize\u4e8b\u4ef6\u3002"])),(l()(),t.tb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\u4ee5\u4e0b\u793a\u4f8b\uff0c\u5916\u90e8div\u91c7\u7528flex\u5e03\u5c40\uff0c\u5de6\u4fa7\u7d2b\u8272div\u7528\u4ee3\u7801\u4fee\u6539\u56fa\u5b9a\u5bbd\u5ea6\uff0c\u53f3\u4fa7\u68d5\u8272div\u81ea\u52a8\u5360\u6ee1\u5269\u4f59\u5bbd\u5ea6\u3002"])),(l()(),t.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\u4ee3\u7801\u6f14\u793a\u7528resize\u4e8b\u4ef6\u76d1\u6d4b\u53f3\u4fa7\u68d5\u8272div\u5bbd\u5ea6\u3002"])),(l()(),t.tb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["html:"])),(l()(),t.tb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,120,"pre",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["    "])),(l()(),t.tb(19,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["<style>"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(22,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[".div-container {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(25,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["width: 400px;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(28,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["height: 200px;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(31,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["margin: 10px 0 10px 0;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(34,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["display: flex;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(37,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(40,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(43,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[".div-container>div {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(46,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["height: 200px;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(49,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(55,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[".div-container>div:first-child {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(58,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["width: 100px;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(61,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["background-color: blueviolet;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(64,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(67,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(70,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[".div-container>div:last-child {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(73,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["flex: 1;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(76,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["width: 100px;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(79,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["background-color: blueviolet;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(82,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(85,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(88,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[".size-watch {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(91,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["width: 100%;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(94,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["height: 100%;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(97,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["position: relative;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(100,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["visibility: hidden;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(103,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["margin: 0;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(106,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["padding: 0;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(109,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["border: 0;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(112,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(115,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["</style>"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(118,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(121,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,['<div class="div-container">'])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(124,0,null,null,1,"code",[["class","tab"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["<div #divFixed></div>"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(127,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["<div #divFlex></div>"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(130,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["</div>"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(133,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["<span>\u68d5\u8272div\u5bbd\u5ea6\uff1a{{"])),(l()(),t.tb(135,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["flexDivWidth}}px</span>"])),(l()(),t.Mb(-1,null,["\n"])),(l()(),t.tb(138,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["ts:"])),(l()(),t.tb(140,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(141,0,null,null,124,"pre",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["    "])),(l()(),t.tb(143,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,['@ViewChild("divFixed", { static: false }) fixedEl: ElementRef;'])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(146,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,['@ViewChild("divFlex", { static: false }) flexEl: ElementRef;'])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(149,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["fixedDivWidth: number = 100;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(152,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["flexDivWidth: number = 300;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(155,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(158,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["ngAfterViewInit(): void {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(161,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["this.resize(this.flexEl);"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(164,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["this.changeWidthByRequestAnimationFrame();"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(167,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(170,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(173,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["//\u8bbe\u7f6e\u5143\u7d20resize\u4e8b\u4ef6"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(176,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["resize(el: ElementRef) {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(179,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["let self = this;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(182,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["const iframe = document.createElement('iframe');"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(185,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["iframe.setAttribute('class', 'size-watch');"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(188,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["el.nativeElement.appendChild(iframe);"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(191,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["iframe.contentWindow.onresize = () => {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(194,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.flexDivWidth = self.flexEl.nativeElement.clientWidth;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(197,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["};"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(200,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(203,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(206,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["//\u5faa\u73af\u8bbe\u7f6e\u5de6\u4fa7\u56fa\u5b9a\u5bbd\u5ea6div\u7684\u5bbd\u5ea6"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(209,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["changeWidthByRequestAnimationFrame() {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(212,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["let self = this;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(215,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["window.requestAnimationFrame(() => {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(218,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.changeFixedDivWidth(self);"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(221,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["});"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(224,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(227,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(230,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["//\u8bbe\u7f6e\u5de6\u4fa7\u56fa\u5b9a\u5bbd\u5ea6div\u7684\u5bbd\u5ea6"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(233,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["changeFixedDivWidth(self: any) {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(236,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.fixedDivWidth++;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(239,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["if (self.fixedDivWidth >= 350) {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(242,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.fixedDivWidth = 100;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(245,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(248,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.fixedEl.nativeElement.style.width = `${self.fixedDivWidth}px`;"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(251,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["window.requestAnimationFrame(() => {"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(254,0,null,null,1,"code",[["class","tab2"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["self.changeFixedDivWidth(self);"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(257,0,null,null,1,"code",[["class","tab1"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["});"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(260,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["}"])),(l()(),t.Mb(-1,null,["\n    "])),(l()(),t.tb(263,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\xa0"])),(l()(),t.Mb(-1,null,["\n"])),(l()(),t.tb(266,0,null,null,1,"span",[["class","sp-tip"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["\u6f14\u793a\u6548\u679c\u5982\u4e0b\uff1a"])),(l()(),t.tb(268,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(269,0,null,null,2,"div",[["class","div-container"]],null,null,null,null,null)),(l()(),t.tb(270,0,[[1,0],["divFixed",1]],null,0,"div",[],null,null,null,null,null)),(l()(),t.tb(271,0,[[2,0],["divFlex",1]],null,0,"div",[],null,null,null,null,null)),(l()(),t.tb(272,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(273,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(274,null,["\u68d5\u8272div\u5bbd\u5ea6\uff1a","px"])),(l()(),t.tb(275,0,null,null,0,"br",[],null,null,null,null,null))],null,(function(l,n){l(n,274,0,n.component.flexDivWidth)}))}var f=t.pb("app-div-resize",M,(function(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-div-resize",[],null,null,null,m,r)),t.sb(1,4308992,null,0,M,[s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),v=u("SVse"),p=u("iInd"),h=function(){};u.d(n,"JscptModuleNgFactory",(function(){return x}));var x=t.qb(e,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[b.a,d,f]],[3,t.j],t.w]),t.Db(4608,v.l,v.k,[t.t,[2,v.F]]),t.Db(1073742336,v.b,v.b,[]),t.Db(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t.Db(1073742336,h,h,[]),t.Db(1073742336,e,e,[]),t.Db(1024,p.k,(function(){return[[{path:"",redirectTo:"rqamfr",pathMatch:"full"},{path:"rqamfr",component:o},{path:"resize",component:M}]]}),[])])}))}}]);