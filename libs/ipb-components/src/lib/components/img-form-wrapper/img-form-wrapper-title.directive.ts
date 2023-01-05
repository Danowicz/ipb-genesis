import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ipb-img-form-wrapper-title]',
    host: {
        class: 'img-form-wrapper__title'
    }
})
export class ImgFormWrapperTitleDirective {}
