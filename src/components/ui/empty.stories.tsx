import type { Meta, StoryObj } from '@storybook/react-vite'
import { InboxIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

const meta = {
  title: 'UI/Empty',
  component: Empty,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          Your inbox is empty. New messages will show up here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Compose</Button>
      </EmptyContent>
    </Empty>
  ),
}
