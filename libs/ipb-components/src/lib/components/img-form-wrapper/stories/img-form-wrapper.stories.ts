import { ImgFormWrapperComponent, ImgFormWrapperModule} from '../'
import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';

export default {
    title: 'Components/Image Form Wrapper',
    component: ImgFormWrapperComponent,
    decorators: [
        moduleMetadata({
            imports: [
                ImgFormWrapperModule
            ]
        })
    ],
    parameters: {
        layout: 'fullscreen'
    }
} as Meta<ImgFormWrapperComponent>


export const Default: Story = (args: Args) => {
    return {
      props: {
        ...args
      },
      template: `
        <ipb-img-form-wrapper [backgroundImg]="backgroundImg">
            <h1 ipb-img-form-wrapper-title>Log in to your Itaú Private Bank account</h1>
        </ipb-img-form-wrapper>
      `,
    }
}
