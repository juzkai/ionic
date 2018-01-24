import { Router } from './../../app/app.router';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalServiceProvider } from '../../providers/modal-service/modal-service';
/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ItemPage',
  segment: 'items/:id/:name'
})
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appModal : ModalServiceProvider
  ) {
    let id = navParams.get('id');
    let name = navParams.get('name');
    console.log('id:' + id + '-----name:' + name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }
  back(){
    // this.navCtrl.pop();
    this.appModal.confirmMsg('是否返回上一页',() =>this.navCtrl.pop(), () => console.log('选择了取消'));
  }
}
