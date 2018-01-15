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
  private modalTitle : string = AppConfig.modalTitleText;
  constructor(public alertCtrl : AlertController) {
    console.log('Hello ModalServiceProvider Provider');
  }
  alertMsg(opts, ok = () =>{return}, cancle = () =>{return}) {
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
