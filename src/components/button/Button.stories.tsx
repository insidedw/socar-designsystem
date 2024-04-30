import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button.tsx'
import { Color } from '../const.ts'

const meta = {
  title: 'Socar/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      options: Object.keys(Color),
      control: { type: 'select' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div className={'m-1'}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const largeFill: Story = {
  args: {
    text: 'Button',
    type: 'largeFill',
    color: Color.blue,
    disabled: false,
  },
}

export const largeFillCustom: Story = {
  args: {
    text: 'Button',
    type: 'largeFill',
    color: Color.blue,
    disabled: false,
    className: 'bg-coral080',
  },
}
