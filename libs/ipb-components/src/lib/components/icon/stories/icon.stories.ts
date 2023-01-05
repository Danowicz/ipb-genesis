import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconModule, IconComponent } from '../';
import { IconDemoComponent } from './icon-demo.component';

export default {
    title: 'Components/Icon',
    component: IconComponent,
    decorators: [
        moduleMetadata({
            imports: [
                IconModule
            ]
        })
    ],
    parameters: {
        layout: 'fullscreen',
        docs: {
          page: IconDemoComponent,
        },
    },
} as Meta<IconComponent>


export const Default: Story = (args: Args) => {
    return {
      props: {
        ...args
      },
      template: `
        <ipb-icon
            [name]="name"
            [size]="size"
            [color]="color"
        ></ipb-icon>
      `,
    }
}
