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
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'},
    {img:"../../assets/imgs/item-unit.png",title:'item1'}
  ]
  
  constructor(public navCtrl: NavController) {
    
  }
  
  
  ionViewDidEnter(){
   
    
  }
  
}
