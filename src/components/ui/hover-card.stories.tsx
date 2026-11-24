import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>@shadcn</HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm font-semibold">@shadcn</p>
        <p className="text-sm text-muted-foreground">
          The creator of shadcn/ui. Hover cards preview content behind a link.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
}
