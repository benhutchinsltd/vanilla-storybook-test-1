import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bubble, BubbleContent } from '@/components/ui/bubble'
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from '@/components/ui/message'

const meta = {
  title: 'UI/Message',
  component: Message,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <MessageGroup>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Assistant</MessageHeader>
            <Bubble variant="muted">
              <BubbleContent>Hi! What would you like to build?</BubbleContent>
            </Bubble>
            <MessageFooter>10:42</MessageFooter>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <Bubble align="end">
              <BubbleContent>A starter with every component.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  ),
}
