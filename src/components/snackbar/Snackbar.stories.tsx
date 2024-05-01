import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar } from './Snackbar.tsx'

const meta = {
  title: 'Socar/Snackbar',
  component: Snackbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  decorators: [
    (Story) => (
      <div className={'m-1'}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const basic: Story = {
  args: {
    isOpen: true,
    text: '서비스 안내입니다.',
  },
}

export const tooLongText: Story = {
  args: {
    isOpen: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
}

export const basicWithButton: Story = {
  args: {
    text: '서비스 안내입니다.',
    isOpen: true,
    button: {
      text: '버튼',
    },
  },
}

export const tooLongTextWithButton: Story = {
  args: {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    isOpen: true,
    button: {
      text: '버튼',
    },
  },
}

export const basicWithLongButton: Story = {
  args: {
    text: '서비스 안내입니다.',
    isOpen: true,
    button: {
      text: '텍스트 버튼',
    },
  },
}
export const tooLongTextWithLongButton: Story = {
  args: {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    isOpen: true,
    button: {
      text: '텍스트 버튼',
    },
  },
}
