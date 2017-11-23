import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private items=[
    'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'
  ];

  private item =[
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
