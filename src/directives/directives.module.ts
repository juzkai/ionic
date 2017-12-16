import { NgModule } from '@angular/core';
import { MyDirective } from './my/my';
import { CommonTitleDirective } from './common-title/common-title';
import { SetHeightDirective } from './set-height/set-height';
@NgModule({
	declarations: [MyDirective,
    CommonTitleDirective,
    SetHeightDirective],
	imports: [],
	exports: [MyDirective,
    CommonTitleDirective,
    SetHeightDirective]
})
export class DirectivesModule {}
