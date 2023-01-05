import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ipb-img-form-wrapper',
  templateUrl: './img-form-wrapper.component.html',
  styleUrls: ['./img-form-wrapper.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'img-form-wrapper'
  }
})
export class ImgFormWrapperComponent {
    /** The image shown as header background for mobile variation
     * and as left container background for desktop variation
     */
    @Input()
    public backgroundImg = 'assets/background.jpg';
}
