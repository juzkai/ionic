import { APP_API } from './../../app/app.config';

import { Component } from '@angular/core';
import { NavController, ActionSheetController, Slides,AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { HttpServiceProvider } from '../../providers/http-service/http-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HttpServiceProvider]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  ngAfterViewInit() {
    this.slides.autoplay = 3000;
    this.slides.loop = true;
    this.slides.autoplayDisableOnInteraction = false;
  }
  //解决切换其他页面回去轮播图不动问题
  ionViewWillEnter(){
    this.slides.startAutoplay();
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }
  constructor(
    public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl:AlertController,
    private httpServe : HttpServiceProvider
  ) {
    this.postData();
  } 
  alertMsg = (msg)=>{
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
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
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

  postData (){
    const formData = {
      id : 1
    }
   this.httpServe.post(APP_API.HttpTask,formData).then((response)=>{
     console.log(response);
     
   }).catch((erroe)=>{
      console.log(erroe);
      
   });
  }

}
