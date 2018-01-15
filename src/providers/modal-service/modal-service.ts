import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../app/app.config';
/*
  Generated class for the ModalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalServiceProvider {
  public modalTitle : string = AppConfig.modalTitleText;
  constructor(public alertCtrl : AlertController) {}
  /**
   * confirm 提示框
   * @param opts string : 提示框内容 || obj { okBtnText : '确定按钮文字内容', cancleBtnText : '取消按钮文字内容', msg : '提示框文字' }
   * @param ok function : 点击确定按钮返回事件
   * @param cancle function : 点击取消按钮返回事件
   */
  confirmMsg(opts, ok = () =>{return}, cancle = () =>{return}) {
    let okBtnText = '确定';
    let cancleBtnText = '取消';
    let msg = '';
    if(typeof opts === 'string') {
      msg = opts || msg;
    }
    if(typeof opts === 'object') {
      msg = opts.msg || msg;
      okBtnText = opts.okBtnText || okBtnText;
      cancleBtnText = opts.cancleBtnText || cancleBtnText;
    }
    let alert = this.alertCtrl.create({
      title: this.modalTitle,
      message: msg,
      buttons: [{text: cancleBtnText,role: 'cancel', handler: () => {cancle();}},{text: okBtnText,handler: () => {ok();}}]
    });
    alert.present();
  }
}
