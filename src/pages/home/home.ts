import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, Slides } from 'ionic-angular';
import { APP_API } from '../../app/app.config';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  ngAfterViewInit() {
    this.slides.autoplay = 3000;
    this.slides.loop = true;
    this.slides.autoplayDisableOnInteraction = false;
  }
  //解决切换其他页面回去轮播图不动问题
  ionViewWillEnter() {
    this.slides.startAutoplay();
  }
  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private httpServe: HttpServiceProvider
  ) {
    this.postData();
  }
  //打开alert模态框
  alertMsg = (msg) => {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: msg,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: () => {
            return false;
          }
        }
      ]
    });
    alert.present();
  }
  //打开actionsheet
  open = () => {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'ionicApp',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.alertMsg('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
  //接口请求
  postData() {
    const formData = {
      id: 1
    }
    this.httpServe.post(APP_API.HttpTask, formData).then((response) => {
      console.log(response);

    }).catch((erroe) => {
      console.log(erroe);

    });
  }

  toItem(){
    this.navCtrl.push('ItemPage');
  }

}
