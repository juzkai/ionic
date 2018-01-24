import { ContactPage } from './contact';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from './../../components/components.module';
@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ContactPage),
  ],
  entryComponents:[
    ContactPage
  ]
})
export class ContactPageModule {}
