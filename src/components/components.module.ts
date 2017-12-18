import { NgModule } from '@angular/core';
import { MyTitleComponent } from './my-title/my-title';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [MyTitleComponent],
	imports: [IonicModule],
	exports: [MyTitleComponent],
	entryComponents:[MyTitleComponent],
})
export class ComponentsModule {}
