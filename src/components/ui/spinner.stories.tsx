import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj

export const Default: Story = { render: () => <Spinner /> }

export const Large: Story = { render: () => <Spinner className="size-8" /> }
