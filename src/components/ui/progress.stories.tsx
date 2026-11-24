import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <Progress value={60} className="w-full max-w-sm" />,
}

export const WithLabel: Story = {
  render: () => (
    <Progress value={40} className="w-full max-w-sm">
      <ProgressLabel>Uploading</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
}
