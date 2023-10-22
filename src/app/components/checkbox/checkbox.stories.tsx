import { useArgs } from '@storybook/client-api'
import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { Checkbox } from './checkbox'

type Story = StoryObj<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  title: 'Components / Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export const Basic: Story = {
  args: {
    children: '',
  },
  render: (args) => {
    const [_, updateArgs] = useArgs<ComponentProps<typeof Checkbox>>()
    const handleChange = () => updateArgs({ checked: !args.checked })
    return (
      <Checkbox
        aria-label="チェックボックスだよ"
        onChange={handleChange}
        {...args}
      />
    )
  },
}

export const WithLabel: Story = {
  args: {
    children: 'チェックボックスのラベルだよ',
  },
  render: (args) => {
    const [_, updateArgs] = useArgs<ComponentProps<typeof Checkbox>>()
    const handleChange = () => updateArgs({ checked: !args.checked })
    return (
      <Checkbox
        id="checkbox"
        aria-label="チェックボックスだよ"
        onChange={handleChange}
        {...args}
      />
    )
  },
}

export default meta
