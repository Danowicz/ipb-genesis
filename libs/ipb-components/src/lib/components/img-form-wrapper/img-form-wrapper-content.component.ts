import {
  ChangeDetectionStrategy,
  Component, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ipb-img-form-wrapper-content',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgFormWrapperContentComponent {}
