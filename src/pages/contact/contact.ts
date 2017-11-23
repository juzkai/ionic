import { Component } from '@angular/core';
import { NavController, } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  constructor(public navCtrl: NavController) {
    
  }
  items=[11,22,33,44,55,66,77,88,99];
  
  ionViewDidEnter(){
   
    
  }
  
}
