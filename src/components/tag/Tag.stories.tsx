import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag.tsx'
import { TagColor } from '../const.ts'

const meta = {
  title: 'Socar/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      options: Object.keys(TagColor),
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
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const basic: Story = {
  args: {
    text: '태그',
    color: TagColor.basic,
  },
}

export const tooLongText: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    color: TagColor.basic,
  },
}

export const allTypeTags: Story = {
  render: () => {
    return (
      <div>
        <Tag text={'태그'} color={TagColor.basic} />
        <Tag text={'태그'} color={TagColor.red} />
        <Tag text={'태그'} color={TagColor.blue} />
        <Tag text={'태그'} color={TagColor.navy} />
        <Tag text={'태그'} color={TagColor.grey} />
      </div>
    )
  },
}

export const realWorldSample: Story = {
  render: () => {
    return (
      <div>
        <Tag text={'휘발류'} color={TagColor.basic} />
        <Tag text={'에어백'} color={TagColor.basic} />
        <Tag text={'후방감지센서'} color={TagColor.basic} />
        <Tag text={'블랙박스'} color={TagColor.basic} />
        <Tag text={'내비게이션'} color={TagColor.basic} />
        <Tag text={'첨단 운전자 보조 시스템'} color={TagColor.basic} />
      </div>
    )
  },
}
