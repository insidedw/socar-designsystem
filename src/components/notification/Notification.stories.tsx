import type { Meta, StoryObj } from '@storybook/react'
import { NotificationColor } from '../const.ts'
import { Notification } from './Notification.tsx'
import { Bell, MessageSquareMore } from 'lucide-react'

const meta = {
  title: 'Socar/Notification',
  component: Notification,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      options: Object.keys(NotificationColor),
      control: { type: 'select' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  decorators: [
    (Story) => (
      <div className={'m-1'}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    color: NotificationColor.blue,
    children: <Bell />,
  },
}

export const numbers: Story = {
  args: {
    color: NotificationColor.coral,
    text: '99+',
    children: <MessageSquareMore />,
  },
}
