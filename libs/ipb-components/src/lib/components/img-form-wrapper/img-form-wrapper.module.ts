import { NgModule } from '@angular/core';
import { IconModule } from '../icon';
import { ImgFormWrapperActionsComponent } from './img-form-wrapper-actions.component';
import { ImgFormWrapperContentComponent } from './img-form-wrapper-content.component';
import { ImgFormWrapperControlsComponent } from './img-form-wrapper-controls.component';
import { ImgFormWrapperTitleDirective } from './img-form-wrapper-title.directive';
import { ImgFormWrapperComponent } from './img-form-wrapper.component';

const COMPONENTS = [
    ImgFormWrapperContentComponent,
    ImgFormWrapperComponent,
    ImgFormWrapperActionsComponent,
    ImgFormWrapperControlsComponent,
    ImgFormWrapperTitleDirective
]

@NgModule({
    imports: [IconModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class ImgFormWrapperModule { }
