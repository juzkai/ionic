import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  /**
   *  功能菜单
   */
   item =[
    {img:"./assets/imgs/item-unit.png",title:'item1'},
    {img:"./assets/imgs/item-unit.png",title:'item2'},
    {img:"./assets/imgs/item-unit.png",title:'item3'},
    {img:"./assets/imgs/item-unit.png",title:'item4'},
    {img:"./assets/imgs/item-unit.png",title:'item5'},
    {img:"./assets/imgs/item-unit.png",title:'item6'},
    {img:"./assets/imgs/item-unit.png",title:'item7'},
    {img:"./assets/imgs/item-unit.png",title:'item8'},
    {img:"./assets/imgs/item-unit.png",title:'item9'}
  ]
  
  constructor(public navCtrl: NavController) {
    
  }
  
  
  ionViewDidEnter(){
   
    
  }
  
}
