import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Input placeholder="Email" type="email" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Input disabled placeholder="Disabled" />
    </div>
  ),
}

export const File: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Input type="file" />
    </div>
  ),
}
