import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'ipb-icon',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
    // TODO use content projection instead of input
    @HostBinding('class')
    @Input()
    public name!: string;

    @HostBinding('style.fontSize.px')
    @Input()
    public size!: number;

    @HostBinding('style.color')
    @Input()
    public color!: string;
}
